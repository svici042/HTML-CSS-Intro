console.log("Hello World!");
let num = 1 + 1;
num = 15;
console.log(num);
let name = "Slava";
console.log(name);
const pi = 3.141;
console.log(pi);

// *Data structure*/

// Array
const shopinglist = [
    "Egg", 
    "Melk", 
    "Brød", 
    "Smør"
];

console.log(shopinglist[0]);
console.log(shopinglist.length);


// for loop example

for (let counter = 0; counter < shopinglist.length; counter++) {
    console.log(shopinglist[counter]);
}

// Display shopping list on the page
document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('shopping-list');
    
    for (let i = 0; i < shopinglist.length; i++) {
        const li = document.createElement('li');
        li.textContent = shopinglist[i];
        listContainer.appendChild(li);
    }
});

// let num2 = 0;

// for (let i = 0; i < 15; i++) {
//     num2 += i;
// }
// console.log(num2);

// Object data structure
const person = {
    name: "Slava",
    age: 44,
    hobbies: ["programming", "gaming", "cooking"]
};

const Slava = person;
Slava.name = "Slava";
Slava.age = 44;
Slava.hobbies = ["programming", "gaming", "cooking"];

console.log(Slava);

/* ===== TO DO APPLIKASJON ===== */

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const multiplyTasksBtn = document.getElementById('multiply-tasks-btn');

    let todos = [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'todo-checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleTodo(index));
            
            const span = document.createElement('span');
            span.className = 'todo-text';
            span.textContent = todo.text;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '🗑 Slett';
            deleteBtn.addEventListener('click', () => deleteTodo(index));
            
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }

    function addTodo(text) {
        if (text.trim() === '') return;
        todos.push({ text: text.trim(), completed: false });
        renderTodos();
        todoInput.value = '';
        todoInput.focus();
    }

    function toggleTodo(index) {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    function multiplyTasks() {
        const defaultTasks = [
            'Lær JavaScript',
            'Øv på HTML og CSS',
            'Bygg en kul nettside'
        ];
        defaultTasks.forEach(task => addTodo(task));
    }

    addBtn.addEventListener('click', () => addTodo(todoInput.value));
    
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo(todoInput.value);
        }
    });

    multiplyTasksBtn.addEventListener('click', multiplyTasks);
});
