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




