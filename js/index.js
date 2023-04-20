//# Imports
import { registroOK } from "./toast.js";

import { guardarReg, traerRegistros, traerReg } from './firebase.js'


const openmoda1 = document.getElementById("abrirRegistrar");
const modall = document.getElementById("modall");
const cerrarRegistrar = document.getElementById("cerrarRegistrar");
const registerForm = document.getElementById("register-form");
const contenidoTabla = document.getElementById("contenidoTabla");
const botonLimpiar = document.getElementById("botonLimpiar");

const camposGlobales = [
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

      // console.log(registro);
    })
    contenidoTabla.innerHTML = html;

   
    });
  });



const showRegistermodall = async () => {
  modall.classList.toggle("is-active");

};

botonLimpiar.addEventListener("click",(e)=>{
  registerForm.reset();
  registroOK("Se limpió formulario", "#00666b")
})

registerForm.addEventListener("submit",async (evento) =>{
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

    // Inicio de verificación de reg
    let validar="";

      const reg= await traerReg();
      reg.forEach((doc)=>{
       const valor = doc.data();
       const campoNoRepeat1 = String(valor.comentario).toUpperCase();   // Esta variable se debe replicar para cada campo que no se desee repetir en reg
       const campoComparar1 = String(comentario).toUpperCase();
       if( campoNoRepeat1 == campoComparar1){
        validar+= "1"
       }
      });
      
      if(validar!=""){
        registroOK("Registro repetido","#800000")
      }else{
        registroOK("Guardado con éxito", "#008013")
        guardarReg(rut, nombre, apellido, ciudad, direccion, telefono, email, fechaNac, estadocivil, comentario);
        registerForm.reset();
        showRegistermodall();
      }

})

openmoda1.addEventListener("click", showRegistermodall);
cerrarRegistrar.addEventListener("click", showRegistermodall);




