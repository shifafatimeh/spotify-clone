let bagesd = document.querySelector(".badge");
let whole = document.querySelector(".card-1-one");
whole.addEventListener("mouseover", function () {
  bagesd.classList.remove("badgee");
});
whole.addEventListener("mouseout", function () {
  bagesd.classList.add("badgee");
});
̀