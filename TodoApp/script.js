document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");

  let editMode = false;
  let editItem = "";

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerHTML = "Add Todo";
        editMode = false;
        editItem = "";
        todoInput.value = "";
      } else {
        addTodoItem(todoText);
      }
    } else {
      alert("Please enter a valid task !");
    }
  });

  todoList.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "🚫") {
        todoItem.remove();
      } else if (target.innerText === "📝") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerHTML = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });

  function addTodoItem(item) {
    const todoItem = document.createElement("li");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    todoItem.innerText = item;

    editBtn.innerHTML = "📝";
    removeBtn.innerHTML = "🚫";

    todoItem.appendChild(editBtn);
    todoItem.appendChild(removeBtn);

    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});
