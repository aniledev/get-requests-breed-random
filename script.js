// "use strict";

function getDogImage(result) {
  fetch(result)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //creating an empty to hold all of the html at once
  let html = "";

  html = `<img src="${responseJson.message}" class="results-img"/>`;

  // alert("Please input a valid breed.");
  if (responseJson.status === "error") {
    alert("Something went wrong. Try again later. Please input a valid breed.");
  } else {
    $(".results").append(html);
    $(".results").removeClass("hidden");
  }
}

//Get value from the user input and verify that my event listener is working
function formValue() {
  $("button[type=submit]").click(function () {
    event.preventDefault();
    let dogBreed = $(".submit").val();
    console.log(dogBreed);
    //set api to a variable to make it easier to reference in functions

    const result = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    console.log(result);
    getDogImage(result);
  });
}

$(function () {
  console.log("App loaded! Waiting for submit!");
  formValue();
});
