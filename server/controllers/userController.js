const User = require('../models/userModel');
const Nybeach = require('../models/nybeachesModel');

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

userController.searchBeaches = async (req, res, next) => {
  
    const beachOptions = req.body;
    // console.log('this is req.body: ', req.body)
    console.log('beachOptions: ', beachOptions)
    try {
      const options = {};
      beachOptions.map(el => options[el] = { $nin: [null, 'N']});
      console.log('this is options: ', options);
      const beaches = await Nybeach.find(options);
      console.log('this is beaches: ', beaches)
      res.locals = beaches;
      return next();
      
    } catch (error) {
      return next('Error in userController.searchBeaches: ' +JSON.stringify(Error));
  }
};


// const { beachOptions } = req.body;
  // try {
  //   const beaches = await NYbeaches.find({beachOptions});
  //   for (let i = 0; i < beachOptions.length; i++) {
  //     if (NYbeaches.beachOptions[i] !== null && NYbeaches.beachOptions[i] !== 'N')
  //   };
  // }

  // const { beachOptions } = req.body;
  // try {
  //   const beaches = new Set();
  //   for (let i = 0; i < beachOptions.length; i++) {
  //     const foundBeaches = NYbeaches.find(beachOptions[i]);
  //     foundBeaches.forEach( el => beaches[el] = el);
  //   }
  //   res.locals = set.toArray(beaches);
  //   return next();
  // } catch {

  // }

module.exports = userController;