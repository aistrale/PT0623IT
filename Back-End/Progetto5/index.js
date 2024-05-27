const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3001;
const dbName = 'ProgettoDB';

// Model
const postSchema = new mongoose.Schema( {
    title: { type: String, required: true },
    body: { type: String, required: true},
    date: { type: Date, required: false }
} );
const postModel = mongoose.model('Posts', postSchema);

const userSchema = new mongoose.Schema( { 
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    address: {
        city: { type: String },
        state: { type: String }
    },
    age: { type: Number, required: true, default: 18 },
    email: { type: String, required: true, unique: true},
    posts: [
        { type: mongoose.Schema.ObjectId, ref: 'Posts'}
    ]
} );

// Model mi permette di creare un oggetto e definire la collection di riferimento e lo schema da utilizzare
const userModel = mongoose.model('Users', userSchema);


app.get('/create', async (req, res) => {
    const newPost = postModel({
        title: 'Post di Giuseppe',
        body: 'Lorem Ipsum',
        date: Date.now()
    });
    const postSave = await newPost.save();
    
    let obj = {
        name: 'Giuseppe',
        lastname: 'Verdi',
        address: {
            city: 'Roma',
            state: 'Italia'
        },
        age: 41,
        email: 'g.verdi@example.com',
        posts: [postSave]
    }

    const newUser = userModel(obj);
    const userSave = await newUser.save();
    return res.status(201).json(userSave);
})

app.get('/users', async (req, res) => {
    const users = await userModel.find().populate('posts');
    return res.status(200).json(users);
})



// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB and Start the server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(response => app.listen(port, () => console.log('Server attivo sulla porta: ' + port)))
        .catch(error => console.log(error))
