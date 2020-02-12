// require('dotenv').config({path: __dirname + '/../.env'}) -> for hosting reference
require('dotenv').config()
const express = require("express");
const massive = require('massive')
const controller = require('./controller')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;
console.log('SERVER_PORT:', SERVER_PORT, 'CONNECTION:', CONNECTION_STRING)

massive(CONNECTION_STRING).then(dbObj => {
  app.set('db', dbObj)
  //app = {
  //   db: dbObj
  // }

  
  // dbInstance.new_planes().then(
  //   planes => console.log(planes)
  // ).catch(err => console.log(err))

})

app.use(express.json());

app.get('/api/planes', controller.getPlanes)

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});















