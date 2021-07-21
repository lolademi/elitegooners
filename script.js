
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function showModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// Constructor function for Person objects
class Member {
  constructor(name, country, post, icons) {
    this.name = name;
    this.country = country;
    this.post = post;
    this.icons = icons;
  }
}

  
// Create Members object
var lolade = new Member("Lolade", "Nigeria", `Admin`, '<i class="fas fa-medal"></i> <i class="fas fa-crown"></i> <i class="fas fa-user-check"></i>');
var harrypee = new Member("HarryPee", "Nigeria", `Admin`, '<i class="fas fa-medal"></i> <i class="fas fa-crown">');
var kingsley = new Member("Kingsley", "Rwanda", `Admin`, '<i class="fas fa-medal"></i> <i class="fas fa-crown"></i>');
var samuel = new Member("Sam Ologun", "Nigeria", `Admin`,'<i class="fas fa-medal"></i> <i class="fas fa-crown"></i>');
var zamani = new Member("Zamani", "Nigeria", `Member`, '<i class="fas fa-medal"></i>');

// Display properties

//lolade
document.getElementById("M1-NAME").innerHTML = lolade.name; 
document.getElementById("M1-CTRY").innerHTML = lolade.country;
document.getElementById("M1-POST").innerHTML = lolade.post;
document.getElementById("M1-ICONS").innerHTML = lolade.icons;
//harrypee
document.getElementById("M2-NAME").innerHTML = harrypee.name; 
document.getElementById("M2-CTRY").innerHTML = harrypee.country;
document.getElementById("M2-POST").innerHTML = harrypee.post;
document.getElementById("M2-ICONS").innerHTML = harrypee.icons;
//kingsley
document.getElementById("M3-NAME").innerHTML = kingsley.name; 
document.getElementById("M3-CTRY").innerHTML = kingsley.country;
document.getElementById("M3-POST").innerHTML = kingsley.post;
document.getElementById("M3-ICONS").innerHTML = kingsley.icons;
//samuel
document.getElementById("M4-NAME").innerHTML = samuel.name; 
document.getElementById("M4-CTRY").innerHTML = samuel.country;
document.getElementById("M4-POST").innerHTML = samuel.post;
document.getElementById("M4-ICONS").innerHTML = samuel.icons;
//zamani
document.getElementById("M5-NAME").innerHTML = zamani.name; 
document.getElementById("M5-CTRY").innerHTML = zamani.country;
document.getElementById("M5-POST").innerHTML = zamani.post;
document.getElementById("M5-ICONS").innerHTML = zamani.icons;

document.getElementById("M6-NAME").innerHTML = mastersharo.name; 
document.getElementById("M6-CTRY").innerHTML = mastersharo.country;
document.getElementById("M6-POST").innerHTML = mastersharo.post;
document.getElementById("M6-ICONS").innerHTML = mastersharo.icons;

//Creating an array of members
//Members = [lolade, harrypee, kingsley];

