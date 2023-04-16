
  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // import { collection} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js"
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyB9Lmh7jsmejfJmTTe5OhJHn_Cv3BZN5CQ",
  //   authDomain: "base-de-datos-74f25.firebaseapp.com",
  //   projectId: "base-de-datos-74f25",
  //   storageBucket: "base-de-datos-74f25.appspot.com",
  //   messagingSenderId: "672094649331",
  //   appId: "1:672094649331:web:4ac9ef5abbc0bd3a51f086"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  // export const savetask = (nombre,apellido,direccion,ciudad,telefono,email,fechanacimiento,estadocivil,comentario) =>
  // addDoc (collection(db,'tasks'),{nombre,apellido,direccion,ciudad,telefono,email,fechanacimiento,estadocivil,comentario} );

  //*********************


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDBpmIHm5k6-GqngFGJXIcIQdbUXtMZEG8",
    authDomain: "esto-se-va-a-poner-feo.firebaseapp.com",
    databaseURL: "https://esto-se-va-a-poner-feo-default-rtdb.firebaseio.com",
    projectId: "esto-se-va-a-poner-feo",
    storageBucket: "esto-se-va-a-poner-feo.appspot.com",
    messagingSenderId: "825539541874",
    appId: "1:825539541874:web:377ff47373d7668b257beb"
  };

  // Initialize Firebase

  //# Exports
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)

