let request = axios.get('https://api.vschool.io/tylerwalke/todo');

// {
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     price: Number,
//     imgUrl: String,
//     completed: Boolean,
//     sessionId: {
//         type: String,
//         required: true
//     }
// }
let newTodo = {
  title: "portfolio",
  completed: true
}
// let newTodo = {
//   title: {
//     type: "homework",
//     required: true
//   },
//   description: "",
//   price: 0,
//   imgUrl: "",
//   completed: false,
//   sessionId: {
//     type: "",
//     required: true
//   }
// }

request.then(function(response) {
  console.log(response.data)
  let todo = response.data;
  todoItems(todo);

})
  .catch(function(err) {
    console.log(err);
  })

  // Part 1 - GET
  // The user can see their current list of todos.
  // Todos show up as soon as the page loads.
  // If a todo item is complete, it should have a strikethrough line on it
  // Images should be displayed as images if there are any
  function todoItems(arr) {
    list = document.getElementById("list");
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = arr[i].title;
      // console.log(arr[i].title);
      // console.log(arr[i].isComplete);
      if (arr[i].completed) {
        // console.log("true");
        li.setAttribute("style", "text-decoration: line-through;");
        list.appendChild(li);
      } else {
        list.appendChild(li);
      }

    }
  }

  // Part 2 - POST
  // The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item.
  // A user should be able to give the item a price.
  // A user should be able to give the item a description.
  // A user should be able to attach an imgUrl to the item
  function newTodoItem() {
    axios.post('https://api.vschool.io/tylerwalke/todo/', newTodo).then(function(response){
      console.log(response.data);
    }).catch(function(error){
      console.log(error)
    });
  }
    newTodoItem();


  // Part 3 - PUT Part 1
  // Each todo will have a checkbox where it can be marked complete or incomplete
  // Checking the checkbox should update the database

  // Part 4 - DELETE
  // A user will be able to delete todos (this is different from marking a todo as "completed")
  // Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo

  // Part 5 - PUT Part 2
  // Each Todo will have an "edit" button.
  // When clicked, the info will change to input boxes that are autofilled with the old Todo data
  // A user can change the value of these inputs
  // When the "edit" button is clicked, it will change to a "save" button.
  // When "save" is clicked, the form will disapear, and the new values will be displayed.
  // On save, the todo will be edited in the database
