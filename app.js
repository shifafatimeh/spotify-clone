let badge = document.querySelectorAll(".badge");
let whole = document.querySelectorAll(".card-1-one");
let cards = document.querySelector(".cards");
// console.log(badge);
// console.log(whole);

cards.addEventListener("mouseover", function (e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("badge")) {
    console.log(e.target.className);
    // badge.classList.remove("badgee");
    e.target.className.replace("badgee", "");
  }
});
cards.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("badge")) {
    // badge.classList.remove("badgee");
    e.target.className += " badgee";
  }
});

// if (badge.classList.contains("transition-ease")) {
//     badge.classList.remove("transition-ease");
//     badge.classList.add("transition-steps");
//   } else {
//     badge.classList.remove("transition-steps");
//     badge.classList.add("transition-ease");
//   }
// }
