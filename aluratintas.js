const mostrarEsconder = document.getElementsByClassName("mostrarEsconder");
let i;

for (i = 0; i < mostrarEsconder.length; i++) {
  mostrarEsconder[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let lista = this.nextElementSibling;
    if (lista.style.display === "block") {
      lista.style.display = "none";
    } else {
      lista.style.display = "block";
    }
  });
}
