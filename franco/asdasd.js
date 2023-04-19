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
    const rutpaciente = registerForm['rut-pac'].value
    const nombrepaciente = registerForm['nombre-pac'].value
    const apellidopaciente = registerForm['apellido-pac'].value
    const direccionpaciente = registerForm['direccion-pac'].value
    const ciudadpaciente = registerForm['ciudad-pac'].value
    const telefonopaciente = registerForm['telefono-pac'].value
    const emailpaciente = registerForm['email-pac'].value
    const fechaNacimientopaciente = registerForm['fechaNacimiento-pac'].value
    const estadocivilpaciente = registerForm['estadocivil-pac'].value
    const comentariopaciente = registerForm['comentario-pac'].value

    const registropaciente = pacienteRef.push()
    registropaciente.set({
        Vid: registropaciente .path.pices_[1],
        rut:rutpaciente,
        nombre:nombrepaciente,
        apellido:apellidopaciente,
        ciudad:ciudadpaciente,
        direccion:direccionpaciente,
        telefono:telefonopaciente,
        email:emailpaciente,
        fechanacimiento:fechaNacimientopaciente,
        estadocivil:estadocivilpaciente



    })

    savetask(nombre.value)
}
)