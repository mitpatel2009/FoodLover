let showLoadingScreen = () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "block";
};

let hideLoadingScreen = () => {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
};

let getNutrition = () => {
  showLoadingScreen();
  const nutrition_textbox = document.getElementById("nutrition_input");
  const nutrition_value = nutrition_textbox.value; // Get the value of the input element
  let url = `https://api.edamam.com/api/food-database/v2/parser?app_id=8cf7a91c&app_key=529aef1047ce2b7db9ae150b8ff7ed0e&ingr=${nutrition_value}&nutrition-type=cooking`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const table = document.createElement("table");
      table.className = "food-table"; // Optional: Add a CSS class to style the table

      // Create table header row
      const headerRow = table.insertRow();
      const headerCell1 = headerRow.insertCell();
      headerCell1.textContent = "Food Label";
      const headerCell2 = headerRow.insertCell();
      headerCell2.textContent = "Calories";

      // Iterate over the data and add rows to the table
      data.hints.forEach((hint) => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = hint.food.label;
        const cell2 = row.insertCell();
        cell2.textContent = `${hint.food.nutrients.ENERC_KCAL} Kcal`;
      });

      // Append the table to the DOM (you should specify where you want it)
      const tableContainer = document.getElementById("table-container"); // Replace with your container element or ID
      tableContainer.appendChild(table);
      hideLoadingScreen();
    });
};

const nutrtion_btn = document.getElementById("nutrition_button");
nutrtion_btn.onclick = getNutrition;
