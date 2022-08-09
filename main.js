const form = document.querySelector('#formDate');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const birthDay = document.querySelector('#birthDay');
const nacionality = document.querySelector('#nacionality');
const result = document.querySelector('#result');
const button = document.querySelector('#enviar');


button.addEventListener('click', datosPersonales);




function datosPersonales() {
    result.innerHTML = "Nombre completo: " + name.value + " " + lastName.value + 
    "<br> Edad: " + age.value + 
    "<br> Correo electronico: " + email.value + 
    "<br> Fecha de Nacimiento: " + birthDay.value + 
    "<br> Nacionalidad: " +nacionality.value;

    estudiante.push(new Student({
        name: name.value,
        lastName: lastName.value,
        age: age.value,
        email: email.value,
        birthDay: birthDay.value,
        nacionality: nacionality.value,
    }));
    }


class Student {
    constructor({
        name,
        lastName,
        age,
        email,
        birthDay,
        nacionality,
    }) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.birthDay = birthDay;
        this.nacionality = nacionality;
    }
}


const estudiante = [];