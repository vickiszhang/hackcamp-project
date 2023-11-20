function Login() {
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

  
    let accountExists = checkAccount(email, password);

    console.log(accountExists)

}

function checkAccount(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email && user.password === password);
    }

function setCurrentUser() {
    const name = document.getElementById("email").value;
    localStorage.setItem('items', JSON.stringify(name));
    console.log(name);
    window.location.href = '../browse.html';
}