const inputField = document.querySelector('.inputField');
const addTaskButton = document.querySelector('.addTaskButton');
const list = document.querySelector('.list');
const finishedTasksList = document.querySelector('.finishedTasksList');
const listItem = document.querySelector('.listItem');
const emptyListBtn = document.querySelectorAll('.emptyListBtn');
const emptyListBtn1 = document.querySelector('.emptyListBtn1');
const emptyListBtn2 = document.querySelector('.emptyListBtn2');



emptyListBtn.forEach(el => el.style.display = 'none');

inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTaskButton.click();
    }
  });

addTaskButton.addEventListener('click', () => {
    if(inputField.value === '') {
        inputField.style.border = '2px solid red';
    } else {
        emptyListBtn1.style.display = 'inline-block';
        inputField.style.border = '1px solid black'
        list.insertAdjacentHTML(
        "afterbegin", 
        `<li class="listItem taskToDo">${inputField.value}</li>`
        );
        inputField.value = '';
    }
});

list.addEventListener('click', (e) => {
    finishedTasksList.insertAdjacentHTML('afterbegin', `<li class="listItem taskFinished">${e.target.innerHTML}</li>`);
    e.target.remove();
    if(list.textContent === '') {
        emptyListBtn1.style.display = 'none'; 
    } 
    emptyListBtn2.style.display = 'inline-block';
});

finishedTasksList.addEventListener('click', (e) => {
    e.target.remove();
    if(finishedTasksList.textContent === '') {
        emptyListBtn2.style.display = 'none';
    } 
});

emptyListBtn1.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.taskToDo');
    listItems.forEach(el => el.remove());
    emptyListBtn1.style.display = 'none';
});

const emptyList2 = () => {
    const listItems = document.querySelectorAll('.taskFinished');
    listItems.forEach(el => el.remove());
    emptyListBtn2.style.display = 'none';
}
emptyListBtn2.addEventListener('click', emptyList2);