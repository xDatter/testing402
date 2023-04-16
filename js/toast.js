
export function registroOK(mensaje, tipo = "registroOK"){
Toastify({
    text: mensaje,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
    //   background: "linear-gradient(to right, #00b09b, #96c93d)",
      background: tipo === "registroOK" ? "#48c78e" : "red"
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}