window.onload = function () {
  createAlements();
};

const createAlements = () => {
  let mainContainer = document.getElementById("main-container");

  for (let i = 1; i < 77; i++) {
    let divElement = document.createElement("div");
    divElement.innerText = i;
    divElement.classList.add("cell");
    divElement.classList.add("bingo");
    // divElement.addEventListener("click", selectElement);

    // console.log(divElement);
    mainContainer.appendChild(divElement);
  }
};

const randomizeNumber = function () {
  const randomize = Math.trunc(Math.random() * 76) + 1;
  let numberElements = document.querySelectorAll(".cell");
  // console.log(numberElements[0]);

  for (let i = 1; i < numberElements.length; i++) {
    // console.log(i);
    if (randomize === i) {
      numberElements[i].classList.add("free");
    }
    // console.log(i);
    // numberElements.classList.add("free ");
    // console.log(randomize);
    // if (randomize === i) {
    //   numberElements.classList.add("free ");
    // }
  }
  // for (numberElement of numberElements) {
  //   // console.log(numberElement);

  //   console.log(numberElement.classList.add("free"));
  //   // if (numberElement) {

  //   // }
  // }
};

// document.querySelector(".check")
//   .addEventListener("click", (event) => {
//     const clickElement = event.currentTarget;
//     console.log(clickElement);

// const selectElement = function (event) {
//   console.log(event.currentTarget);
// };
