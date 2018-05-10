var buttonIndex = document.querySelector(".goods-week__btn");
var toningIndex = document.querySelector(".modal");
var popupIndex = document.querySelector(".modal-block");
var closeIndex = document.querySelector(".modal__button");
var labelIndex = popupIndex.querySelectorAll("[name=size]");
var formIndex = popupIndex.querySelector(".modal__form");

buttonIndex.addEventListener("click", function (evt) {
  evt.preventDefault();
  toningIndex.classList.toggle("modal-toning");
  popupIndex.classList.toggle("modal-show");
});

closeIndex.addEventListener("click", function (evt) {
  evt.preventDefault();
  toningIndex.classList.toggle("modal-toning");
  popupIndex.classList.toggle("modal-show");
});

formIndex.addEventListener("submit", function (evt) {
  if (!label.value) {
    evt.preventDefault();
  }
});
