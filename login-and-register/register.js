
function createAccount(email, username, password) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { 
        "email": email, 
        "username": username, 
        "password": password,
        "name": username,
        "location": "Canada",
        "bio": "I am a new user!"};
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
}


function register() {

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    console.log('Email value:', email);
    console.log('username value:', username);
    console.log('password value:', password);

    createAccount(email, username, password)
}