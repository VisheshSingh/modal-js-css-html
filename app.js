var button = document.querySelectorAll("button");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

button[2].addEventListener("click", function() {
  modal.style.display = "block";
  backdrop.style.display = "block";
});
