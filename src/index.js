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
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    
    let salutation = "";
  
    if (age > 30) {
      if (gender === "sr") {
        salutation = "Hola Sr. " + name + "!";
      } else if (gender === "sra") {
        salutation = "Hola Sra. " + name + "!";
      }
    } else {
      salutation = "Hola " + name + "!";
    }
  
    document.getElementById("resultado-div").textContent = salutation;
  });
  