const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: './.env' })

const app = express()

// const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// })

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dntjr13570',
  database: 'test'
})

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false })) // req.body가 undefined로 나오는것을 막음
// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.set('view engine', 'hbs')

db.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("mysql connected")
  }
})

//Define Routes
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

app.listen(5000, function(){
  console.log('server started on port 5000')
})