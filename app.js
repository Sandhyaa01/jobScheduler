function events(elem) {
    elem.innerHTML="clicked";
}

function hamDisplay(elem) {
    this.classApplied=!this.classApplied;
    var x = document.getElementById("mobileMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } 
  }