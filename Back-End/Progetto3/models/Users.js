const mongoose = require('mongoose');

// Lo schema sarà la struttura che deve avere ogni oggetto che salverò nella Collection di Mongo DB
const userSchema = new mongoose.Schema( { 
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }
} );

// Model mi permette di creare un oggetto e definire la collection di riferimento e lo schema da utilizzare
const userModel = mongoose.model('Users', userSchema);

//Esportare i dati
module.exports = userModel;