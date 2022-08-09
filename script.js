const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);
    const sumaI = a + b;
    result.innerText = "Resultado: " + sumaI;
}



