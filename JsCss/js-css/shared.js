// DOM parsed to create viruutal representation so they can be operated on
// query selector argument can be targetted in the same way as css, including stacking and combinators
// it will always select the first one, if need array of all of class use querySelectorAll
// style property on selector will work with inline styles to ensure specificity is high enough

var backdrop = document.querySelector(".backdrop");
var model = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// anonymous function to attach event listener to each button
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // model.style.display = "block";
    // backdrop.style.display = "block";

    // classname just a string that represents all classes. need to ADD style to prevent overwriting
    modal.className = "block";
    modal.classList.add("block"); // this only adds the class while leaving the rest intact. remove() also available
  });
}
