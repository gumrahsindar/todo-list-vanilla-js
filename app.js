const addForm = document.querySelector(".add");
const list = document.querySelector(".todo-list");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    
    <li class="todo-list-item">
                    > <span>${todo}</span><i class="fa-solid fa-trash-can delete"></i>
                </li>
`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (evt) => {
  evt.target.classList.contains("delete") && evt.target.parentElement.remove();
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
