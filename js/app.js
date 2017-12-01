
document.getElementById("uno").addEventListener("click", desplegar);

function desplegar() {
    document.getElementById("animals").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu-uno')) {

    var items = document.getElementsByClassName("animals-content");
    var i;
    for (i = 0; i < items.length; i++) {
      var openElements = items[i];
      if (openElements.classList.contains("show")) {
        openElements.classList.remove("show");
      }
    }
  }
}
