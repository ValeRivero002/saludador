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
  
    const currentTime = new Date();
    const hour = currentTime.getHours();
  
    let salutation = "";
  
    if (hour >= 0 && hour < 12) {
      salutation = "Buenos días";
    } else if (hour >= 12 && hour < 18) {
      salutation = "Buenas tardes";
    } else {
      salutation = "Buenas noches";
    }
  
    if (age > 30) {
      if (gender === "sr") {
        salutation += " Sr. " + name + "!";
      } else if (gender === "sra") {
        salutation += " Sra. " + name + "!";
      }
    } else {
      salutation += " " + name + "!";
    }
  
    document.getElementById("resultado-div").textContent = salutation;
  });
  
  