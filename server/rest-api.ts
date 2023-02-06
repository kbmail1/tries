import { IDBError } from './interfaces';
// import expressApp from './index'
import * as db from './db-ops'

/**
 * Login request
 */
export const restLogin = ((req, res) => {
  console.log('request:', req)
  const name = req.body.name
  const password = req.body.password
  console.log('v1/user: name: ', name)
  db.login(name, password)
    .then((user) => {
      console.log('v1/user: user: ', name)
      res.send(user + ' login successful').status(200);
    })
    .catch((err) => {
      console.log('v1/user: err: ', err)
      res.status(400).send(`User ${name} does not exist`, res)
    });
})

/**
 * Get user by name
 */
export const restGetUser = ((req, res) => {
  const name = req.query.name
  console.log('v1/user: name: ', name)
  db.getUser(String(name))
    .then((user) => {
      console.log('v1/user: user: ', user)
      res.send(user).status(200);
    })
    .catch((err) => {
      console.log('v1/user: err: ', err)
      res.status(400).send(`User ${name} does not exist`)
    });
})

/**
 * create new user
 */
export const restCreateUser = (req, res) => {
  console.log('index.ts: restCreateUser:', req.body)
  const userObj = req.body;
  db.createUser(userObj)
    .then((user) => {
      console.log('index.ts: restCreateUser: user: ', user)
      res.send(user).status(200);
    })
    .catch((err) => {
      console.log('index.ts: restCreateUser: err: ', err)
      res.status(401).send(`User ${userObj.name} create failed`)
    })
}

/**
 * Delete existing user
 */
export const restDeleteUser = (req, res) => {
  console.log('index.ts: restDeleteUser:', req.body)
  const userObj = req.body;
  db.deleteUser(userObj.name)
    .then((user) => {
      console.log('index.ts: restDeleteUser: user: ', user)
      res.send(user).status(200);
    })
}


/**
 * Get User List
 */
export const restGetUsers = ((req, res) => {
  db.getUsers()
    .then((users) => {
      console.log('resetGetUsers: users:', users)
      users.forEach((user) => {
        console.log('v1/users: user: ', user)
      })
      res.send(users).status(200);
    })
    .catch((err) => {
      console.log('v1/user: err: ', err)
      res.status(500).send(`Server side failure`)
    });
})


/**
 * Get Active Users
 */
export const restGetActiveUsers = ((req, res) => {
  db.getActiveUsers()
    .then((users) => {
      users.forEach((user) => {
        console.log('v1/users: user: ', user)
      })
      res.send(users).status(200);
    })
    .catch((err) => {
      console.log('v1/user: err: ', err)
      res.status(500).send(`Server side failure`)
    });
})

/**
 *
 * @param req
 * @param res
 */
export const restCreateRoom = ((req, res) => {
  const room_name = req.body.room_name
  const creator_name = req.body.creator_name
  db.createRoom(room_name, creator_name)
    .then((room) => {
      console.log('index.ts: restCreateRoom: room: ', room)
      res.send(room).status(200);
    })
    .catch((err) => {
      console.log('index.ts: restCreateRoom: err: ', err)
      res.status(401).send(`Room ${{room_name, creator_name}} create failed`)
    })
})

export const restDeleteRoom = ((req, res) => {
  const roomObj = req.body;
  db.deleteRoom(roomObj.room_name, roomObj.creator_name)
    .then((room) => {
      console.log('index.ts: restDeleteRoom: room: ', room)
      res.send(room).status(200);
    })
    .catch((err) => {
      console.log('index.ts: restDeleteRoom: err: ', err)
      res.status(401).send(`Room ${roomObj.name} delete failed`)
    })
})

export const restGetUsersInRoom = ((req, res) => {
  const room_name = req.body.room_name
  const creator_name = req.body.creator_name
  db.getUsersInRoom(room_name, creator_name)
    .then((users) => {
      users.forEach((user) => {
        console.log('v1/users: user: ', user)
      })
      res.send(users).status(200);
    })
    .catch((err) => {
      console.log('v1/user: err: ', err)
      res.status(500).send(`Server side failure`)
    });
})

/**
 * Get all rooms for all users
 */
export const restGetRooms = ((req, res) => {
  db.getAllRooms()
    .then((rooms) => {
      rooms.forEach((room) => {
        console.log('v1/rooms: room: ', room)
      })
      res.send(rooms).status(200);
    })
    .catch((err) => {
      console.log('v1/rooms: err: ', err)
      res.status(500).send(`Server side failure`)
    });

})


export const restJoinRoom = ((req, res) => {
  const room_name = req.body.room_name
  const creator_name = req.body.creator_name
  const user_name = req.body.user_name
    .then((room) => {
      console.log('index.ts: restJoinRoom: room: ', room)
      res.send(room).status(200);
    })
    .catch((err) => {
      console.log('index.ts: restJoinRoom: err: ', err)
      res.status(401).send(`Room ${{room_name, creator_name, user_name}} join failed`)
    })
})


export const restLeaveRoom = ((req, res) => {
  const room_name = req.body.room_name
  const creator_name = req.body.creator_name
  const user_name = req.body.user_name;

  db.leaveRoom(room_name, creator_name, user_name)
    .then((room) => {
      console.log('index.ts: restLeaveRoom: room: ', room)
      res.send(room).status(200);
    })
    .catch((err) => {
      console.log('index.ts: restLeaveRoom: err: ', err)
      res.status(401).send(`Room ${name} leave failed`)
    })
})

export const restLogout = ((req, res) => {

  db.logout(req.body.user_name)
    .then((user) => {
      console.log('index.ts: restLogout: user: ', user)
      res.send(user).status(200);
    })
    .catch((err) => {
      console.log('index.ts: restLogout: err: ', err)
      res.status(401).send(`User ${name} logout failed`)
    })
})

