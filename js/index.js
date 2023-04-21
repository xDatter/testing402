//# Imports
import { registroOK } from "./toast.js";

import { guardarReg, traerRegistros, traerReg } from './firebase.js'


const openmoda1 = document.getElementById("abrirRegistrar");
const botonLimpiar = document.getElementById("botonLimpiar");
const MostrarOnOff = document.getElementById("MostrarOnOff");
const ejecutarbuscar = document.getElementById("ejecutarbuscar");
const buscarInput = document.getElementById("buscarInput");

const modall = document.getElementById("modall");
const cerrarRegistrar = document.getElementById("cerrarRegistrar");
const registerForm = document.getElementById("register-form");
const contenidoTabla = document.getElementById("contenidoTabla");

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


  });



const showRegistermodall = () => {
  modall.classList.toggle("is-active");

};

let mostrar="si";
let html = ``
MostrarOnOff.textContent="Mostrar Registros";
MostrarOnOff.addEventListener("click",(e)=>{
  html ="";
  ////////////////
  if (mostrar=="si"){
    MostrarOnOff.textContent="Ocultar Registros";
    MostrarOnOff.classList.toggle("is-danger");
    MostrarOnOff.classList.toggle("is-info");
    traerRegistros((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const registro = doc.data();
  
        html +=`
        <div class="registroTabla" data-id="${doc.id}">
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
    mostrar = "no";
  }else{
    MostrarOnOff.textContent="Mostrar Registros";
    MostrarOnOff.classList.toggle("is-danger");
    MostrarOnOff.classList.toggle("is-info");
    contenidoTabla.innerHTML = "";
    mostrar = "si";
  }
    /////////////////
});

ejecutarbuscar.addEventListener("click", async ()=>{
  const valorBuscar = String(buscarInput.value).toUpperCase()
  //////////////////////////////7
  html ="";

  let registrosMatch = [];

  const regBuscar= await traerReg();
  
  regBuscar.forEach((doc)=>{

   const valor = doc.data();      //valor de la base de datos
   const idMatch = doc.id;        // id del registro en la base de datos

   let hayMAtch = "";

   const arregloMatch =[String(valor.rut).toUpperCase(), String(valor.nombre).toUpperCase(), String(valor.apellido).toUpperCase(), String(valor.ciudad).toUpperCase(), String(valor.direccion).toUpperCase(), String(valor.telefono).toUpperCase(), String(valor.email).toUpperCase(), String(valor.fechaNac).toUpperCase(), String(valor.estadocivil).toUpperCase()];
   
   for( let i=0 ; i<arregloMatch.length ; i++){
    if( valorBuscar == arregloMatch[i]){
      hayMAtch += "1"
    }

  }
  
  if(hayMAtch != ""){
          html +=`
      <div class="registroTabla" data-id="${idMatch}">
        <div class="campo campPeque"><p>${valor.rut}</p></div>
        <div class="campo campPeque"><p>${valor.nombre}</p></div>
        <div class="campo campPeque"><p>${valor.apellido}</p></div>
        <div class="campo campPeque"><p>${valor.ciudad}</p></div>
        <div class="campo campPeque"><p>${valor.direccion}</p></div>
        <div class="campo campPeque"><p>${valor.telefono}</p></div>
        <div class="campo campMed"><p>${valor.email}</p></div>
        <div class="campo campMed"><p>${valor.fechaNac}</p></div>
        <div class="campo campPeque"><p>${valor.estadocivil}</p></div>
        <div class="campo campGrande"><p>${valor.comentario}</p></div>
      </div>
      `;
  }

  });
  contenidoTabla.innerHTML = html;
  
  // console.log(registrosMatch);


  /////////////////
  buscarInput.value = "";
});




botonLimpiar.addEventListener("click",(e)=>{
  registerForm.reset();
  registroOK("Se limpió formulario", "#00666b")
});

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




