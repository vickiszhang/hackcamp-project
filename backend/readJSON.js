let jsonData;

function fetchData() {
  // Assuming data.json is in the same directory as script.js
  const jsonFile = 'data.json';

  fetch(jsonFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      jsonData = data;
      console.log('Data loaded:', jsonData);
      updateHtml();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

function updateHtml() {
  // Update your HTML content here
  const itemNameElement = document.getElementById('itemName');
  const itemQuantityElement = document.getElementById('itemQuantity');

  if (itemNameElement && itemQuantityElement) {
    itemNameElement.textContent = jsonData[0].name;
    itemQuantityElement.textContent = jsonData[0].quantity;
  }
}

// Call fetchData when the script is loaded
fetchData();
console.log('completed!');
