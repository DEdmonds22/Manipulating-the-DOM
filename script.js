let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById("main-title").textContent = "I'm DOM Toretto, Welcome to my page."

  // Part 2
  document.querySelector("body").style.backgroundColor = "#fda1fe";

  // Part 3
  const favThings = document.getElementById("favorite-things");
  favThings.removeChild(favThings.lastElementChild);
  // Part 4
  const specialTitle = document.querySelectorAll(".special-title");
  for ( let item of specialTitle) {
    item.style.fontSize = "2rem";
  }
  // Part 5
  const raceListUl = document.getElementById("past-races");
  raceListUl.removeChild(raceListUl.children[3]);
  // Part 6
  const newLiEl = document.createElement('li');
  newLiEl.textContent = "Annapolis";
  raceListUl.appendChild(newLiEl);
  // Part 7
  const mainEl = document.querySelector(".main");
  const newDiv = document.createElement("div");
  newDiv.classList.add("blog-post", "purple");
  mainEl.appendChild(newDiv);

  const newH = document.createElement("h1");
  newH.textContent = "Annapolis";
  newDiv.appendChild(newH);

  const newP = document.createElement("p");
  newP.textContent= "I DROVE A NAVY SHIP BLIND-FOLDED!";
  newDiv.appendChild(newP)
  // Part 8


  // Part 9




});
