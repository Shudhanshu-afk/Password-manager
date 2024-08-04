const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Passes')
.then(()=>{
  console.log("Connection open");
})
.catch((err)=>{
  console.log(err);
})
app.listen(3000, ()=>{
  console.log("Listening to port 3000!!");
})

const Pass = new mongoose.Schema({}, {strict:false});
const Passwords = mongoose.model('Passwords', Pass);

app.get('/', async(req, res)=>{
  const passwords = await Passwords.find();
  res.send(passwords);
});
app.post('/', async(req, res)=>{
  const passwords = req.body;
  const newpass = new Passwords(passwords);
  await newpass.save();
  res.send(passwords);
});
app.delete('/:id', async(req, res)=>{
  const id = req.params.id;
  
  await Passwords.findByIdAndDelete(id);
  res.send("successful");
});
app.put('/:id', async(req, res)=>{
  const id = req.params.id;
  await Passwords.findByIdAndUpdate(id, req.body,{runValidators : true});
  
  
  res.send("successful");
});

