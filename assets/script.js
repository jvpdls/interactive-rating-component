/**
 * Selects the rating label of the selected input.
 * @param {HTMLInputElement} ratingInput - The selected rating input.
 * @returns {void}
 */
function selectRatingLabel(ratingInput) {
  var ratingLabel = document.querySelector(
    ".component__rating-label[for=" + ratingInput.id + "]"
  );

  var ratingLabels = document.getElementsByClassName("component__rating-label");

  Array.from(ratingLabels).forEach(function (ratingLabel) {
    ratingLabel.classList.remove("selected");
  });

  ratingLabel.classList.add("selected");
}

/**
 * Checks if any radio button in the component is selected.
 * @returns {boolean} True if any radio button is selected, false otherwise.
 */
function checkIfAnyRadioWasSelected() {
  var ratingInputs = document.getElementsByClassName("component__rating-input");
  var checked = false;
  for (var i = 0; i < ratingInputs.length; i++) {
    if (ratingInputs[i].checked) {
      checked = true;
    }
  }
  return checked;
}

/**
 * Retrieves the user rating from the rating inputs.
 * @returns {number} The user rating.
 */
function getUserRating() {
  var rating = 0;
  var ratingInputs = document.getElementsByClassName("component__rating-input");
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
    <header class="component__header text-align-center margin-auto">
        <img src="assets/img/payment-device.webp" alt="Ilustração de um dispositivo de pagamento" id="rating-image" width="144" height="96"/>
        <div class="component__result-container">
            <p class="component__result-message">
            You selected <span>${rating}</span> out of 5
            </p>
        </div>
    </header>
    <div class="component__body text-align-center">
        <h1 class="component__heading">Thank you!</h1>
        <p class="component__text">
        We appreciate you taking the time to give a rating. If you ever need more
        support, don’t hesitate to get in touch!
        </p>
    </div>
    `;
}

/**
 * Initializes the interactive rating component.
 */
document.addEventListener("DOMContentLoaded", function () {
  var ratingForm = document.getElementById("component__rating-form");
  var ratingFormSubmitButton = document.getElementById("submit-button");
  var ratingInputs = document.getElementsByClassName("component__rating-input");

  /**
   * Adds change event listener to the rating inputs.
   * Selects the rating label of the selected input.
   */
  Array.from(ratingInputs).forEach(function (ratingInput) {
    ratingInput.addEventListener("change", function () {
      selectRatingLabel(ratingInput);
    });
  });

  /**
   * Adds click event listener to the submit button of the rating form.
   * Displays an alert if no rating is selected.
   */
  ratingFormSubmitButton.addEventListener("click", function () {
    if (!checkIfAnyRadioWasSelected()) {
      alert("Please select a rating");
    }
  });

  /**
   * Adds submit event listener to the rating form.
   * Prevents the default form submission behavior.
   * Retrieves the user rating and renders the thank you component.
   */
  ratingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var rating = getUserRating();
    renderThankYouComponent(rating);
  });
});
