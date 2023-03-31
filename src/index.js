import addTask, { removeTask } from './modules/addAndRemove.js';
import './index.css';
import DeleteAll from './modules/markCompletion.js';

// Creating Rendering class
const displayContainer = document.getElementById('addtodotasks');
const input = document.querySelector('.user-imput');
const tasksList = JSON.parse(localStorage.getItem('list')) || [];
const DisplayTask = () => {
  tasksList.forEach((list, index) => {
    displayContainer.innerHTML += `
      <li class="li-list" >
        <input class="li-check" id="trfa" type="checkbox" ${list.completed ? 'checked' : ''} data-id="${index}" data-com="${list.completed}">
        <p contenteditable="true" class="paragraph" data-para="${index}">
          ${list.description}
        </p>
        <i class="fa-regular fa-trash-can" data-index="${index}"></i>
        <i class="li-list fa-solid fa-ellipsis-vertical"></i>
      </li>
      `;// eslint-disable-line no-return-assign
  });
};

// Task add function
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
    window.location.reload();
  }
});

// Creating the list of Task from the Display
const listItemsContainer = document.querySelector('#addtodotasks');
const liLists = document.getElementsByClassName('li-list');
listItemsContainer.addEventListener('click', (e) => {
  for (let i = 0; i < liLists.length; i += 1) {
    liLists[i].classList.remove('active');
  }
  if (e.target.classList.contains('li-list')) {
    e.target.classList.toggle('active');
  } else if (e.target.classList.contains('paragraph')) {
    e.target.parentElement.classList.toggle('active');
  }
});

// Remove task function
listItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    const index = e.target.getAttribute('data-index');
    removeTask(index);
    window.location.reload();
  }
});

// Consturtion to show updated list
const update = () => {
  for (let i = 0; i < tasksList.length; i += 1) {
    tasksList[i].index = i + 1;
  }
  localStorage.setItem('list', JSON.stringify(tasksList));
  DisplayTask();
};

// Updating the list
update();
listItemsContainer.addEventListener('keypress', (e) => {
  if (e.target.classList.contains('paragraph')) {
    if (e.key === 'Enter') {
      if (e.target.textContent === '') {
        return false;
      }
      const num = e.target.getAttribute('data-para');
      tasksList[num].description = e.target.textContent;
    }
  }
  return localStorage.setItem('list', JSON.stringify(tasksList));
});

const tickmarked = document.querySelectorAll('.li-check');
tickmarked.forEach((list) => {
  list.addEventListener('change', (e) => {
    if (e.currentTarget.checked === true) {
      list.nextElementSibling.classList.add('overlined');
      const idnx = e.currentTarget.getAttribute('data-id');
      tasksList[idnx].completed = true;
    } else {
      list.nextElementSibling.classList.remove('overlined');
      const idnx = e.currentTarget.getAttribute('data-id');
      tasksList[idnx].completed = false;
    }
    localStorage.setItem('list', JSON.stringify(tasksList));
    window.location.reload();
  });
});

const deleteBtn = document.getElementById('clear-btn');
deleteBtn.addEventListener('click', DeleteAll);