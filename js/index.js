//# Imports
// import { registroOK } from "./toast.js";

import { guardarReg, traerRegistros } from './firebase.js'


const openmoda1 = document.getElementById("abrirRegistrar");
const modall = document.getElementById("modall");
const cerrarRegistrar = document.getElementById("cerrarRegistrar");
const registerForm = document.getElementById("register-form");
const contenidoTabla = document.getElementById("contenidoTabla");

window.addEventListener("DOMContentLoaded", async ()=>{

  traerRegistros((querySnapshot) => {

    let html = ``
    querySnapshot.forEach((doc) => {
      const registro = doc.data();


      html +=`
      <div class="registroTabla">
        <div class="campo campPeque"><p>${registro.rut}</p></div>
        <div class="campo campPeque"><p>${registro.nombre}</p></div>
        <div class="campo campPeque"><p>${registro.apellido}</p></div>
        <div class="campo campPeque"><p>${registro.ciudad}</p></div>
        <div class="campo campPeque"><p>${registro.direccion}</p></div>
        <div class="campo campPeque"><p>${registro.telefono}</p></div>
        <div class="campo campMed"><p>${registro.email}</p></div>
        <div class="campo campMed"><p>${registro.fechaNac}</p></div>
        <div class="campo campPeque"><p>${registro.estadocivil}</p></div>
        <div class="campo campGrande"><p>${registro.comentario}</p></div>
      </div>
      `;

    })
    contenidoTabla.innerHTML = html;

  });
});


const showRegistermodall = () => {
  modall.classList.toggle("is-active");
};

registerForm.addEventListener("submit",(evento) =>{
  console.log("hola")
  evento.preventDefault();
  const rut = registerForm['rut'].value
  const nombre = registerForm['nombre'].value
  const apellido = registerForm['apellido'].value
  const ciudad = registerForm['ciudad'].value
  const direccion = registerForm['direccion'].value
  const telefono = registerForm['telefono'].value
  const email = registerForm['email'].value
  const fechaNac = registerForm['fechaNac'].value
  const estadocivil = registerForm['estadocivil'].value
  const comentario = registerForm['comentario'].value

  guardarReg(rut, nombre, apellido, ciudad, direccion, telefono, email, fechaNac, estadocivil, comentario);
  registerForm.reset();
  showRegistermodall();
})

openmoda1.addEventListener("click", showRegistermodall);
cerrarRegistrar.addEventListener("click", showRegistermodall);

const campos = [
  "rut",
  "nombre",
  "apellido",
  "ciudad",
  "direccion",
  "telefono",
  "email",
  "fechaNac",
  "estadocivil",
  "comentario",
];


