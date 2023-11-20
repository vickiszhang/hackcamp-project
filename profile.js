
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