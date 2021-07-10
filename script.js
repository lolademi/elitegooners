
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
  constructor(name, country, post, eye) {
    this.name = name;
    this.country = country;
    this.post = post;
    this.eyeColor = eye;
  }
}

  
// Create Members object
var lolade = new Member("Lolade", "Nigeria", `Admin` +  '<i class="fas fa-crown"></i> <i class="fas fa-user-check"></i>', "black");
var harrypee = new Member("HarryPee", "Nigeria", `Admin` +  '<i class="fas fa-crown">', "black");
var kingsley = new Member("Kingsley", "Rwanda", `Admin` +  '<i class="fas fa-crown"></i>', "black");
var samuel = new Member("Lolade", "Nigeria", `Admin` +  '<i class="fas fa-crown"></i>', "black");
var zamani = new Member("Lolade", "Nigeria", `Member` +  '<i class="fas fa-crown"></i>', "black");

// Display properties
document.getElementById("m1").innerHTML = lolade.name; 
document.getElementById("m1-ctry").innerHTML = lolade.country;
document.getElementById("m1-post").innerHTML = lolade.post;
document.getElementById("m2").innerHTML = harrypee.name; 
document.getElementById("m2-ctry").innerHTML = harrypee.country;
document.getElementById("m2-post").innerHTML = harrypee.post;
document.getElementById("m3").innerHTML = kingsley.name; 
document.getElementById("m3-ctry").innerHTML = kingsley.country;
document.getElementById("m3-post").innerHTML = kingsley.post;



//Creating an array of members
//Members = [lolade, harrypee, kingsley];

