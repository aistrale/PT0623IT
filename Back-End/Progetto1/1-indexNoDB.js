const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

let users = [
    {id: 1, name: 'John', lastName: 'Doe', email: 'j.doe@example.com'},
    {id: 2, name: 'Mario', lastName: 'Rossi', email: 'm.rossi@example.com'}
];

app.get('/home', (req, res) => {
    res.json({message: 'Hello, world!'});
})

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    let obj = users.find(u => u.id === +id);
    res.json(obj);
})

app.post('/users', (req, res) => {
    const obj = req.body;
    users.push(obj);
    res.json({message: "Utente inserito con successo!"});
})

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const o = req.body;
    let obj = users.find(u => u.id === +id);
    Object.assign(obj, o)
    res.json({message: "Utente modificato con successo!"});
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter(u => u.id !== +id);
    res.json({message: "Utente eliminato con successo!"});
})


app.listen(port, () => {
    // http://localhost:3001/
    console.log(`Server attivo sulla porta: ${port}`)
  })