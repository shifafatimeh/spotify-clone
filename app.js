let badge = document.querySelector(".badge");
let whole = document.querySelector(".card-1-one");
// let cards = document.querySelector(".cards");
// console.log(badge);
// console.log(whole);

whole.addEventListener("mouseover", function () {
  //   if (e.target.classList.contains("badge")) {
  // console.log(e.target.className);
  badge.classList.remove("badgee");
  // e.target.className.replace("badgee", "");
});
whole.addEventListener("mouseout", function () {
  //   if (e.target.classList.contains("badge")) {
  badge.classList.add("badgee");
  // e.target.className += " badgee";
});

// if (badge.classList.contains("transition-ease")) {
//     badge.classList.remove("transition-ease");
//     badge.classList.add("transition-steps");
//   } else {
//     badge.classList.remove("transition-steps");
//     badge.classList.add("transition-ease");
//   }
// }
const slider = document.querySelector(".volume");
const speed = document.querySelector(".speed-song");

slider.addEventListener("input", function () {
  var x = slider.value;
  var y = 100 - x;
  console.log(x);

  console.log(y);

  var color =
    "linear-gradient(90deg, rgb(117, 253, 117) " +
    x +
    "%, rgb(120, 115, 115) " +
    y +
    "%)";
  slider.style.background = color;
});
speed.addEventListener("input", function () {
  var x = speed.value;
  var y = 100 - x;
  console.log(x);

  console.log(y);

  var color =
    "linear-gradient(90deg, rgb(117, 253, 117) " +
    x +
    "%, rgb(120, 115, 115) " +
    y +
    "%)";
  speed.style.background = color;
});
// slider.addEventListener("mouseout", function () {
//   var x = slider.value;
// 120, 115, 115

//   var color =
//     "linear-gradient(90deg, rgb(117, 253, 117) " +
//     x +
//     "%, grey " +
//     (100 - x) +
//     "%)";
//   slider.style.background = color;
// });
