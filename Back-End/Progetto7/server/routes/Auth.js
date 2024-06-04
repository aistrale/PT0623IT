const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const passport = require('passport');

const jwtSecretKey = 'jwt-secret-key';

// Model
const UserModel = require('../models/UserModel');

// Ogg che mi invierà il client
/* 
    {
        "fullname": "John Smith",
        "username": "johnsmith",
        "email": "johnsmith@example.com",
        "password": "Pa$$w0rd!",
        //"verified": false
    }
*/

// Auth Routes
router.post('/auth/register', (req, res) => {
    // Logica per la registrazione di un utente
    /* const obj = req.body;
    obj.verified = false;
    const user = new UserModel(obj);
    await user.save(); */

    const password = req.body.password
    /* console.log(password) */

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            // Store hash in your password DB.
            /* console.log(hash) */
            const user = new UserModel({
                ...req.body,
                password: hash,
                verified: false
            });
            await user.save();
            return res.status(201).json('User Created!!');
        });
    });

    
})

// Ogg che mi invierà il client
/* 
    {
        "username": "johnsmith", //Oppure email
        "password": "Pa$$w0rd!"
    }
*/

router.post('/auth/login', async (req, res) => {
    // Logica per il login di un utente
    const username = req.body.username; // oppure una email
    const password = req.body.password;

    const userLogin = await UserModel.findOne({username: username});
    if(userLogin) {
        // Lo username è stato trovato nel DB
        // Controllo la password
        const log = await bcrypt.compare(password, userLogin.password);
        if(log) {
            // La password è corretta
            // Generare e restituire al client un TOKEN JWT
            //jwt.sign(payload, secretKey, expiresIn)
            const token = jwt.sign(
                {
                    id: userLogin.id,
                    username: userLogin.username,
                    fullname: userLogin.fullname,
                    email: userLogin.email

                }, jwtSecretKey , { expiresIn: '1h' });
            return res.status(200).json(token);
        } else {
            // La password è errata
            return res.status(400).json({message: 'Invalid Password'})
        }

    } else {
        // Lo username non è stato trovato nel DB
        return res.status(400).json({message: 'Invalid Username'})
    }
})


router.get('/auth/googleLogin',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/callback', 
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  function(req, res, next) {
    // Successful authentication, redirect home.
    try {
        res.redirect(`http://localhost:3000?accessToken=${req.user.accessToken}`)
    } catch(err) {
        next(err)
    }

    
  });


// Export Router
module.exports = router;