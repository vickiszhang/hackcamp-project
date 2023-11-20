// document.addEventListener("DOMContentLoaded", function () {
//   const datepickerButton = document.getElementById("btn-custom-submit");

//   datepickerButton.addEventListener("click", function () {
//     console.log("Button clicked!");
//   });
// });

function submit() {
  const name = document.getElementById("listingTitle").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("expDate").value;
  const time = document.getElementById("availableTime").value;
  const location = document.getElementById("pickupPlace").value;
  const available = true;

  const storedItems = JSON.parse(localStorage.getItem('items'));
  console.log(storedItems);
  const newItem = {name, description, date, time, location, available};
  console.log(newItem);
  storedItems.push(newItem);
  localStorage.setItem('items', JSON.stringify(storedItems));
  console.log(localStorage.getItem('items'));
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
