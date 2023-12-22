async function searchMeals() {
  const searchValue = document.getElementById("search").value.trim();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e88521248cmshea123f3876c7580p1f9c4bjsn14022d045bfe",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  const response = await fetch(
    `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchValue}`,
    options
  );
  const data = await response.json();
  console.log(data);
  displayMeals(data.results);
}

function displayMeals(meals) {
  let html = "";
  meals.forEach((meal) => {
    html += `
        <div>
            <h1>${meal.name}</h1>
            <video width="320" height="240" controls>
                <source src="${meal.original_video_url}" type="video/mp4">
            </video>
            <p>${meal.description}</p>
        </div> 
        `;
  });

  const mealResults = document.getElementById("diet_results"); // Define mealResults
  mealResults.innerHTML = html; // Set innerHTML
}
