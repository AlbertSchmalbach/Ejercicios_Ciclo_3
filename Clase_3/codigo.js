/* let numero = prompt('dame un numero');
let c = 0;
let cadena = "";

while (c < numero) {
    c++;
    cadena = cadena + ' ' + c
}

alert(cadena); */


const boton = document.getElementById('btn');
const num_1 = document.getElementById('num1');
const num_2 = document.getElementById('num2');
const result = document.getElementById('resultado');



const evento = () => {
    result.innerHTML = parseInt(num_1.value) + parseInt(num_2.value);
}

boton.addEventListener('click', evento);