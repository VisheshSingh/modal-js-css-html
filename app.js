var button = document.querySelectorAll("button");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

button[2].addEventListener("click", function() {
  modal.style.display = "block";
  backdrop.style.display = "block";
});

button[0].addEventListener("click", closeModal);

button[1].addEventListener("click", closeModal);
