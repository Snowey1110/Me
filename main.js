
// Get food data
let foodData = {};
fetch('FoodList.json') 
  .then(response => response.json())
  .then(data => foodData = data);

// Function for loading search bar.
const loadSearch = () => {
  document.getElementById("searchField").style.display = "block";
}

// Function to check the food status.
const findFoodStatus = () => {
  let input = document.getElementById("searchField").value;
  let status = foodData[input];
  if (status) {
    document.getElementById("result").innerHTML = `I ${status} ${input}.`;
  } else {
    document.getElementById("result").innerHTML = `I do not have an opinion on ${input}.`;
  }
}
