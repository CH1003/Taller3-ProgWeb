// Menú de Hamburguesa Responsivo
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Validación y almacenamiento de variables del formulario de registro
var errorRegistro = document.getElementById("errorRegistro")
var nombre = document.getElementById("nombre")
var tel = document.getElementById("tel")
var email = document.getElementById("email")
var numID = document.getElementById("numID")
var nacimiento = document.getElementById("nacimiento")
var pass = document.getElementById("pass")
var pass2 = document.getElementById("pass2")
var terminos = document.getElementById("terminos")
var formRegistro = document.getElementById("formRegistro")

if (formRegistro) {
    formRegistro.addEventListener("submit", (e) => {
        let messages = []

        if (pass.value != pass2.value) {
            messages.push("Las contraseñas deben coincidir")
        }

        if (!terminos.checked) {
            messages.push("Debe aceptar los términos y condiciones")
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorRegistro.innerText = messages.join("\n ")
        } else {
            sessionStorage.setItem('nombre', nombre.value)
            sessionStorage.setItem('tel', tel.value)
            sessionStorage.setItem('email', email.value)
            sessionStorage.setItem('pass', pass.value)
            sessionStorage.setItem('numID', numID.value)
            sessionStorage.setItem('nacimiento', nacimiento.value)
            sessionStorage.setItem('sexo', document.querySelector('input[name="sexo"]:checked').value)
            alert('¡Usuario creado con éxito!')
        }
    })
}

// Login
var formLogin = document.getElementById("formLogin")
var email = document.getElementById("email")
var pass = document.getElementById("pass")
var errorLogin = document.getElementById("errorLogin")
if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        let messages = []
        if (email.value != sessionStorage.getItem('email')) {
            messages.push("El email no se encuentra registrado")
        }
        if (pass.value != sessionStorage.getItem('pass')) {
            messages.push("La contraseña es incorrecta")
        }
        if (messages.length > 0) {
            e.preventDefault()
            errorLogin.innerText = messages.join("\n ")
        }
    })
}

// Creación de cita
var dep = document.getElementById("dep")
var doc = document.getElementById("doc")
var fecha = document.getElementById("fecha")
var formAgendarCita = document.getElementById("formAgendarCita")
if (formAgendarCita) {
    formAgendarCita.addEventListener("submit", (e) => {
        sessionStorage.setItem('dep', dep.value)
        sessionStorage.setItem('doc', doc.value)
        sessionStorage.setItem('fecha', fecha.value)
        sessionStorage.setItem('hora', document.querySelector('input[name="hora"]:checked').value)
        alert('¡Cita creada con éxito!')
    })
}

//Info de cita
function infoCita() {
    var nombre = document.getElementById("nombre")
    var numID = document.getElementById("numID")
    var nacimiento = document.getElementById("nacimiento")
    var sexo = document.getElementById("sexo")
    var tel = document.getElementById("tel")
    var email = document.getElementById("email")
    var dep = document.getElementById("dep")
    var doc = document.getElementById("doc")
    var fecha = document.getElementById("fecha")
    var hora = document.getElementById("hora")
    nombre.innerText = sessionStorage.getItem('nombre')
    numID.innerText = sessionStorage.getItem('numID')
    nacimiento.innerText = sessionStorage.getItem('nacimiento')
    sexo.innerText = sessionStorage.getItem('sexo')
    tel.innerText = sessionStorage.getItem('tel')
    email.innerText = sessionStorage.getItem('email')
    dep.innerText = sessionStorage.getItem('dep')
    doc.innerText = sessionStorage.getItem('doc')
    fecha.innerText = sessionStorage.getItem('fecha')
    hora.innerText = sessionStorage.getItem('hora')
}



