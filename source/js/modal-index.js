var buttonIndex = document.querySelector(".goods-week__btn");
var toningIndex = document.querySelector(".modal");
var popupIndex = document.querySelector(".modal__block");
var closeIndex = document.querySelector(".modal__button");
var labelIndex = popupIndex.querySelectorAll(".modal__label");
var formIndex = popupIndex.querySelector(".modal__form");

buttonIndex.addEventListener("click", function (evt) {
  evt.preventDefault();
  toningIndex.classList.toggle("modal--toning");
  popupIndex.classList.toggle("modal__block--show");
});

closeIndex.addEventListener("click", function (evt) {
  evt.preventDefault();
  toningIndex.classList.toggle("modal--toning");
  popupIndex.classList.toggle("modal__block--show");
});

formIndex.addEventListener("submit", function (evt) {
  if (!label.value) {
    evt.preventDefault();
  }
});
