let h1 = document.querySelector('h1');
console.dir(h1);

let obj = [];

// Chiamata Ajax Javascript
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
var xhttp = new XMLHttpRequest(); // Ogg capace di fare chiamate Ajax
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true); // // imposto il tipo di chiamata e il link alle API
xhttp.send(); // Invio una chiamata Ajax

xhttp.onreadystatechange = function() { // mi metto in attesa del cambio di stato della chiamata ajax
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       obj = JSON.parse(this.responseText)
       console.log(obj);
    }
};


// Chiamata Ajax tramite fetch con le promise
let promise = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()); 

console.log(promise);

// mettendo lo script nell'head 
// quando devo fare accesso al dom devo esser certo che il DOM sia carico
document.addEventListener("DOMContentLoaded", function() {
    promise.then(json => {
        let ul = document.querySelector('ul');
        console.log(json)
        json.forEach(ele => {
            let li = document.createElement("li")
            li.innerText = ele.name;
            ul.appendChild(li);
        })
    
    })
})


// Recap Array

let arr = ['primo', 'secondo', 'terzo'];

arr.forEach(el => console.log(el)) // output: primo secondo terzo 
let arrFilter = arr.filter(el => el.length > 5);
let arrFind = arr.find(el => el.length > 5);
let arrMap = arr.map(el => el + '!!!');

console.log(arr); // output: ['primo', 'secondo', 'terzo']
console.log(arrFilter); // output: ['secondo']
console.log(arrFind); // output: 'secondo'
console.log(arrMap); // output: ['primo!!!', 'secondo!!!', 'terzo!!!']


// Destrutturazione 

let obj = {id: 1, name: 'John', lastName: 'Smith'}
let arr = ['primo', 'secondo'];
/* let id = obj.id;
let name = obj.name;
let lastName = obj.lastName; */
const {lastName, name} = obj
/* let x = arr[0];
let y = arr[1]; */
const [y, x] = arr;

// Object

let obj = {id: 1, name: 'John', lastName: 'Smith'} // object literal

class Persona {
    nome;
    cognome;
    eta;

    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
}

let p1 = new Persona('Mario', 'Rossi', '22');
let p2 = new Persona('Giuseppe', 'Verdi', '36');

function Animal(nome, cognome, eta) {
    this.nome = nome;
    this.cognome= cognome
    this.eta = eta;
}

let a1 = new Animal('Mario', 'Rossi', '22')
let a2 = new Animal('Giuseppe', 'Verdi', '36')


// Function
let func = function() {
    return 'sono una funzione';
}

let test = func;
console.log(test()); // undefind - sono una funzione - corpo della funzione


[].forEach(()=> console.log('test'))