// document.addEventListener("DOMContentLoaded", function () {
//   const datepickerButton = document.getElementById("btn-custom-submit");

//   datepickerButton.addEventListener("click", function () {
//     console.log("Button clicked!");
//   });
// });

function submit() {
  console.log("hello");
}

const uploadImage = document.querySelector(".upload-image");
const inputFile = document.querySelector("#file");

uploadImage.addEventListener("click", function () {
  inputFile.click();
});

inputFile.addEventListener("change", function () {});
