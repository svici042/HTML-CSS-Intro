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

/* ===== KALENDER ===== */

document.addEventListener('DOMContentLoaded', () => {
    const calendarDays = document.getElementById('calendar-days');
    const calendarMonthYear = document.getElementById('calendar-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const selectedDateInfo = document.getElementById('selected-date-info');

    let currentDate = new Date();
    let displayedMonth = currentDate.getMonth();
    let displayedYear = currentDate.getFullYear();
    let selectedDate = null;

    const monthNames = [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
    ];

    const weekdayNames = [
        'Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'
    ];

    function renderCalendar() {
        calendarDays.innerHTML = '';
        calendarMonthYear.textContent = `${monthNames[displayedMonth]} ${displayedYear}`;

        const firstDay = new Date(displayedYear, displayedMonth, 1);
        const lastDay = new Date(displayedYear, displayedMonth + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Day of week of first day (0 = Sunday, 1 = Monday, etc.)
        // Adjust for Monday start: Monday=0, Tuesday=1, ..., Sunday=6
        let startingDay = firstDay.getDay() - 1;
        if (startingDay === -1) startingDay = 6;

        // Previous month days
        const prevMonthLastDay = new Date(displayedYear, displayedMonth, 0).getDate();
        for (let i = startingDay - 1; i >= 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day other-month';
            dayDiv.textContent = prevMonthLastDay - i;
            calendarDays.appendChild(dayDiv);
        }

        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            dayDiv.textContent = day;

            const checkDate = new Date(displayedYear, displayedMonth, day);

            // Check if it's today
            const today = new Date();
            if (checkDate.toDateString() === today.toDateString()) {
                dayDiv.classList.add('today');
            }

            // Check if it's selected
            if (selectedDate && checkDate.toDateString() === selectedDate.toDateString()) {
                dayDiv.classList.add('selected');
            }

            dayDiv.addEventListener('click', () => {
                selectedDate = checkDate;
                renderCalendar();
                updateSelectedDateInfo();
            });

            calendarDays.appendChild(dayDiv);
        }

        // Next month days
        const totalCells = startingDay + daysInMonth;
        const remainingCells = 42 - totalCells; // 6 rows * 7 days
        for (let day = 1; day <= remainingCells; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day other-month';
            dayDiv.textContent = day;
            calendarDays.appendChild(dayDiv);
        }
    }

    function updateSelectedDateInfo() {
        if (selectedDate) {
            const formatted = selectedDate.toLocaleDateString('no-NO', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            selectedDateInfo.textContent = `Valgt dato: ${formatted}`;
        } else {
            selectedDateInfo.textContent = 'Klikk på en dato for å velge';
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        displayedMonth--;
        if (displayedMonth < 0) {
            displayedMonth = 11;
            displayedYear--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        displayedMonth++;
        if (displayedMonth > 11) {
            displayedMonth = 0;
            displayedYear++;
        }
        renderCalendar();
    });

    renderCalendar();
    updateSelectedDateInfo();
});

/* ===== KALKULATOR ===== */

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.calc-btn');

    let currentValue = '0';
    let previousValue = '';
    let operator = '';
    let shouldResetDisplay = false;

    function updateDisplay() {
        display.textContent = currentValue;
    }

    function clear() {
        currentValue = '0';
        previousValue = '';
        operator = '';
    }

    function deleteLast() {
        if (shouldResetDisplay) return;
        if (currentValue.length === 1) {
            currentValue = '0';
        } else {
            currentValue = currentValue.slice(0, -1);
        }
    }

    function appendNumber(numStr) {
        if (shouldResetDisplay) {
            currentValue = '';
            shouldResetDisplay = false;
        }
        if (currentValue === '0' && numStr !== '.') {
            currentValue = numStr;
        } else if (numStr === '.' && currentValue.includes('.')) {
            return;
        } else {
            currentValue += numStr;
        }
    }

    function setOperator(op) {
        if (operator !== '' && !shouldResetDisplay) {
            calculate();
        }
        previousValue = currentValue;
        operator = op;
        shouldResetDisplay = true;
    }

    function calculate() {
        if (operator === '' || previousValue === '') return;

        const prev = parseFloat(previousValue);
        const current = parseFloat(currentValue);
        let result = 0;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    currentValue = 'Error';
                    operator = '';
                    previousValue = '';
                    shouldResetDisplay = true;
                    return;
                }
                result = prev / current;
                break;
        }

        currentValue = result.toString();
        operator = '';
        previousValue = '';
        shouldResetDisplay = true;
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            const number = btn.dataset.number;
            const op = btn.dataset.op;

            if (number !== undefined) {
                appendNumber(number);
            } else if (action === 'clear') {
                clear();
            } else if (action === 'delete') {
                deleteLast();
            } else if (action === 'operator') {
                setOperator(op);
            } else if (action === 'calculate') {
                calculate();
            }

            updateDisplay();
        });
    });
});
