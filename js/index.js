import { savetask } from './firebase.js'
const openmoda1  =document.getElementById("open2")
const modall = document.getElementById("modall")
const cerrarregistrar =document.getElementById("cerrarregistrar")
const registerForm = document.getElementById("register-form")


const showRegistermodall = () =>{
    modall.classList.toggle("is-active")
}

openmoda1.addEventListener('click', showRegistermodall)
cerrarregistrar.addEventListener('click',showRegistermodall)


registerForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const rut = registerForm['nombre'].value
    const nombre = registerForm['nombre'].value
    const apellido = registerForm['nombre'].value
    const direccion = registerForm['nombre'].value
    const ciudad = registerForm['nombre'].value
    const telefono = registerForm['nombre'].value
    const email = registerForm['nombre'].value
    const date = registerForm['nombre'].value
    const ecivil = registerForm['nombre'].value
    const comentario = registerForm['nombre'].value

    savetask(nombre.value)
}
)