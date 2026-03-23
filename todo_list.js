const todoList = []

function add_input() {
    todoList.push(document.querySelector('.add_todos').value)
    console.log(todoList)
    document.querySelector('.add_todos').value = ""
}