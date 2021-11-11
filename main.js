if (window.innerWidth >= 750){
  var typed = new Typed(".auto-input", {
    strings: ["Anna Amelia", "Web Developer", "UI Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
} else{
  var typed = new Typed(".auto-input", {
    strings: ["Anna Amelia.", "Web Developer.", "UI Designer."],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  })
  var spanSize = document.getElementById("auto-input1");
  spanSize.style.fontSize = "0.25em";
}
    