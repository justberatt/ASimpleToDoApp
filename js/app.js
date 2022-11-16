const inputField = document.querySelector('.inputField');
const addTaskButton = document.querySelector('.addTaskButton');
const list = document.querySelector('.list');
const finishedTasksList = document.querySelector('.finishedTasksList');
const listItem = list.children;
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

  const attachRemoveButton = (li) => {
    const remove = document.createElement('button');
        remove.className = 'remove';
        remove.textContent = 'Remove';
        li.appendChild(remove);
  }

  const addTask = () => {
    if(inputField.value === '') {
        inputField.style.border = '2px solid red';
    } else {
        emptyListBtn1.style.display = 'inline-block';
        inputField.style.border = '1px solid black';
        
        let li = document.createElement('li');
        li.className = 'listItem taskToFinish';
        li.textContent = inputField.value;
        list.appendChild(li);
        // list.insertAdjacentHTML(
        // "afterbegin", 
        // `<li class="listItem taskToDo">${inputField.value}</li>`
        // );
        attachRemoveButton(li);
        inputField.value = '';
    }
  }

list.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentNode.remove(); 
        finishedTasksList.insertAdjacentHTML('afterbegin', `<li class="listItem taskFinished">${e.target.parentNode.innerHTML}</li>`); 
        if(list.textContent === '') {
            emptyListBtn1.style.display = 'none'; 
        } 
        emptyListBtn2.style.display = 'inline-block';
    } else {
        finishedTasksList.insertAdjacentHTML('afterbegin', `<li class="listItem taskFinished">${e.target.innerHTML}</li>`);
        e.target.remove();
        if(list.textContent === '') {
            emptyListBtn1.style.display = 'none'; 
        } 
        emptyListBtn2.style.display = 'inline-block';
    }
});

finishedTasksList.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        e.target.parentNode.remove();
        if(finishedTasksList.textContent === '') {
            emptyListBtn2.style.display = 'none'; 
        } 
    } else {
        e.target.remove();
        if(finishedTasksList.textContent === '') {
            emptyListBtn2.style.display = 'none';
        } 
    }
})



const emptyList1 = () => {
    const listItems = document.querySelectorAll('.taskToFinish');
    listItems.forEach(el => el.remove());
    emptyListBtn1.style.display = 'none';
}

const emptyList2 = () => {
    const listItems = document.querySelectorAll('.taskFinished');
    listItems.forEach(el => el.remove());
    emptyListBtn2.style.display = 'none';
}


addTaskButton.addEventListener('click', addTask);
emptyListBtn1.addEventListener('click', emptyList1);
emptyListBtn2.addEventListener('click', emptyList2);