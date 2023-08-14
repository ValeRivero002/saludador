const nombre = document.querySelector("#name");
const form = document.querySelector("#hola");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre2 = nombre.value;

  
    div.innerHTML = "<p>" + nombre2 + "</p>";
  });