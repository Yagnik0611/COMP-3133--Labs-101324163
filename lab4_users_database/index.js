const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/UserRoutes.js');




const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://Yagnik:Yagnik@cluster0.olmzrvg.mongodb.net/Lab04?retryWrites=true&w=majorityE', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});


app.use(userRoute);
app.listen(3000, () => { console.log('Server is running...') });
