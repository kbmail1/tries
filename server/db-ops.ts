import * as IRest from './interfaces'

import postgres from 'postgres';

const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'trials',
  username: 'kundan',
  password: 'kundan'
});


export const login = async (name: string, password: string) => {
  try {
    console.log('dbops: getUser: name: ', name)
    const user = await sql`
    INSERT into active_users (name, since) values (${name}, now()) returning name`
    // TODO: Login.
  } catch (err) {
    throw err
  }
}

export const getUser = async (user_name: string) => {
  try {
    console.log('dbops: getUser: name: ', user_name)
    const user = await sql`
    SELECT name, email, dob FROM users
    WHERE name = ${user_name}`
    return user;
  } catch (err) {
    throw err
  }
}

/*
 * auto increment user_id
 * check if user exists
 * insert user
 * return user
 **/
export const createUser = async (userObj: IRest.ICreateUserRequest) => {
  try {
    console.log(userObj)
    // does user exist?
    const e = await sql`
    SELECT count(*) from chatter where name = ${userObj.name}`
    console.log('e: ', e[0].count)
    if (e[0].count > 0) {
      return 'User already exists'
    }

    const c = await sql`select MAX("user_id") from chatter`
    console.log('max: c: ', c[0].max)

    const m = c[0].max + 1
    const user = await sql`
    INSERT INTO chatter values (${m}, ${userObj.name}, ${userObj.email}, ${userObj.password},  ${userObj.dob})
    returning name
  `

    return user;
  } catch (err) {
    throw err
  }
}

export const deleteUser = async (user_name: string) => {
  try {
    const user = await sql`
    DELETE FROM users
    WHERE name = ${user_name}
    returning name
  `
    return user;
  } catch (err) {
    throw err
  }
}


export const getUsers = async ()  => {
  try {
    const users = await sql`
    SELECT name, email, dob FROM users`
    return users;
  } catch (err) {
    throw err
  }
}

export const getActiveUsers = async () => {
  try {
    const users = await sql`
    SELECT name, since FROM active_users`
    return users
  } catch (err) {
    throw err
  }

}

// rooms

export const createRoom = async (
  room_name: string, creator_name: string) => {
  try {
    const room = await sql`
    INSERT INTO room values (${room_name}, ${creator_name}, current_timestamp)
    returning name
  `
    console.log('room: ', room)
    return room;
  } catch (err) {
    throw err
  }
}

// clean up room_users and then room
export const deleteRoom = async (room_name: string, creator_name: string) => {
  try {
    console.log('db-ops: deleteRoom: deleting room_users...')
    const room_users = await sql`
    DELETE FROM room_users
    WHERE room_name = ${room_name} AND creator_name = ${creator_name}
    returning {room_name, creator_name, user_name}
  `

    console.log('db-ops: deleteRoom: deleting room...')
    const room = await sql`
    DELETE FROM room
    WHERE room_name = ${room_name} AND creator_name = ${creator_name}
    returning {room_name, creator_name}
  `

    console.log('room: ', room)
    return room;
  } catch (err) {
    throw err
  }
}

export const joinRoom = async (room_name: string, creator_name: string, user_name: string) => {
  try {
    const room = await sql`
    INSERT INTO room_users values (${room_name}, ${creator_name}, ${user_name})
    returning {room_name, creator_name, user_name}`
    console.log('room: ', room)
    return room;
  } catch (err) {
    throw err
  }
}

export const leaveRoom = async(room_name: string, creator_name: string, user_name: string) => {
  try {
    const room = await sql`
    DELETE FROM room_users WHERE room_name = ${room_name} AND creator_name = ${creator_name} AND user_name = ${user_name}
    returning {room_name, creator_name, user_name}`
    console.log('room: ', room)
    return room;
  } catch (err) {
    throw err
  }
}

export const getUsersInRoom = async (room_name: string, creator_name: string) => {
  try {
    const users = await sql`
    SELECT user_name, from rooms where room_name = ${room_name} AND creator_name = ${creator_name}
    `
    console.log('users: ', users)
    return users
  } catch (err) {
    throw err
  }
}

// export const gtAllUsersInRoom

export const getAllRooms = async () => {
  try {
    console.log('db-ops: getAllRooms...')
    const rooms = await sql`
    SELECT room_name, creator_name FROM rooms`
    console.log('rooms: ', rooms)
    return rooms
  } catch (err) {
    throw err
  }
}

export const logout = async (name) => {
  try {
    console.log('dbops: logout: name: ', name, ' deleting myself from room-users, and others my rooms.')
    let local_name = await sql`delete from room_users where creator_name = ${name} || user_name = ${name}
    returning user_name
  `
    console.log('local_name: ', local_name)

    console.log('dbops: logout: name: ', name, ' deleting all my rooms')
    local_name  = await sql`delete from rooms where creator_name = ${name}
    returning user_name
  `
    console.log('local_name: ', local_name)
    console.log('dbops: logout: name: ', name, ' deleting myself from active_users...')
    local_name = await sql`delete from active_users where user_name = ${name}
    returning user_name
  `

    console.log('local_name: ', local_name)
    return name
  } catch (err) {
    throw err
  }
}
