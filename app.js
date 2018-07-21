var button = document.querySelectorAll("button");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

var quote = "A modal component";
var outputPara = document.querySelector("#quote");
outputPara.textContent = quote;

var textEdit = document.querySelector(".modal textarea");
var editedQuote = "";

function updateParagraph() {
  outputPara.textContent = quote;
}

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

updateParagraph();

button[2].addEventListener("click", function() {
  modal.style.display = "block";
  backdrop.style.display = "block";
  editedQuote = quote;
  textEdit.value = quote;
});

backdrop.addEventListener("click", function() {
  closeModal();
});

button[0].addEventListener("click", closeModal);

button[1].addEventListener("click", function() {
  closeModal();
  if (editedQuote.trim().length > 0) {
    quote = editedQuote;
    updateParagraph();
  }
});

textEdit.addEventListener("input", function() {
  editedQuote = textEdit.value;
});
