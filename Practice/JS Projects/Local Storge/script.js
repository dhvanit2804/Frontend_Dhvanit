function submit() {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let data = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  localStorage.setItem("user", JSON.stringify(data));
}

function login() {
  let username = document.getElementById("loginusername");
  let email = document.getElementById("loginemail");
  let password = document.getElementById("loginpassword");
  
  let user = localStorage.getItem("user")
  user = JSON.parse(user)

  if(username.value === user.username && email.value === user.email && password.value === user.password){
    console.log("Login successful");
  } else {
    console.log("Login failed");
  }
}
