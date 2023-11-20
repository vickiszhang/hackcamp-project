function fetchData(file) {
  // Assuming data.json is in the same directory as script.js
  const jsonFile = file;

  if(localStorage.getItem('items')) {
    updateHtml();
  } else {
    fetch(jsonFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('items', JSON.stringify(data));
      updateHtml();
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }
}

function updateHtml() {
  const jsonContentElement = document.getElementById('jsonContent');
  const storedItems = JSON.parse(localStorage.getItem('items'));

  if (jsonContentElement) {
    // Loop through the jsonData array and display each item
    storedItems.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.innerHTML = `
        <div class="card">
          <div class='item-image' style="background-image: url('${item.photo}');">
          </div>
          <div class='description'>
              <h1 class = 'username'>@${item.user}</h1>
              <h1 class = 'name'>${item.name}</h1>
              <h1>Expiry Date: ${item.date}</h1>
              <h1>Meeting Location: ${item.location}</h1>
              <h1>Available: ${item.available}</h1>
          </div>
          <a href="./request-pickup/pickup-sched.html"> <button class='request'>Request Pickup</button> </a>
        </div> 
      `;
      jsonContentElement.appendChild(itemContainer);
    });
  }
}

// Call fetchData when the script is loaded
fetchData('./backend/productData.json');
console.log('completed!');
