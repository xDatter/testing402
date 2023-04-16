//# Imports
import { registroOK } from "./toast.js";
//# Exports

// import { savetask } from './firebase.js'
const openmoda1 = document.getElementById("abrirRegistrar");
const modall = document.getElementById("modall");
const cerrarRegistrar = document.getElementById("cerrarRegistrar");
const registerForm = document.getElementById("register-form");
const botonRegistrar = document.getElementById("botonRegistrar");
const contenidoTabla = document.getElementById("contenidoTabla");

const showRegistermodall = () => {
  modall.classList.toggle("is-active");
};



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

botonRegistrar.addEventListener("click", async (e) => {
  const fragment = new DocumentFragment();
  const divRegistro = document.createElement("div");
  divRegistro.classList.add("registroTabla");

  for (let i = 0; campos.length > i; i++) {
    let divCampo = document.createElement("div");
    let pCampo = document.createElement("p");
    let texto = document.getElementById(`${campos[i]}`);
    divCampo.classList.add("campo");

    if (campos[i] == "email" || campos[i] == "fechaNac") {
      divCampo.classList.add("campMed");
    } else if (campos[i] == "comentario") {
      divCampo.classList.add("campGrande");
    } else {
      divCampo.classList.add("campPeque");
    }

    pCampo.innerText = `${texto.value}`;
    divCampo.append(pCampo);

    divRegistro.append(divCampo);

    if (i == 8) {
      texto.value = "Sin respuesta";
    } else {
      texto.value = "";
    }
  }
  fragment.append(divRegistro);
  contenidoTabla.append(fragment);
  showRegistermodall();
  registroOK("Registro exitoso")

});

try {
  // await savetask(nombre.value)
} catch (error) {}
