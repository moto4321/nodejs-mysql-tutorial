const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const app = express()

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

app.set('view engine', 'hbs')

db.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("mysql connected")
  }
})

app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>")
})

app.listen(5000, function(){
  console.log('server started on port 5000')
})