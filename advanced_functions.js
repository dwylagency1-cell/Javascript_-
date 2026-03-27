function greeting() {
    console.log('Hello')
}
greeting()

const num = 2;
const function1 = function greeting() {
    console.log('Hello_2');
};
console.log(function1)
console.log(typeof function1);
function1();

const object_1 = {
    num: 2,
    fun: function greeting() {
        console.log('hello_3')
    }
};
console.log(object_1.fun)
object_1.fun();

function display(param) {
    console.log(param)

}
display(2)

function run(param) {
    param()

}
run(function greeting() {
    console.log('Hello_4')
})

setTimeout(function time() {
    console.log('timeout');
}, 3000)
/*
setInterval(function interval() {
    console.log('interval');
}, 3000);
*/
console.log('next line');


    [ // <---------- this bracket
        'wash dishes',
        'watch youtube',
        'got to gym'
    ].forEach(function(value) {
        if (value === 'wash dishes') {
            return;

        }
        console.log(value)

    });   
    
    
    





