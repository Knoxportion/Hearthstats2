/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function selectHero() {
    document.getElementById("herodiv").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.herobutton')) {

    var dropdowns = document.getElementsByClassName("hero-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function selectOpponent() {
    document.getElementById("opponentdiv").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.opponentbutton')) {

    var dropdowns = document.getElementsByClassName("opponent-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
