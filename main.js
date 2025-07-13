let currentDish = dishes[0];
let ignoredDishes = [];

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const getRandomDishIndex = () => getRandomNumber(dishes.length);

const randomizeDish = () => {
  const nextDishIndex = getRandomDishIndex();

  if (ignoredDishes.length === dishes.length) {
    ignoredDishes = [];
  }

  if (ignoredDishes.includes(nextDishIndex)) {
    return randomizeDish();
  }

  ignoredDishes.push(nextDishIndex);

  return dishes[nextDishIndex];
};

function updateDish() {
  currentDish = randomizeDish();
  const dishName = document.getElementById("dish-name");
  const dishImage = document.getElementById("dish-image");
  dishName.textContent = currentDish.name;
  dishImage.src = currentDish.image;
}

updateDish();

document.getElementById("randomize-button").addEventListener("click", () => {
  updateDish();
});
