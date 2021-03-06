// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function (mush) {
    if (state.mushrooms) {
      mush.style.visibility = "visible";
    } else {
      mush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const getPeppers = document.querySelectorAll(".green-pepper");
  getPeppers.forEach(function (pepGuardiola) {
    if (state.greenPeppers) {
      pepGuardiola.style.visibility = "visible";
    } else {
      pepGuardiola.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function (wSauce) {
    if (state.whiteSauce) {
      wSauce.classList.add("sauce-white");
    } else {
      wSauce.classList.remove("sauce-white");
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach(function (noGluten) {
    if (state.glutenFreeCrust) {
      noGluten.classList.add("crust-gluten-free");
    } else {
      noGluten.classList.remove("crust-gluten-free");
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
    document.querySelector(".btn.btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

// I tried this way but it didn't work :/ Idon't know why

// for (let i = 0; i < butTon.length; i++) {
//   console.log(i);
//   butTon[i].addEventListener("click", function () {
//     const isActive = butTon[i].classList.contains("active");
//     if (isActive === true) {
//       console.log("butTon active");
//       butTon[i].classList.remove("active");
//     } else {
//       console.log("butTon not Active");
//       butTon[i].classList.add("active");
//     }
//   });
// }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  let total = basePrice;
  const listOfPrice = document.querySelector("aside.panel.price ul");
  listOfPrice.innerHTML = "";
  // console.log(typeof listOfPrice);
  for (let ingredientKey in ingredients) {
    if (state[ingredientKey]) {
      total += ingredients[ingredientKey].price;
      listOfPrice.innerHTML += `<li>${ingredients[ingredientKey].price}  ${ingredients[ingredientKey].name} </li> `;
    }
  }
  document.querySelector(".panel.price strong").innerHTML = "$" + total;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
const mushBtn = document.querySelector(".btn.btn-mushrooms");
mushBtn.addEventListener("click", function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

const greenPep = document.querySelector(".btn.btn-green-peppers");
greenPep.addEventListener("click", function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce; // state de white sauce = false
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
