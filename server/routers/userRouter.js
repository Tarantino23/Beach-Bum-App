const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();


userRouter.post('/login', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals);
})

userRouter.post('/createUser', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals);
})

userRouter.post('/search', userController.searchBeaches, (req, res) => {
  return res.status(200).json(res.locals);
})

module.exports = userRouter;