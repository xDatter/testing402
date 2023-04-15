import { savetask } from './firebase.js'
const openmoda1  =document.getElementById("abrirRegistrar")
const modall = document.getElementById("modall")
const cerrarRegistrar =document.getElementById("cerrarRegistrar")
const registerForm = document.getElementById("register-form")
const botonRegistrar = document.getElementById("botonRegistrar")
const contenidoTabla = document.getElementById("contenidoTabla");


const showRegistermodall = () =>{
    modall.classList.toggle("is-active")
}


openmoda1.addEventListener('click', showRegistermodall)
cerrarRegistrar.addEventListener('click',showRegistermodall)

const campos=["rut","nombre","apellido","ciudad","direccion","telefono","email","fechaNac","estadocivil","comentario"]

botonRegistrar.addEventListener('click',(e) =>{
    console.log("aqui")
    const fragment = new DocumentFragment();
    const divRegistro = document.createElement("div");
    divRegistro.classList.add("registroTabla");

    for (let i=0 ; campos.length>i ;i++){

        let divCampo = document.createElement("div");
        let pCampo = document.createElement("p");
        let texto = document.getElementById(`${campos[i]}`);
        divCampo.classList.add("campo");

        if(i == 6 || i == 7){
            divCampo.classList.add("campMed");
        }else if(i== 9){
            divCampo.classList.add("campGrande");
        }else{
            divCampo.classList.add("campPeque");
        }

        pCampo.innerText = `${texto.value}`;
        divCampo.append(pCampo);

        divRegistro.append(divCampo);
    };
    console.log("hola");
    console.log(divRegistro);


    console.log(fragment);
    fragment.append(divRegistro);
    contenidoTabla.append(fragment);
    

    // savetask(nombre.value)
}
)