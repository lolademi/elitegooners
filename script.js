/*class MemberXXX{
 // constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}*/
//let member1XXX = new MemberXX("Lolade S", 2014);
//document.getElementById('demo').innerHTML = member1.name;





// Constructor function for Person objects
class Member {
  constructor(id, name, country, post, icons, fplayer) {
    this.id = id
    this.name = name;
    this.country = country;
    this.post = post;
    this.icons = icons;
    this.fplayer = fplayer;
  }
}

  
// Create Members object
var lolade = new Member("01", "Lolade", "Nigeria", `Admin`, '<i class="fas fa-medal"></i> <i class="fas fa-crown"></i> <i class="fas fa-user-check"></i>', "Bukayo Saka");
var harrypee = new Member("02","HarryPee", "Nigeria", `Admin`, '<i class="fas fa-medal"></i> <i class="fas fa-crown">', "A. Lacazete");
var kingsley = new Member("03","Kingsley", "Rwanda", `Admin`, '<i class="fas fa-medal"></i> <i class="fas fa-crown"></i>', "Martinelli");
var samuel = new Member("04","Sam Ologun", "Nigeria", `Admin`,'<i class="fas fa-medal"></i> <i class="fas fa-crown"></i>');
var zamani = new Member("05","Zamani", "Nigeria", `Member`, '<i class="fas fa-medal"></i>');

// Display properties

//lolade
document.getElementById("M1-ID").innerHTML = lolade.id;
document.getElementById("M1-NAME").innerHTML = lolade.name; 
document.getElementById("M1-CTRY").innerHTML = lolade.country;
document.getElementById("M1-POST").innerHTML = lolade.post;
document.getElementById("M1-ICONS").innerHTML = lolade.icons;
document.getElementById("M1-FAVPLAYER").innerHTML = lolade.fplayer;
//harrypee
document.getElementById("M2-ID").innerHTML = harrypee.id;
document.getElementById("M2-NAME").innerHTML = harrypee.name; 
document.getElementById("M2-CTRY").innerHTML = harrypee.country;
document.getElementById("M2-POST").innerHTML = harrypee.post;
document.getElementById("M2-ICONS").innerHTML = harrypee.icons;
document.getElementById("M2-FAVPLAYER").innerHTML = harrypee.fplayer;
//kingsley
document.getElementById("M3-ID").innerHTML = kingsley.id;
document.getElementById("M3-NAME").innerHTML = kingsley.name; 
document.getElementById("M3-CTRY").innerHTML = kingsley.country;
document.getElementById("M3-POST").innerHTML = kingsley.post;
document.getElementById("M3-ICONS").innerHTML = kingsley.icons;
document.getElementById("M3-FAVPLAYER").innerHTML = kingsley.fplayer;
//samuel
document.getElementById("M4-ID").innerHTML = samuel.id;
document.getElementById("M4-NAME").innerHTML = samuel.name; 
document.getElementById("M4-CTRY").innerHTML = samuel.country;
document.getElementById("M4-POST").innerHTML = samuel.post;
document.getElementById("M4-ICONS").innerHTML = samuel.icons;
//zamani
document.getElementById("M5-ID").innerHTML = zamani.id;
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




