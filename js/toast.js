
export function registroOK(mensaje, color = "#777"){
  // colores verde #008013 - rojo #800000 - azulado #00666b

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
      background: color, borderRadius: "10px",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}