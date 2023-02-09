let displayList = [];

fetch('http://localhost:3000/api/book', {
	method: 'GET',
	headers: {'Authorization': "Bearer " + localStorage.getItem("jwt") }
})
.then(function(response){
	return response.json()
})
.then((data) => {
	var list = document.getElementById("myList");
	data.forEach((item) => {
		displayList.push(item.title);
		let li = document.createElement("li");
		li.innerText = (item.title + "-" + item.author);
		list.appendChild(li);
	})
	console.log(displayList)
})
.catch((err) => {
	console.log(`Error fetching: ${err}`)
});

function logout() {
	localStorage.clear();
	window.location.href = './login.html'
}

function addBook() {
	
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/api/book");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("jwt"));
  xhttp.send(JSON.stringify({
	"title": title,
    "author": author
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      console.log(objects);
      if (objects['title'] != null && objects['author'] != null) {
		var list = document.getElementById("myList");
		let li = document.createElement("li");
		li.innerText = (objects['title'] + "-" + objects['author']);
		list.appendChild(li);
      } else {
        alert("Can't add new book");
      }
    }
  };
  return false;
	
}