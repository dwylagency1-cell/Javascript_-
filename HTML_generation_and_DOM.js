const fruits = ['Apple', 'Banana', 'Mango']
let fruitsHTML = ''
fruits.forEach(function(value) {
fruitsHTML = fruitsHTML + `<p>${value}</p>`

});
console.log(fruitsHTML)
document.querySelector('.fruits_div').innerHTML = fruitsHTML

const products = [{
    name: "iphone",
    price: 50000
},{
    name: "Laptop",
    price: 80000
}];
let productsHTML = '';
products.forEach(function(value) {

    productsHTML = productsHTML + `
    <p>product: ${value.name}, 
    price: $${value.price}`

});
console.log(productsHTML)
document.querySelector('.product_div').innerHTML = productsHTML;



const image_name = [
    {
        image: "scissors-emoji.png",
        name: "scissor"
    },
    {
        image: "papericon.png",
        name: "paper"
    },
    {
        image: "rock.png",
        name: "rock"
    }
]
let img_name = '';
image_name.forEach(function(value) {

    img_name = img_name + `
    <img style = "width: 100px" src= "${value.image}">
    <p style = "font-family: arial">${value.name}</p>`

});
console.log(img_name);
document.querySelector('.img_div').innerHTML = img_name;



const animals = ["dog", "cat", "cow"];
Animal()
function Animal() {
    let animalsHTML = '';
    animals.forEach(function(value, index) {
        animalsHTML = animalsHTML + `<p>${value} 

        <button onclick= 
        "remove(${index})">Delete</button>
        </p> `
    });


    console.log(animalsHTML)
    document.querySelector('.animals_div').innerHTML = animalsHTML;
};

function remove(index) {
    animals.splice(index, 1)
    Animal() 
    };

add_item()
function add_item() {
    let addHTML = '';
    add_button = document.querySelector('.add_to_cart_button');

    add_button.addEventListener('click', function() {

        addHTML = addHTML + '<p>Item Added !</p>';

        document.querySelector('.add_div').innerHTML = addHTML;
    });
    console.log(addHTML)
   
};

const items = [ {
    name: "Cream",
    price: 50
},
{
    name: "body wash",
    price: 100
},
{
    name: "shampoo",
    price: 150
}
    
];










