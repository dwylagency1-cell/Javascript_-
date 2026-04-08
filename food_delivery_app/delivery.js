let foodHTML = '';

foods.forEach(function(items) {
    foodHTML = foodHTML + `
    <div class="card_container">
            <div style="
            width: 250px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;">
                <img style= "width: 250px;
                height: 200px;
                border-radius: 20px 20px 0 0;" src="${items.image}">
            </div>
            <div style="
            
            border-radius: 0 0 20px 20px;
            width: 250px;
            height: 200px;
            position:relative;
            bottom: 15px;">
                <div style="
                
                width: 250px;
                height: 90px;
                position: relative;
                bottom: 20px;">
                    <p style="
                    font-family: arial;
                    position: relative;
                    top: 20px;
                    margin-left: 10px;
                    font-size: 19px;">${items.name}</p>
                    <p style="
                    font-family: arial;
                    position: relative;
                    top: 17px;
                    margin-left: 10px;
                    font-weight: bolder;
                    font-size: 19px;">$${items.price / 100}</p>
                </div>
                <div style="
                
                width: 250px;
                height: 50px;
                position: relative;
                bottom: 20px;
                display: flex;
                justify-content: left;
                align-items: center;">
                    <img style="position: relative;
                    right: 10px;" width="200px" src="image/stars.png">
                </div>

                <div style="
                width: 250px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;">
                    <button class="add_to_cart_button js-add-to-cart-button" data-product-id = ${items.id}>Add to cart</button>
                </div>
               
            </div>
        </div>`

});
console.log(foodHTML)
document.querySelector('.js-cards').innerHTML = foodHTML;

document.querySelectorAll('.js-add-to-cart-button').forEach(function(button) {
    
    button.addEventListener('click', function() {
        
        const productId = button.dataset.productId
        
        
        let matchingItem;
        cart.forEach(function(item) {
            
            if (productId === item.productId) {
                matchingItem = item

            };
        });
        if (matchingItem) {
            matchingItem.quantity = matchingItem.quantity + 1

        }
        else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        };

        let foodQuantity = 0
        cart.forEach(function(item) {
            foodQuantity = foodQuantity + item.quantity
            document.querySelector('.js-quantity').innerHTML = foodQuantity

        });
        console.log(cart)
        
    });

});