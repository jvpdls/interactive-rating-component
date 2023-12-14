/**
 * Retrieves the user rating from the rating inputs.
 * @returns {number} The user rating.
 */
function getUserRating() {
  var rating = 0;
  var ratingInputs = document.getElementsByClassName("rating-input");
  for (var i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      rating = ratingInputs[i].value;
    }
  }
  return rating;
}

/**
 * Renders the thank you component with the given rating.
 * @param {number} rating - The rating selected by the user.
 */
function renderThankYouComponent(rating) {
  var component = document.querySelector(".component");
  component.innerHTML = `
    <header class="component__header">
        <img src="" alt="" id="rating" />
        <div class="component__result-container">
            <p class="component__result-message">
            You selected <span id="component__rating-display">${rating}</span> out of 5
            </p>
        </div>
    </header>
    <div class="component__body">
        <h1 class="component__heading">Thank you!</h1>
        <p class="component__text">
        We appreciate you taking the time to give a rating. If you ever need more
        support, don’t hesitate to get in touch!
        </p>
    </div>
    `;
}

/**
 * Renders the rating component.
 */
document.addEventListener("DOMContentLoaded", function () {
  var ratingForm = document.getElementById("component__rating-form");
  ratingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var rating = getUserRating();
    renderThankYouComponent(rating);
  });
});
