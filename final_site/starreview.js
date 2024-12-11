import stores from './stores.mjs';

// function that switches out the store info
function storeTemplate(stores) {
    return `
    <h1>${stores.title}</h1>
    <img src="${stores.image}" alt="store image">

            <!-- the description box -->
            <div id="description">
                <p>Location: ${stores.location}</p>
                <p>Website: ${stores.website}</p>
                <p>Hours: ${stores.hours}</p>
                <p>${stores.description}</p>
            </div>

            <!-- the box with reviews -->
            <div id="reviews">
                ${stores.reviews.map(reviewTemplate).join("")}
            </div>`;
}

// puts together the template for each review
function reviewTemplate(review) {
    return `
        <div class="review">
            <div class="stars">${generateStars(review.stars)}</div>
            <p>${review.text}</p>
        </div>`;
}

function generateStars(rating) {
    let html = "";
    // for a review calculate how many stars to print
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            // Add a filled star if current index <= rating
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // Add an empty star otherwise
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    return html;
}

// code that puts the storeInfo back into the HTML
function renderStore(stores) {
    const storeContainer = document.getElementById("storeInfo");
    storeContainer.innerHTML = storeTemplate(stores)
  }

  //event listener that finds the store in the array and calls the renderStore function
document.getElementById("dropdown").addEventListener("change", (event) => {
    //store selected by dropdown
    const selectedStoreId = event.target.value;

    //find the selected store in the array (chatGPT)
    const selectedStore = stores.find((store) => store.id === selectedStoreId);
    
    if (selectedStore) {
        renderStore(selectedStore);
      } else {
        // Clear display or show a message if no valid store is selected
        document.getElementById("storeInfo").innerHTML = "<p>Please select a store.</p>";
      }
});

renderStore(stores[1]);

