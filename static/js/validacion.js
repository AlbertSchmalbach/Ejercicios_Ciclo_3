const form = document.querySelector('.form');
const boton = document.querySelector('.btn');

const nombre = document.querySelector('#name');
const genero = document.querySelector('#genero');
const correo = document.querySelector('#mail');
const contraseña = document.querySelector('#password');
const condiciones = document.querySelector('#condition');

//console.log(condiciones);


const validar_form = {
    nombre: false,
    genero: false,
    correo: false,
    condiciones: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    envia_form()
});

nombre.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) {
        validar_form.nombre = true
    }
});

genero.addEventListener('change', (e) => {
    if (e.target.checked == true) {
        validar_form.genero = true
    }
})

correo.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) {
        validar_form.correo = true
    }
});

contraseña.addEventListener('change', (e) => {
    if (e.target.value.trim().length < 8) {
        alert('la contraseña debe tener minimo 8 caracteres')
    }
})

condiciones.addEventListener('change', (e) => {
    validar_form.condiciones = e.target.checked
    e.target.checked ? boton.removeAttribute('disabled') : boton.setAttribute('disbled', true)
});

const envia_form = () => {
    const valores_form = Object.values(validar_form)
    const validar = valores_form.findIndex((value) => value == false)
    if (validar == -1) {
        form.submit()
    } else {
        alert('formulario invalido')
    }
}

const mostrarPassword = () => {
    contraseña.type = "text"
}

const ocultarPassword = () => {
    contraseña.type = "password"
}