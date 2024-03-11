const input = document.querySelector("#todo");
const ul = document.querySelector("ul");

const todo = [];

function addtodo() {
  todo.push(input.value);
  console.log(todo);
  input.value = "";
  ul.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    ul.innerHTML += `<li>${todo[i]} <button class = "del_btn" onclick="deletetodo(${i})">Delete</button> 
    <button class="edit_btn" onclick="edittodo(${i})" >Edit</button></li>`;
  }
}

function rendertodo() {
  ul.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    ul.innerHTML += `<li>${todo[i]} <button onclick="deletetodo(${i}) " >Delete</button> <button onclick="edittodo(${i})" >Edit</button>  </li>`;
  }
}

function deletetodo(i) {
    todo.splice(i,1)
    rendertodo()
}

function edittodo(i) {
    const editedValue = prompt('Enter the edited value')
    todo.splice(i,1,editedValue)
    rendertodo()
}

function deletedall(i){
    todo.splice(i)
    rendertodo()
}



