function changeProfile() {
    
    const name = document.getElementById('name').value || null;
    const username = document.getElementById('username').value || null;
    const email = document.getElementById('email').value || null;
    const location = document.getElementById('location').value || null;
    const bio = document.getElementById('bio').value || null;
    const password = document.getElementById('password').value || null;

    console.log(name)

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUsers.some(user => user.email === email && user.password === password)) {
        existingUsers.filter(obj => obj[email] === email);
        existingUsers[0].name = name ||  existingUsers[0].name;
        existingUsers[0].username = username || existingUsers[0].username;
        existingUsers[0].email = email ||existingUsers[0].email;
        existingUsers[0].location = location ||  existingUsers[0].location;
        existingUsers[0].bio = bio || existingUsers[0].bio;
        existingUsers[0].password = password || existingUsers[0].password;
    };

    const newUser = { "email": email, "username": username, "password": password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

}