-- login (name, password)
  select id, name from users where name = $1 and password = $2
  insert into active_users  (id, since) values ($1, now())

-- ------------ create room (room_name, creator_name) ------------

  -- get id of creator from active users.
  -- ensure value of count is 1 and only 1
  select id as creator_id, from active_users where name = $2

  -- create the room.
  insert into rooms (room_name, creator_id, since) values ($1, <above-id>, now())
    (select id from users where name = 'kundan')

-- insert new room
insert into rooms (room_name, creator_id, since) values ($1, $2, now())


-- ------------ join room (room_name, user_name) ------------

  -- get id of user from active users.
  select id as user_id, count(*) from active_users where id in
  (select id from users where name = $2)

  -- join the room.
  insert into rooms (room_name, creator_id, since)
    values ($1, (select id from active_users where name = $2), now())

-- ------------ leave room (room_name, user_name) ------------

  -- leave the room (room_name, user_name)
  delete from room_users where room_name = $1 and user_name = $2

-- ------------ list rooms (user_name) ------------

  -- list rooms (user_name)
  select room_name, creator_name from rooms where creator_name = $1

-- ------------ list all rooms for all users ------------

  -- list all rooms for all users
  select room_name, creator_name from rooms

-- ------------ list active users in given room (room_name, creator_name) ------------

select user_name from room_users where room_name = $1 and creator_name = $2


-- ------------ list active users in all rooms ------------

  -- list all active users table
select id, name, since from active_users

-- ------------ logout (user_name) ------------

  -- if I am logging out, all my active rooms should be deleted
  delete from room_users where creator_name = $1
  delete from rooms where creator_name = $1
  delete from active_users where creator_name = $1

-- ------------ send message (room_name, creator_name, user_name, message) ------------

  -- send message to room (room_name, creator_name), by user (user_name), message)
  insert into message_log (room_name, creator_name, user_name, message_time, message)
    values ($1, $2, $3 now(), message)

-- ------------ list last n messages (in room room_name, creator_name) ------------

  -- list last n messages (in room room_name, creator_name, how_many)
  select message_time, user_name, message from message_log where room_name = $1, creator_name = $2
    order by message_time desc limit $3


