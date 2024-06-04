const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('passport');
const googleStategy = require('./middlewares/OAuthMiddleware')

const app = express();
const port = 3001;
const dbName = 'ProgettoDBAuth';

// Middlewares start
app.use(cors());
app.use(express.json());
passport.use('google', googleStategy);

// Model
const userModel = require('./models/UserModel');

// Endpoints
const AuthEndpoint = require('./routes/Auth');
const UsersEndpoint = require('./routes/Users');
app.use(AuthEndpoint);
app.use(UsersEndpoint);


// Connect to DB and Start the server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(response => app.listen(port, () => console.log('Server attivo sulla porta: ' + port)))
        .catch(error => console.log(error))