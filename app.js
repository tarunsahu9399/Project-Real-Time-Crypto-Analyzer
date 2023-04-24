const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs=require("fs");

const pug = require("pug");
const path = require('path');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const UserData = require('./models/user');
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}

app.use(express.urlencoded({ extended: true}))
//  mongoose.connect('mongodb://127.0.0.1:27017/test',
//  {     useNewUrlParser: true,
//       useUnifiedTopology: true})
//    .then(() => {
//          console.log("mongo connection open!!")
//     })
//      .catch(err => {
//         console.log("connection error!!")
//          console.log(err)
//      });
main().catch((err) => console.log(err));

async function main() {
  console.log(process.env.DB_URL);
  const DBURL =
    process.env.DB_URL || "mongodb://0.0.0.0:27017/authentication";
  await mongoose.connect(DBURL);
}
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("connection open");
  const port = process.env.PORT || 80;
  app.listen(port, () => {
    console.log(`list on port ${port}`);
  });
});
mongoose.set('strictQuery', true);
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static('static'))



app.get('/', (req, res) => {

  const params = {}
  res.status(200).render('login.pug', params)
})

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/module1', (req, res) => {
  res.render('module1');
});

app.get('/module2', (req, res) => {
  res.render('module2');
});

app.get('/module3', (req, res) => {
  res.render('module3');
});
app.post('/login',async(req,res)=>{
  console.log('hello');
  const { username, password } = req.body;
  console.log(req.body)
  const user = await UserData.findOne({ username });
  console.log(user)
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
      res.render('home');

      console.log("Succesfully logged in ");
  }
  else {
    
    console.log("wrong login");
   
    res.render('login');
  }

})
app.post('/signup', async (req, res) => {
  console.log('hello');
  console.log(req.body);
  const { username,email,password } = req.body;
  if (!password) {
      return res.redirect('/home');
  }
  const hash = await bcrypt.hash(password, 12);
  const user = new UserData({
      username,
      email,
      password: hash
  })
  await user.save();
  res.render('home');
})
  

