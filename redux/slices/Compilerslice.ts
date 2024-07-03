// import { javascript } from "@codemirror/lang-javascript";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType{
  fullcode:{
    html:string,
    css:string,
    javascript:string,

  }
    currentLanguage:"html" | "css" | "javascript",
     
  }
  const initialState:CompilerSliceStateType ={
    fullcode:{
      html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button id="addTaskButton">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
`,
      css:`body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    text-align: center;
}

input[type="text"] {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
}

li {
    background-color: #f4f4f4;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li span {
    flex-grow: 1;
}

li button {
    background-color: #dc3545;
    border: none;
    color: white;
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
}

li button:hover {
    background-color: #c82333;
}
`,
      javascript:`document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = '';
    }

    function removeTask(e) {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});
`,

    },
    currentLanguage:"html",
    
  }

const Compilerslice=createSlice({
    name:"Compilerslice",
    initialState,
    reducers:{
        updateCurrentLanguage:(state,action:PayloadAction<CompilerSliceStateType["currentLanguage"]>)=>{
           state.currentLanguage=action.payload
        },
       updateCodeValue:(state,action:PayloadAction<{language: CompilerSliceStateType["currentLanguage"],code:string}>)=>{
            const{code,language}=action.payload;
        state.fullcode[language]=code
       },
         
    },
})

export default Compilerslice.reducer;
export const {updateCurrentLanguage, updateCodeValue}=Compilerslice.actions;