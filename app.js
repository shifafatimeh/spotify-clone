let cards = document.querySelectorAll(".card-1-one");

// Loop through each card element
cards.forEach(card => {
  // Add event listener for mouseover (hover)
  card.addEventListener("mouseover", () => {
    // Find the green icon within the current card element and show it
    let greenIcon = card.querySelector(".badge");
    greenIcon.style.display = "block";
  });

  // Add event listener for mouseout (hover out)
  card.addEventListener("mouseout", () => {
    // Find the green icon within the current card element and hide it
    let greenIcon = card.querySelector(".badge");
    greenIcon.style.display = "none";
  });
});


const slider = document.querySelector(".volume");
const speed = document.querySelector(".speed-song");

slider.addEventListener("input", function () {
  var x = slider.value;
  var y = 100 - x;
  console.log(x);

  console.log(y);

  var color =
    "linear-gradient(90deg, rgb(117, 253, 117) " + x + "%,0%, rgb(120, 115, 115) " + y + "%)";

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
    "%,0%, rgb(120, 115, 115) " +
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
