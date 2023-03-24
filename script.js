const input = document.querySelector('input');
const btn = document.querySelector('.enter > button');

btn.addEventListener('click', enterTask);

input.addEventListener('keyup', (e)=> {
    (e.keyCode === 13 ? enterTask(e) : null);
})

function enterTask(e) {

    const pending = document.querySelector('.pending');
    const completed = document.querySelector('.completed');

    const newTask = document.createElement('li');
    const delTask = document.createElement('button');
    const checkTask = document.createElement('button');

    delTask.innerHTML = '<i class="fa fa-trash btn2"></i>';
    checkTask.innerHTML = '<i class="fa fa-check btn1"></i>';

    if(input.value !=='') {
        newTask.textContent = input.value;
        input.value = '';
        pending.appendChild(newTask);
        newTask.appendChild(delTask);
        newTask.appendChild(checkTask);
    }

    
    delTask.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });

    checkTask.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkTask.style.display = 'none';
    });
}