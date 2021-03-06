var buttonCatalog = document.querySelectorAll(".catalog__cost-button");
var toningCatalog = document.querySelector(".modal");
var popupCatalog = document.querySelector(".modal__block");
var closeCatalog = document.querySelector(".modal__button");
var labelCatalog = popupCatalog.querySelectorAll(".modal__label");
var formCatalog = popupCatalog.querySelector(".modal__form");

for (var i = 0; i < buttonCatalog.length; i++) {
  buttonCatalog[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    toningCatalog.classList.toggle("modal--toning");
    popupCatalog.classList.toggle("modal__block--show");
  });
}

closeCatalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  toningCatalog.classList.toggle("modal--toning");
  popupCatalog.classList.toggle("modal__block--show");
});

formCatalog.addEventListener("submit", function (evt) {
  if (!label.value) {
    evt.preventDefault();
  }
});
