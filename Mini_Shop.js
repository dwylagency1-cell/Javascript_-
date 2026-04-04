
function display() {
let productHTML = '';
products.forEach(function(value) {

    productHTML = productHTML + `
    <p>Product: ${value.name}</p>
    <p>Price: ${value.price}</p>
    <p>Orders: ${value.orders}</p>
    <button class= "Add_to_cart_button" data-product-name = "${value.name}" data-product-price = "${value.price}">Add to Cart</button>`
});
console.log(productHTML);
document.querySelector('.product_div').innerHTML = productHTML
}
display()

document.querySelectorAll('.Add_to_cart_button').forEach(function(button) {

    button.addEventListener('click', function() {
        const productName = button.dataset.productName
        const productPrice = button.dataset.productPrice

        let matchingItem;

        cart.forEach(function(items) {

            if(productName === items.product) {
                matchingItem = items
            }

        });
        if (matchingItem) {
            matchingItem.quantity += 1
        }
        else{
            cart.push({
                product: productName,
                quantity: 1,
                productPrice: productPrice
            });
        }

        console.log(cart);

        let addedItemHTML = '';

        cart.forEach(function(itemName) {
            addedItemHTML = addedItemHTML + `
            <p>Product: ${itemName.product}</p>
            <p>Quantity: ${itemName.quantity}</p>
            <p>Price: $${itemName.productPrice}</p>`
        });
        document.querySelector('.addedItem_div').innerHTML = addedItemHTML
    });
});














