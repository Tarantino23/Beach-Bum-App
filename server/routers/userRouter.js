const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();


<<<<<<< HEAD
userRouter.post('/', userController.verifyUser, (req, res) => {
    return res.status(200).redirect('/welcome')
  })
  
userRouter.get('/', (req, res) => {
    return res.status(200).redirect('/create-account');
=======
userRouter.post('/login', userController.verifyUser, (req, res) => {
    return res.status(200).json(res.locals);
>>>>>>> 0a598946862e25bdbd6bded5ab2859e56b6e0023
})

userRouter.post('/createUser', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals);
})

userRouter.post('/search', userController.searchBeaches, (req, res) => {
  return res.status(200).json(res.locals);
})

module.exports = userRouter;