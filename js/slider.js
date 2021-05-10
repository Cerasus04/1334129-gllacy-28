// Переменные для оживления слайдов

const slides = document.querySelectorAll(".control");
const slideDescriptions = document.querySelectorAll(".slide");
const slideButtons = document.querySelectorAll(".control");
const wrapper = document.querySelector(".site-wrapper");


// Скрипт для оживления слайдов

slides.forEach(function(slide) {
  slide.addEventListener("click", function(evt) {
  	evt.preventDefault();
    wrapper.className = "site-wrapper-" + evt.target.id;

    slideButtons.forEach(function(item) {
      item.classList.remove("current");
    })
    evt.target.classList.add("current");

    slideDescriptions.forEach(function(item) {
      item.classList.remove("slide-current");
    })
    slideDescriptions[evt.target.id - 1].classList.add("slide-current");
  })
})