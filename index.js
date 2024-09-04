var todoArray = [];
function saveTodo() {
    var title = document.getElementById("title").value;
    todoArray.push(title);
    localStorage.setItem("todos", todoArray.toString());
    document.getElementById("title").value = "";
    fetchTodos();

}

function fetchTodos() {
    var str = localStorage.getItem("todos");
    todoArray = str.split(",");
    var htmlstring =
        ` <tr>
        <th>Sr.no</th>
        <th>Name</th>
        <th>Actions</th>  
        
     </tr>
    `;
    var counter = 0;
    todoArray.forEach((ele) => {
        counter++;
        htmlstring += `
        <tr>
        <td>${counter}</td>
        <td>${ele}</td>
        <td>
        <button class="btn btn-outline-warning" onclick="editTodo(${counter - 1})">
        Edit</button>
        <button class="btn btn-outline-danger" onclick="deleteTodo(${counter - 1})">
        delete</button>
        </td>  
        
        
     </tr>
        `
    });
    document.getElementById("todo-table").innerHTML = htmlstring;

}

function editTodo(index) {
    var newValue = prompt("do you want to edit?", todoArray[index]);
    if (newValue != null) {
        todoArray[index] = newValue;
        localStorage.setItem("todos", todoArray.toString());
        fetchTodos();
    }
}

function deleteTodo(index) {
    if (confirm(`Do you really want to delete ${todoArray[index]} ?`)) {
        todoArray.splice(index, 1);
        localStorage.setItem("todos", todoArray.toString());
        fetchTodos();
    }
}
