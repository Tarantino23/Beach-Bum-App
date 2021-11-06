const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();


userRouter.post('/', userController.verifyUser, (req, res) => {
    return res.status(200).redirect('/welcome')
  })
  
userRouter.get('/', (req, res) => {
    return res.status(200).redirect('/create-account')
})

  module.export = userRouter;