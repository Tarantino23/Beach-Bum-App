const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const path = require('path');
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


// Connecting our database
mongoose.connect('mongodb+srv://Tarantino23:Mozarella0423@cluster0.gkacy.mongodb.net/Beach-Bum?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

<<<<<<< HEAD

//Landing page router and get/post requests
app.use('/', userRouter);

=======
//Render the landing page
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });
//Landing page router and get/post requests

app.use('/', userRouter);
>>>>>>> 0a598946862e25bdbd6bded5ab2859e56b6e0023

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
