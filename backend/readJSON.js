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
  const jsonContentElement = document.getElementById('jsonContent');

  if (jsonContentElement) {
    // Loop through the jsonData array and display each item
    jsonData.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.innerHTML = `
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
        <hr>
      `;
      jsonContentElement.appendChild(itemContainer);
    });
  }
}

// Call fetchData when the script is loaded
fetchData();
console.log('completed!');
