let menuaa = document.getElementById("menu-js");
let menu = document.getElementById("menu2");
let menub = document.getElementById("menu-b")

menuaa.onclick = function() {
    menu.style.display = "block"
    menu.style.height = "700px"
    p.style.display = "none"
    menuaa.style.display = "none"
}

menub.onclick = function() {
    menu.style.display = "none"
    menuaa.style.display = "block"
    menuaa.style.display = "flex"
}

function validateEmail() {
    var emailinput = document.getElementById("email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = emailinput.value;

    if (emailRegex.test(email)) {
        alert("Email succes")
        home.style.display = "none"
        console.log(email)
    }
    else {
        alert("Invalid email")
    }
}

function validpass() {
    var passwordinput = document.getElementById("pass")
    var password = passwordinput.value;
    
    var minLength = 8;
    var upperCase = /[A-Z]/.test(password);
    var lowerCase = /[a-z]/.test(password);

    if(password.length >= minLength && upperCase && lowerCase){
        alert("Succes password");
        home.style.display = "none"
        console.log(password);
    }
    else {
        alert("Invalid password");
    }
}

let menujs2 = document.getElementById("menujs2");
let home = document.getElementById("home-form");

menujs2.onclick = function() {
    home.style.display = "block"
    home.style.display = "flex"
    home.style.justifyContent = "center"
    home.style.alignItems = "center"
}

let p = document.getElementById("p")
