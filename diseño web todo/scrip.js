// Modo oscuro / claro con classList.toggle("oscuro")
const btnTema = document.getElementById("btn-tema");

if (btnTema) {
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const esOscuro = document.body.classList.contains("oscuro");
    btnTema.textContent = esOscuro ? "Modo claro" : "Modo oscuro";
  });
}

// Navbar sticky con cambio visual al hacer scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Validación del formulario en pantalla (sin alert)
const formContacto = document.getElementById("form-contacto");
const mensajeError = document.getElementById("mensaje-error");

if (formContacto && mensajeError) {
  formContacto.addEventListener("submit", (event) => {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    mensajeError.textContent = "";

    if (!nombre) {
      event.preventDefault();
      mensajeError.textContent = "Por favor, ingresá tu nombre.";
      return;
    }

    if (!emailValido) {
      event.preventDefault();
      mensajeError.textContent = "Ingresá un correo electrónico válido (ejemplo: usuario@correo.com).";
      return;
    }

    if (mensaje.length < 10) {
      event.preventDefault();
      mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
    }
  });
}