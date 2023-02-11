const express = require('express');
const userModel = require('../models/User');
const app = express();



// to add data 
//http://localhost:3000/Users/add
app.post("/user/add", async (req, res) => {
    try {
      const Users = req.body;
      await userModel.insertMany(Users);
      res.send("Data saved successfully");
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.post('/users', (req, res) => {
    const user = new userModel(req.body);
  
    user.save()
      .then(result => {
        res.status(201).json({
          message: "User created successfully",
          user: result
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Failed to create user",
          error: error
        });
      });
  });
  

//http://localhost:3000/Users

app.get('/Users', async (req, res) => {
  const Users = await userModel.find();

  try {
    
    res.status(200).send(Users);
  } catch (err) {
    res.status(500).send(err);
  }
});





module.exports = app