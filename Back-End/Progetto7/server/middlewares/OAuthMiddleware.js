const UserModel = require('../models/UserModel');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const jwtSecretKey = 'jwt-secret-key';

const googleStrategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/callback"
  },
  async function(accessToken, refreshToken, profile, passportNext) {
    try {
    /* console.log('Profile: ', profile) */
    const {email, name, given_name, family_name, email_verified} = profile._json
    const user = await UserModel.findOne({email});
    console.log("UserLogin:", user);
    
    if(user) {
        // Se le credenziali sono già memorizzate nel DB
        // crea il token e invialo al client
        console.log("there is a user");
        const accessToken = jwt.sign(
          {
              id: user.id,
              username: user.username,
              fullname: user.fullname,
              email: user.email

          }, jwtSecretKey , { expiresIn: '1h' });
        passportNext(null, { accessToken })
    } else {
        // Altrimenti Se le credenziali NON sono già memorizzate nel DB
        // crea e salva l'oggetto nel DB e poi
        // crea il token e invialo al client
      const newUser = new UserModel({
        fullname: name,
        username: given_name + family_name,
        password: '-',
        email,
        verified: email_verified
      })
      const createdUser = await newUser.save()
      const accessToken = jwt.sign(
        {
            id: createdUser.id,
            username: createdUser.username,
            fullname: createdUser.fullname,
            email: createdUser.email

        }, jwtSecretKey , { expiresIn: '1h' });
      passportNext(null, { accessToken })
        
    }
    
    return passportNext(null, {});
  } catch (error) {
    passportNext(error)
  }
});


module.exports = googleStrategy;