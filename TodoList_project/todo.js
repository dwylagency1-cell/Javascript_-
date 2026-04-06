const todoList = [];


const button_element = document.querySelector('.eventListen')
button_element.addEventListener('click', function() {
    const todoInput = document.querySelector('.input_text').value;

    if (todoInput !== '') {   // ✅ only add if not empty
    todoList.push(todoInput);
    }
    console.log(todoList);
    document.querySelector('.input_text').value = '';

    let todoHTML = '';
    todoList.forEach(function(value, index) {
        todoHTML = todoHTML + `<p style="color: white; font-family: arial;">${value} <input class= "check" type= "checkbox" data-index = ${index}></p>`
    })
    console.log(todoHTML)
    document.querySelector('.display_todo').innerHTML = todoHTML

    document.querySelectorAll('.check').forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            const index = checkbox.dataset.index
            todoList.splice(index, 1)
            document.querySelector('.eventListen').click()
        });
    });
});








