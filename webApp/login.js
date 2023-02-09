var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './bookList.html'
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/api/auth/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "username": username,
    "password": password
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['access_token'] != null) {
        localStorage.setItem("jwt", objects['access_token']);
        window.location.href = './bookList.html';
      } else {
        alert("Username or password is incorrect");
      }
    }
  };
  return false;
}