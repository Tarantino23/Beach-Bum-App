const User = require('../models/userModel');


const userController = {};

userController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) return res.status(204).send('Missing Password or Username');

    try {
        const user = await User.findOne({userName: username});
        if (!user) return res.status(204).send('Incorrect Username or Password');
        try {
            if (password === user.password) {
                res.locals.user = user;
                return next()
            } else {
              return res.status(204).send('Incorrect Username or Password');
            }
        } catch(error) {
            return next('Error in userController.verifyUser: ' +JSON.stringify(Error));
        }
    } catch(error) {
        return next('Error in userController.verifyUser: ' +JSON.stringify(Error));
    }
};

userController.createUser = async(req, res, next) => {
  try {
    const {userName, password, firstName, lastName, email} = req.body;
    const newUser = await User.create({
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    res.locals = newUser;
    return next();
  }
  catch(error){
    res.status(400).send('can\'t create user');
  }
}

module.exports = userController;