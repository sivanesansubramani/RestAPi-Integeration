var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}






// search meal based on letter

function searchMeals() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                displayMeals(data.meals);
            } else {
                document.getElementById('mealDetails').innerHTML = '<p>No meals found.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMeals(meals) {
    const mealDetails = document.getElementById('mealDetails');
    mealDetails.innerHTML = '';

    meals.forEach(meal => {
        const mealContainer = document.createElement('div');
        mealContainer.className = 'mealContainer';

        const img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        mealContainer.appendChild(img);

        const title = document.createElement('h2');
        title.textContent = meal.strMeal;
        mealContainer.appendChild(title);

        const category = document.createElement('p');
        category.textContent = `Category: ${meal.strCategory}`;
        mealContainer.appendChild(category);

        const area = document.createElement('p');
        area.textContent = `Area: ${meal.strArea}`;
        mealContainer.appendChild(area);

        const instructions = document.createElement('p');
        instructions.textContent = `Instructions: ${meal.strInstructions}`;
        mealContainer.appendChild(instructions);

        const ingredientsTitle = document.createElement('h3');
        ingredientsTitle.textContent = 'Ingredients';
        mealContainer.appendChild(ingredientsTitle);

        const ingredientsList = document.createElement('ul');
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                const listItem = document.createElement('li');
                listItem.textContent = `${ingredient}: ${measure}`;
                ingredientsList.appendChild(listItem);
            }
        }
        mealContainer.appendChild(ingredientsList);

        const youtubeLink = document.createElement('a');
        youtubeLink.href = meal.strYoutube;
        youtubeLink.textContent = 'Watch on YouTube';
        mealContainer.appendChild(youtubeLink);

        mealDetails.appendChild(mealContainer);
    });
}





// search meal based on area

function searchOnArea() {
    // event.preventDefault(); // Prevent default form submission behavior

    const area = document.getElementById('area').value.toLowerCase();
    const apiUrl = `https://themealdb.com/api/json/v1/1/filter.php?a=${area}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                displayMealsOnArea(data.meals);
            } else {
                document.getElementById('mealDetailsonarea').innerHTML = '<p>No meals found in that area.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMealsOnArea(meals) {
    const mealDetails = document.getElementById('mealDetails');
    mealDetails.innerHTML = '';

    meals.forEach(meal => {
        const mealContainer = document.createElement('div');
        mealContainer.className = 'mealContainer';

        const title = document.createElement('h2');
        title.textContent = meal.strMeal;
        mealContainer.appendChild(title);

        const img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        mealContainer.appendChild(img);


        mealDetails.appendChild(mealContainer);
    });
}












document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        // Get the categories array from the API response
        const categories = data.categories;

        // Get the select element by its ID
        const dropdown = document.getElementById('categories');

        // Loop through the categories and add them to the dropdown
        categories.forEach(category => {
          const option = document.createElement('option');
          option.value = category.strCategory;
          option.text = category.strCategory;
          dropdown.appendChild(option);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });




// search meal based on catagory

function searchOncatagory() {
    // event.preventDefault(); // Prevent default form submission behavior

    const catagory = document.getElementById('catagory').value.toLowerCase();
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catagory}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                displayMealsOnArea(data.meals);
            } else {
                document.getElementById('mealDetailsonarea').innerHTML = '<p>No meals found in that area.</p>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMealsOnArea(meals) {
    const mealDetails = document.getElementById('mealDetails');
    mealDetails.innerHTML = '';

    meals.forEach(meal => {
        const mealContainer = document.createElement('div');
        mealContainer.className = 'mealContainer';

        const title = document.createElement('h2');
        title.textContent = meal.strMeal;
        mealContainer.appendChild(title);

        const img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        mealContainer.appendChild(img);


        mealDetails.appendChild(mealContainer);
    });
}