function updateHtml() {
    const jsonContentElement = document.getElementById('jsonContent');
    const storedItems = JSON.parse(localStorage.getItem('items'));
  
    if (jsonContentElement) {
      // Loop through the jsonData array and display each item
  
      storedItems.forEach(item => {
        console.log(storedItems);
        const itemContainer = document.createElement('div');
        itemContainer.innerHTML = `
        <li class="retrival-item">
            <div class="retrival-item-info">
                <img src="${item.photo}" width="130px" height="100px">
                <h1>${item.name} </h1>
                <h1>@${item.user}</h1>
                <h1>${item.location}</h1>
                <h1>${item.date}</h1>
            </div>
        </li>
        `;
        jsonContentElement.appendChild(itemContainer);
      });
    }
  }

  updateHtml();

async function fetchData() {
    try {
        const existingUsers = JSON.parse(localStorage.getItem('users'));

        return existingUsers;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function populateData() {
    const data = await fetchData(); 

    updatedUser = data[data.length-1]
    if (data) {
        document.getElementById('username').textContent = updatedUser.username;

        document.getElementById('aboutContent').textContent = updatedUser.bio;
        document.getElementById('emailContent').textContent = updatedUser.email;
        document.getElementById('locationContent').textContent = updatedUser.location;
    }
}

populateData();
