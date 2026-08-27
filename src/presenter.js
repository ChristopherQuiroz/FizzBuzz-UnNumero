import isFizzBuzz from "./isFizzBuzz.js";

const form = document.querySelector("#FizzBuzzForm");
const input = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(input.value);

  div.innerHTML = isFizzBuzz(number);
});
