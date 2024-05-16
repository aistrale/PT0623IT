const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;
const dbName = 'Test';

// Middleware
app.use(cors());
app.use(express.json());


const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    lastname: { 
        type: 'string',
        required: true  
    },
    email: { 
        type: 'string', 
        required: true
    }
})

const userModel = mongoose.model('Users', userSchema);

app.get('/home', (req, res) => {
    res.json({message: 'Hello, world!'});
})

app.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users);
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch(err){
        res.status(500).json({message: err.message});
    }
    
})

app.post('/users', async (req, res) => {
    const obj = req.body;
    const newUser = new userModel(obj)
    const dbUser = await newUser.save();
    res.status(201).json(dbUser);
})

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try{
        const userUpdate = await userModel.findByIdAndUpdate(id, obj);
        res.status(200).json(userUpdate);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: 'success'});
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

async function start() {
    try {
        // Connection String
        // mongodb+srv://admin:9GjpNBPpWVwxpYL5@cluster0.7opl1ou.mongodb.net/
        await mongoose.connect('mongodb+srv://admin:9GjpNBPpWVwxpYL5@cluster0.7opl1ou.mongodb.net/'+dbName)
        app.listen(port, () => {
            // http://localhost:3001/
            console.log(`Server attivo sulla porta: ${port}`)
        })
    } catch(err) {
        console.error(err)
    }
}
start();