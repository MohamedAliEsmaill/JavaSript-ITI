document.addEventListener('DOMContentLoaded', () => 
{
    const addButton = document.getElementById('add-task');
    const inputField = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    addButton.onclick = () => 
    {
        const taskText = inputField.value;
        if (taskText) 
        {
            addTask(taskText);
            inputField.value = '';
        }
    };

    function addTask(text) 
    {
        const li = document.createElement('li');
        li.className = 'todo-task';

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = text;
        taskTextSpan.className = 'task-text';

        const doneButton = document.createElement('button');
        doneButton.textContent = '✓';
        doneButton.className = 'done-btn';
        doneButton.onclick = () => 
        {
            taskTextSpan.classList.toggle('done');
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✕';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = () => 
        {
            todoList.removeChild(li);
        };

        li.appendChild(taskTextSpan);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        
        todoList.appendChild(li);
    }
});
