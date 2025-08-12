const addTodoBtn = document.getElementById("addTodoBtn");
const inputTag = document.getElementById("todoInput");
const todoListUl = document.getElementById("todoList");
let todoText;
let todos = [];
let todosString = localStorage.getItem("todos");
if (todosString) {
  todos = JSON.parse(todosString);
}

const populateTodos = () => {
  let string = "";
  let i = 0;
  for (const todo of todos) {
    string += `<li id="todo-${i}" class="todo-item ${
      todo.isCompleted ? "completed" : ""
    }">
            <input type="checkbox" class="todo-checkbox" ${
              todo.isCompleted ? "checked" : ""
            } >
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn">×</button>
        </li>`;
    i++;
  }
  todoListUl.innerHTML = string;

  // Add button Checkbox
  const todoCheckboxes = document.querySelectorAll(".todo-checkbox");

  todoCheckboxes.forEach((element) => {
    element.addEventListener("click", (e) => {
      if (e.target.checked) {
        element.parentNode.classList.add("completed");
        todos = todos.map((todo) => {
          if ("todo-" + todo.id == element.parentNode.id) {
            return { ...todo, isCompleted: true };
          } else {
            return todo;
          }
        });
        localStorage.setItem("todos", JSON.stringify(todos));
      } else {
        element.parentNode.classList.remove("completed");
        todos = todos.map((todo) => {
          if ("todo-" + todo.id == element.parentNode.id) {
            return { ...todo, isCompleted: false };
          } else {
            return todo;
          }
        });
        localStorage.setItem("todos", JSON.stringify(todos));
      }
    });
  });

  //Detele Todo Logic
  let deteleBtns = document.querySelectorAll(".delete-btn");

  deteleBtns.forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target.parentNode.id);
      todos = todos.filter((todo) => {
        return "todo-" + todo.id !== e.target.parentNode.id;
      });
      localStorage.setItem("todos", JSON.stringify(todos));
      populateTodos();
    });
  });
};

addTodoBtn.addEventListener("click", () => {
  todoText = inputTag.value;
  inputTag.value = "";
  let todo = {
    id: todos.length,
    title: todoText,
    isCompleted: false,
  };
  todos.push(todo);
  todos = todos.map((todo, i) => {
    return { ...todo, id: i };
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  populateTodos();
});

populateTodos();
