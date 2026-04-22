re_render()
function re_render() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCartHTML = '';
    cart.forEach(function(items ) {
        let matchingItem
        const productId = items.productId

        foods.forEach(function(food) {
            if (food.id === productId) {
                matchingItem = food
            }
        });

        
        itemCartHTML = itemCartHTML + `
        <div class="cart_div">
            <div class="img_div">
                <img style="border-radius: 20px;" width="200px" src="${matchingItem.image}">
            </div>
            <div class="summary_div">
                <div class="item_name">
                    <p style="font-family: arial;
                    font-size: 20px;
                    font-weight: bolder;
                    width: 250px;">${matchingItem.name}</p>
                </div>
                <div class="cost_div">
                    <p style="font-family: arial;
                    font-weight: bolder;
                    font-size: 19px;
                    color: rgb(177, 39, 4);">Cost: $${matchingItem.price / 100}</p>
                </div>
                <div class="quantity_div">
                    <p style="font-family: arial;
                    font-size: 19px;">Quantity: ${items.quantity}</p>
                </div>
                <div class="operate">
                    <button class="delete_button js-delete-button" data-index = ${items.index}>Delete </button>
                </div>
            </div>
        </div>`
    });
    document.querySelector('.js-summary_grid').innerHTML = itemCartHTML
    document.querySelectorAll('.js-delete-button').forEach(function(button) {
        

        button.addEventListener('click', function() {
            const index = button.dataset.index
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            re_render();


        });

    })
    
}

