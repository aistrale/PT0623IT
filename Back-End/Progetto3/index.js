// Importo le dipendenze necessarie
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Imposto l'app express e definisco i dati della mia connessione
const app = express();
const port = 3001;
const dbName = 'Progetto2';

// Middlewares
app.use(cors()); // middleware per la gestione del CORS
app.use(express.json()); // middleware per la gestione del formato JSON

// Middleware custom
const debug = require('./middlewares/debug');
const error = require('./middlewares/error');

app.use(debug.logger);
/* app.use(debug.ceckApi); */

// Routes
const routes = require('./routes/user_routes');
app.use(routes);

app.use(error.errorHandler);
app.use(error.pageNotFoundHandler);
 
// Connect to DB and Start the server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(response => app.listen(port, () => console.log('Server attivo sulla porta: ' + port)))
        .catch(error => console.log(error))


