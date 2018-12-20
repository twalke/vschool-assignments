var request = axios.get('https://api.vschool.io/pokemon');

request.then(function(response) {
  console.log(response.data.objects[0].pokemon)
  let pokemon = response.data.objects[0].pokemon;
  listName(pokemon);
})
  .catch(function(err) {
    console.log(err);
  })

function listName(arr) {
  list = document.getElementById("list");
  for (var i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i].name;
    list.appendChild(li);
  }
}
