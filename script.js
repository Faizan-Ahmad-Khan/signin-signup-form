function showSigninForm() {
    document.getElementById("formContainer").innerHTML = `
        <form id="signinForm">
            <input type="text" placeholder="Email" required  id="signInPass">
            <input type="password" placeholder="Password" required id="signInPass">
            <button type="submit" onclick="checkLogin()">Login</button>
        </form>
    `;
    document.getElementById('signin-heading').style.display = 'block';
    document.getElementById('signup-heading').style.display = 'none';
    document.getElementById('firstPara').style.display = 'none';
    document.getElementById('secondPara').style.display = 'block';
    document.getElementById('signInHeadPara').style.display = 'block';
    document.getElementById('accountIcon').style.display = 'none';

}

function showSignupForm() {
    document.getElementById("formContainer").innerHTML = `
        <form id="signupForm">
            <input type="text" placeholder="Name" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Confirm Password" required>
            <button type="submit">Signup</button>
        </form>
    `;
    document.getElementById('signin-heading').style.display = 'none';
    document.getElementById('signup-heading').style.display = 'block';
    document.getElementById('firstPara').style.display = 'block';
    document.getElementById('secondPara').style.display = 'none';
    document.getElementById('signInHeadPara').style.display = 'none';
    document.getElementById('accountIcon').style.display = 'block';
}

function checkLogin() {
    let username = "myemail";
    let userPassword = "mypass";
    let userPasswordcheck = document.getElementById("signInPass").value;
    let usernamecheck =  document.getElementById("signInUser").value;
    if(userPassword === userPasswordcheck && username === usernamecheck)  {
        alert("Login successfully");
    } else {
        alert("Invalid email or password");    
    }
    document.getElementById("signInUser").value = "";
    document.getElementById("signInPass").value = "";
}

