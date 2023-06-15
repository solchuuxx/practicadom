// Obtener referencia al párrafo y al botón
let parrafo = document.getElementById("unicoParrafo");
let boton = document.getElementById("miBoton");

// Añadir evento click al botón
boton.addEventListener("click", function() {
  // Verificar si el párrafo ya tiene la clase "orange-text"
if (parrafo.classList.contains("texto-naranja")) {
    // Si tiene la clase, se la quitamos para volver al color original
    parrafo.classList.remove("texto-naranja");
    parrafo.classList.add("texto-purpura");
} else {
    // Si no tiene la clase, se la añadimos para cambiar el color a naranja
    parrafo.classList.remove("texto-purpura");
    parrafo.classList.add("texto-naranja");
}
});
