let elOpenBtn = document.querySelector(".burger__menu");
let elCloseBtn = document.querySelector(".burger__menu--close");
let elMenu = document.querySelector(".header__list--menu");

elOpenBtn.addEventListener("click", function () {
  elOpenBtn.classList.add("close");
  elCloseBtn.classList.remove("close");
  elMenu.classList.remove("close");
});

elCloseBtn.addEventListener("click", function () {
  elOpenBtn.classList.remove("close");
  elCloseBtn.classList.add("close");
  elMenu.classList.add("close");
});
