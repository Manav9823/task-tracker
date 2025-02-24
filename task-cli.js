#!/usr/bin/env node

const fs = require('fs');
const path = require('path')

console.log('current directory', __dirname);

const TASK_FILE = path.join(__dirname, 'task.json');

if(!fs.existsSync(TASK_FILE)) {
    fs.writeFileSync(TASK_FILE, JSON.stringify([]));
}

const args = process.argv.slice(2);
const command = args[0];

function loadTasks(){
    const data = fs.readFileSync(TASK_FILE, 'utf-8');
    return JSON.parse(data);
}

const saveTasks = (tasks) => {
    fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
};

function addTask(description) {
    if(!description) {
        console.log('Please provide a description for the task');
        return;
    }
    const tasksLoaded = loadTasks();
    console.log(tasksLoaded)
    const newTask = {
        id: tasksLoaded.length > 0 ? tasksLoaded[tasksLoaded.length - 1].id + 1: 1,
        description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    tasksLoaded.push(newTask);
    console.log('tasksLoaded', tasksLoaded)
    saveTasks(tasksLoaded);
    console.log('Task added successfully for you with id: ', newTask.id);
}   

const updateTask = (id, newDescription) => {
    const tasks = loadTasks();
    console.log('tasks', tasks)
    const taskToBeUpdated = tasks.find((task) => task.id === id);
    if (!taskToBeUpdated) {
        console.log("Error: Task not found.");
        return;
    }
    taskToBeUpdated.description = newDescription;
    taskToBeUpdated.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log('Task updated successfully');
}

const deleteTask = (id) => {
    const tasks = loadTasks();
    const taskToBeDeleted = tasks.filter(task => task.id !== id);
    saveTasks(taskToBeDeleted);
    console.log('Task deleted successfully')
}

function updateStatus(id, status) {
    const tasks = loadTasks();
    console.log(tasks)
    const task = tasks.find(t => t.id === id);

    if (!task) {
        console.log("Error: Task not found.");
        return;
    }

    task.status = status;
    task.updatedAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`Task ${id} marked as '${status}'.`);
}


function listTasks(filter) {
    const tasks = loadTasks();

    let filteredTasks = tasks;
    if (filter) {
        filteredTasks = tasks.filter(t => t.status === filter);
    }

    if (filteredTasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    console.log("Tasks:");
    filteredTasks.forEach(t => {
        console.log(`[${t.id}] ${t.description} - ${t.status} (Updated: ${t.updatedAt})`);
    });
}

switch (command) {
    case 'add':
        addTask(args.slice(1).join(' '));
        break;
    case 'update':
        updateTask(parseInt(args[1]), args.slice(2).join(' '));
        break;
    case 'delete':
        deleteTask(parseInt(args[1]));
        break;
    case 'mark-in-progress':
        updateStatus(parseInt(args[1]), 'in-progress');
        break;
    case 'mark-done':
        updateStatus(parseInt(args[1]), 'done');
        break;
    case 'list':
        listTasks(args[1]);
        break;
    default:
        console.log('Invalid command. Use: add, update, delete, mark-in-progress, mark-done, list');
}