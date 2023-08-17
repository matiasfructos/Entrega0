document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autos").addEventListener("click", function () {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function () {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function () {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


// Validacion de usuario
const data = localStorage.getItem("userStatus")

function bienvenidx() {
    if (!data) {
        alert("Debe iniciar Sesion")
        window.location.href = "login.html"
    }
}
bienvenidx()

// Cerrar Sesion
const cerrar_sesion = document.getElementById("cerrar_sesion")

cerrar_sesion.addEventListener("click", a => {
    localStorage.removeItem("userStatus")
    window.location.href = "login.html"
})
