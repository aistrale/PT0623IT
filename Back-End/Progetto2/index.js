const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3001;
const dbName = 'Progetto2';

// Middlewares
app.use(cors()); // middleware per la gestione del CORS
app.use(express.json()); // middleware per la gestione del formato JSON

// Models
// Lo schema sarà la struttura che deve avere ogni oggetto che salverò nella Collection di Mongo DB
const userSchema = new mongoose.Schema(
    { 
        name: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
);

// Model mi permette di creare un oggetto e definire la collection di riferimento e lo schema da utilizzare
const userModel = mongoose.model('Users', userSchema);

// Routes
// CRUD - CREATE - READ - READbyID - UPDATE - DELETE
// GETALL
app.get('/users', async (req, res) => {
    
    // Gestione dei paramentri passati tramite querystring

    // sort(sort) | size(limit) | page(skip)
    console.log(req.query);

    // 10 -> size = 3 | page 3
    const limit = req.query.size; 
    const skip = (req.query.page-1) * limit;
    const sort = (req.query.order)


    // Sort Ordina in base ad una proprietà della collection (1) -> ASC (-1) -> DESC
    // Limit restituisce un numero limitato di risultati
    // Skip 

    // http://localhost:3001/users?page=1&size=3&order=name
    const filterUsers = await userModel.find()
                                        .sort({[sort]: 1})
                                        .limit(limit)
                                        .skip(skip);

    
    // find() è un metodo di mongoose che mi permette di leggere tutto il contenuto della collection
    /* const allUsers = await userModel.find(); */
    return res.status(200).json(filterUsers);
})

// GETbyID
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    // findById(id) è un metodo di mongoose che mi permette di leggere il contenuto di uno specifico ogg della collection
    try {
        const user = await userModel.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: 'Utente non trovato', error: error})
    }

})

// GETbyCity
app.get('/users/city/:city', async (req, res) => {
    const city = req.params.city;
    try {
        const usersCity = await userModel.find({city: city})
        return res.status(200).json(usersCity);
    } catch (error) {
        return res.status(500).json({message: 'Utente non trovato', error: error})
    }
})

// CREATE
app.post('/users', async (req, res) => {
    const obj = req.body;
    try{
        const newUser = userModel(obj);
        const userSave = await newUser.save();
        return res.status(201).json(userSave);
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella creazione di un utente', error: error})
    }
})

// UPDATE
app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const editUser = await userModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editUser); 
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella modifica di un utente', error: error})
    }
})

// DELETE
app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'remove item successfully'}); 
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella rimozione di un utente', error: error})
    }
})

// Connect to Mongo and start the server
async function connect() {
    try {
        // Codice che potrebbe causare un errore
        // Codice per la connessione al DB Mongo
        await mongoose.connect('mongodb+srv://admin:9GjpNBPpWVwxpYL5@cluster0.7opl1ou.mongodb.net/'+dbName);
        app.listen(port, () => console.log('Server attivo sulla porta: ' + port));
    
    } catch (error) {
        console.log(error);
    }
   
}

connect();