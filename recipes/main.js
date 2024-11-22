import recipes from './recipes.mjs';

// chooses a random recipe
function random(num) {
    return Math.floor(Math.random()*num) // will give a number 0-4
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));
//...............................................................................

// changes the recipe
function recipeTemplate(recipe) {
    return `
    <div class="recipe_box">
        <img class="recipe_img" src=${recipe.image} alt="recipe image">
        <div class="recipe_writing">
            ${tagsTemplate(recipe.tags)}
            <h2 class="recipe_title">${recipe.name}</h2>
        
            ${ratingTemplate(recipe.rating)} 
            <p class="description">${recipe.description}</p>
        </div>
    </div>`;
}

function tagsTemplate(tags) {
	let html = "";
    // loops through all the tags in the list and adds them to the html string
    tags.forEach(tag => {
        html += `<p class="recipe_tags">${tag}</p>`;
    });

	return html;
}

function ratingTemplate(rating) {
	// html string using the ratings HTML written earlier as a model.
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`

    // create a for loop from 1 to 5. Written by chatGPT.
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            // Add a filled star if current index <= rating
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // Add an empty star otherwise
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

	// add the closing tag to our string
	html += `</span>`
	return html
}

//to test
const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));
//................................................................................
// renders the random recipe
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeBox = document.getElementById("main_box")
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join("");
	// Set the HTML strings as the innerHTML of our output element.
    recipeBox.innerHTML = html
}

function init() {
  // get a random recipe
  //const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes(recipes);
}

init();
//................................................................................
// filtering recipes based on search bar input
document.getElementById("search_bar").addEventListener("submit", searchHandler);

function filter(query) {
    // Filter recipes based on the query
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
  
    // Sort the filtered recipes alphabetically by name
    const sorted = filtered.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sorted;
  }
  
function searchHandler(e) {
	e.preventDefault()
	// get the search input
    const searchInput = document.getElementById("search_input").value;
    // use the filter function to filter our recipes
    const filteredRecipes = filter(searchInput)
    // render the filtered list
    renderRecipes(filteredRecipes);
}


