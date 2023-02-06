import { getAllRooms } from './db-ops';
import * as bodyParser from 'body-parser';
import postgres from 'postgres';
import express from 'express';
import cors from 'cors';

const expressApp = express();
const expressPort = 3000;
import * as rest from './rest-api'

const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()

expressApp.use(bodyParser.json())
expressApp.use(bodyParser.urlencoded({ extended: true }))
expressApp.use(cors());

expressApp.get('/', (req, res) => {
  res.send('Hello World!');
});

expressApp.listen(expressPort, () => {
  return console.log(`Express is listening at http://localhost:${expressPort}`);
});

/// DB operations
// NONE

/// REST API

// Create user
expressApp.post('/v1/user', (req, res) => {
  console.log(`..... index.ts: before restCreateUser: body: ${JSON.stringify(req.body)}`)
  rest.restCreateUser(req, res)
});

// Get user
expressApp.get('/v1/user', (req, res) => {
  rest.restGetUser(req, res);
});
// delete user
expressApp.delete('/v1/user', (req, res) => {
  rest.restDeleteUser(req, res);
});

// Get all users
expressApp.get('/v1/users', (req, res) => {
  rest.restGetUsers(req, res);
});

// login if valid; silent return if already logged in
expressApp.post('/v1/login', (req, res) => {
  console.log('index.ts: login')
  rest.restLogin(req, res);
});

expressApp.get('/v1/rooms', (req, res) => {
  rest.restGetRooms(req, res)
})

expressApp.get('/v1/room-users', (req, res) => {
  rest.restGetUsersInRoom(req, res)
})

expressApp.get('/v1/active-users', (req, res) => {
  rest.restGetActiveUsers(req, res)
})



export default expressApp;