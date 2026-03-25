const todoList = [{
    name : 'make dinner',
    date: '2026-12-22'
    
}, {
    name: 'wash dishes',
    date: '2026-12-22'
} ]

render_todoList();
function render_todoList() {
    let todoHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        
        const name = todoList[i].name
        const date = todoList[i].date
        const html = `<p>                            
        ${name} ${date}
        <button onclick= "
        todoList.splice(${i}, 1);
        render_todoList()
        ">Delete</button></p>`
        todoHTML = todoHTML + html
    }
    console.log(todoHTML)
    document.querySelector('.js_div').innerHTML = todoHTML;
}

function add_input() {
    todoList.push({
        name: `${document.querySelector('.add_todos').value}`,
        date: `${document.querySelector('.date_time').value}`
    });
    console.log(todoList)
    document.querySelector('.add_todos').value = ""

    render_todoList();

}