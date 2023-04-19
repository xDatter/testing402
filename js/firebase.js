
  //# Imports   
  
  
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js"
  import { getFirestore, addDoc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDGKbKm-9RTxOR-oxEIMQYnlEbXKjuM-YU",
    authDomain: "fir-app-e77e6.firebaseapp.com",
    projectId: "fir-app-e77e6",
    storageBucket: "fir-app-e77e6.appspot.com",
    messagingSenderId: "423553114710",
    appId: "1:423553114710:web:43bad7779a332ee7bb91f7"
  };

  // Initialize Firebase
  
  
  
  
  //# Instancias
  // const auth = getAuth(app);
  const app = initializeApp(firebaseConfig)
  const db = getFirestore();
  
  //# Exports
  export const guardarReg = (rut, nombre, apellido, ciudad, direccion, telefono, email, fechaNac, estadocivil, comentario) => 
  addDoc(collection(db,'fichaMedica'),{rut, nombre, apellido, ciudad, direccion, telefono, email, fechaNac, estadocivil, comentario});

  export const traerReg = ()=> getDocs(collection(db,'fichaMedica'));

  export const traerRegistros =(callback) => onSnapshot(collection(db,"fichaMedica"),callback)






