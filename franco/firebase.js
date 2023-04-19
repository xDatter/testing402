
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { collection} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB9Lmh7jsmejfJmTTe5OhJHn_Cv3BZN5CQ",
    authDomain: "base-de-datos-74f25.firebaseapp.com",
    projectId: "base-de-datos-74f25",
    storageBucket: "base-de-datos-74f25.appspot.com",
    messagingSenderId: "672094649331",
    appId: "1:672094649331:web:4ac9ef5abbc0bd3a51f086"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const pacienteRef = firebase.database().ref('paciente')

  export const savetask = (nombre,apellido,direccion,ciudad,telefono,email,fechanacimiento,estadocivil,comentario) =>
  addDoc (collection(db,'tasks'),{nombre,apellido,direccion,ciudad,telefono,email,fechanacimiento,estadocivil,comentario} );
