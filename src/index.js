const nombre = document.querySelector("#name");
const form = document.querySelector("#hola");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre2 = nombre.value;

  
    div.innerHTML = "<p>" + nombre2 + "</p>";
  });

  document.getElementById("hola").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    
    let salutation = "Hola";
  
    if (gender === "sr") {
      salutation += " Sr.";
    } else if (gender === "sra") {
      salutation += " Sra.";
    }
  
    salutation += ` ${name}!`;
  
    document.getElementById("resultado-div").textContent = salutation;
  });
  