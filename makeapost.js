// document.addEventListener("DOMContentLoaded", function () {
//   const datepickerButton = document.getElementById("btn-custom-submit");

//   datepickerButton.addEventListener("click", function () {
//     console.log("Button clicked!");
//   });
// });

function submit() {
  console.log("hello");
  const title = document.getElementById("listingTitle");
  const description = document.getElementById("description");
  const expDate = document.getElementById("expDate");
  const availableTime = document.getElementById("availableTime");
  const location = document.getElementById("pickupPlace");
}

function convertImage(event) {
  var file = event.target.files[0];
  localStorage.removeItem("imageBase64");
  if (file) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var base64String = event.target.result;
      localStorage.setItem("imageBase64", base64String);
      console.log(base64String); // You can use this Base64 string as needed
    };
    reader.readAsDataURL(file);
  }
}

// const uploadImage = document.querySelector(".upload-image");
// const inputFile = document.querySelector("#file");

// uploadImage.addEventListener("click", function () {
//   inputFile.click();
// });

// inputFile.addEventListener("change", function () {

// });
