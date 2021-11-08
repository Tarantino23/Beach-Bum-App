const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded( {extended: true} ));


// Connecting our database
mongoose.connect('mongodb+srv://Tarantino23:Mozarella0423@cluster0.gkacy.mongodb.net/Beach-Bum?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

// Using mongoimport to import data from a JSON into our MongoDB Atlas cluster
mongoimport --uri "mongodb://:codEsmith001@atlas-host1:27017,atlas-host2:27017,atlas-host3:27017/Beach-Bum?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection NYbeaches --drop --file /home/tarantino23/Codesmith/BeachBum/Beach-Bum-App/server/jsonFiles/DPR_Beaches_001.json


mongoimport --db Beach-Bum --collection NYbeaches --authenticationDatabase admin --username Tarantino23 --password codEsmith001 --drop --file /home/tarantino23/Codesmith/BeachBum/Beach-Bum-App/server/jsonFiles/DPR_Beaches_001.json

--authenticationDatabase admin

//Render the landing page
app.get('/', (req, res) => {
  return res.status(200).render('../client/index.html')
})

//Landing page router and get/post requests
app.use('/', userRouter);





app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
