const apiUrl = "http://localhost:8080/api/todos";
const todoList = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");

async function getTodos() {
  const response = await fetch(apiUrl);
  const todos = await response.json();
  todoList.innerHTML = ""; 
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${todo.description} (target: ${todo.targetDate})
      <button onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newTodo = {
    username: "darshan",
    description: todoInput.value,
    targetDate: "2025-10-12",
    done: false
  };

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo)
  });

  todoInput.value = "";
  getTodos(); 
});

async function deleteTodo(id) {
  await fetch(`${apiUrl}/${id}`, {
    method: "DELETE"
  });
  getTodos();
}

getTodos();
