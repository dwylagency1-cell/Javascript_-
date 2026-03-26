let expense_list =JSON.parse(localStorage.getItem('expense')) || [{
    expense: 200,
    date: '2026-12-22'
},{
    expense: 300,
    date: '2026-12-22'

}]


render_expence()
totalExpense()
function render_expence() {
    let expenseHtml = '';
    for (i = 0; i < expense_list.length; i++) {
        console.log(expense_list[i]) 

        let HTML = `<p style = "font-family: arial">Expense: $${expense_list[i].expense},  Date: ${expense_list[i].date} <button class= "js_delete_css" onclick = "
        expense_list.splice(${i}, 1)
        localStorage.setItem('expense', JSON.stringify(expense_list))
        render_expence()">Delete</button></p>`

        expenseHtml = expenseHtml + HTML
    }
    console.log(expenseHtml)
    document.querySelector('.expense_div').innerHTML = expenseHtml;

}

function totalExpense() {
    let total = 0;
    for(i = 0; i< expense_list.length; i++) {
        total = total + expense_list[i].expense
        

    }
    document.querySelector('.sum_para').innerHTML = `Total expense: $${total}`
    console.log(total)
}



function add_expense_to_array() {
    expense_list.push({
        expense: Number(document.querySelector('.expense').value),
        date: `${document.querySelector('.expense_date').value}`
    })
    console.log(expense_list)

    document.querySelector('.expense').value = ''

    render_expence()
    totalExpense()

    localStorage.setItem('expense', JSON.stringify(expense_list))

}