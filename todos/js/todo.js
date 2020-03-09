// Capture the form

var myForm = document.getElementById( 'table-form' );

addButton.onclick=addTask;
addButton.addEventListener('click', addTask);

// New task submition

myForm.addEventListener('submit', function(event){
    event.preventDefault();

//
var taskInput=document.getElementById('new-task');
var addButton=document.getElementById('button');
var incompleteTaskHolder=document.getElementById('incomplete-tasks');
var completedTaskHolder=document.getElementById('completed-tasks');

// Create new element

var listItem=document.createElement('li');

var checkBox=document.createElement('input');
var label=document.createElement('label');

var taskValue=taskInput.value;
label.textContent=taskValue;
checkBox.type='checkbox';

// Active To-dos

var activeToDos=document.getElementById('incomplete-task');
    activeToDos.appendChild(listItem);

// Appending

listItem.appendChild(checkbox);
listItem.appendChild(label);

});


