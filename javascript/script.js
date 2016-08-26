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

//Something like this should work. Add if statements for various classes
function displayHero(clicked_id){
if(clicked_id == "druidButton"){
  document.getElementById("heroImage").src="img/druid.png";
}
if(clicked_id == "hunterButton"){
  document.getElementById("heroImage").src="img/hunter.png";
}
if(clicked_id == "mageButton"){
  document.getElementById("heroImage").src="img/mage.png";
}
if(clicked_id == "paladinButton"){
  document.getElementById("heroImage").src="img/paladin.png";
}
if(clicked_id == "priestButton"){
  document.getElementById("heroImage").src="img/priest.png";
}
if(clicked_id == "rogueButton"){
  document.getElementById("heroImage").src="img/rogue.png";
}
if(clicked_id == "shamanButton"){
  document.getElementById("heroImage").src="img/shaman.png";
}
if(clicked_id == "warlockButton"){
  document.getElementById("heroImage").src="img/warlock.png";
}
if(clicked_id == "warriorButton"){
  document.getElementById("heroImage").src="img/warrior.png";
}
}
