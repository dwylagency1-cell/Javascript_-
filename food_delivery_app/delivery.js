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
                    <button class="add_to_cart_button">Add to cart</button>
                </div>
               
            </div>
        </div>`

});
console.log(foodHTML)
document.querySelector('.js-cards').innerHTML = foodHTML;