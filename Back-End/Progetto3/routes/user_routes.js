const express = require('express');
const router = express.Router();

const debug = require('../middlewares/debug');

const userModel = require('../models/Users');

router.get('/', debug.singleLog,  (req, res) => {
    /* const apiKey = req.query.key;
    if(apiKey !== 'qwerty') {
        res.status(401).send('Non Autorizzato!!!!')
    } */
    res.send('Hello World')
})

router.get('/users', async (req, res) => {
    const allUsers = await userModel.find();
    return res.status(200).json(allUsers);
})

router.get('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    // findById(id) è un metodo di mongoose che mi permette di leggere il contenuto di uno specifico ogg della collection
    try {
        const user = await userModel.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        //return res.status(500).json({message: 'Utente non trovato', error: error})
        next(error);
    }
})

// CREATE
router.post('/users', async (req, res, next) => {
    const obj = req.body;
    try{
        const newUser = userModel(obj);
        const userSave = await newUser.save();
        return res.status(201).json(userSave);
    } catch (error) {
        //return res.status(500).json({message: 'Problemi nella creazione di un utente', error: error})
        next(error);
    }
})

// UPDATE
router.put('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const editUser = await userModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editUser); 
    } catch (error) {
        //return res.status(500).json({message: 'Problemi nella modifica di un utente', error: error})
        next(error);
    }
})

// DELETE
router.delete('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'remove item successfully'}); 
    } catch (error) {
        //return res.status(500).json({message: 'Problemi nella rimozione di un utente', error: error})
        next(error);
    }
})

module.exports = router;