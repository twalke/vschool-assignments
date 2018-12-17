var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    var jsonData = xhr.responseText;
    var data = JSON.parse(jsonData);
    var pokemon = data.objects[0].pokemon;
    postListItems(pokemon);

  }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();


function postListItems(arr) {
  list = document.getElementById("list");
  for (var i = 0; i < arr.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = arr[i].name;
    list.appendChild(li);
  }
}
