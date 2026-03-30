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
/*
setTimeout(function time() {
    console.log('timeout');
}, 3000)
*/
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
    
    
const add = function() {
    console.log(2 + 3)
};

function runTwice(fun) {
    fun()
    fun()
}
runTwice(function() {
    console.log('12b')
})
runTwice(add)

function change() {
    document.querySelector('.start_button').innerHTML = 'Loading..'
    setTimeout(function() {
        document.querySelector('.start_button').innerHTML = 'Finished!'
    }, 2000)
    setTimeout(function() {
        if (document.querySelector('.start_button').innerHTML === 'Finished!') {
            document.querySelector('.start_button').innerHTML = 'start'
        }
    }, 5000)
}

function addToCart() {
    document.querySelector('.add_Tocart_para').innerHTML = 'Item added !'
    setTimeout(function() {
        document.querySelector('.add_Tocart_para').innerHTML = ''
    }, 2000)
}
/*
interval()
function interval() {
    setInterval(function() {
        if (document.title === 'App') {
            document.title = '(2) New Message';

        }
        else if (document.title === '(2) New Message') {
            document.title = 'App';
        }
    }, 1000)
}
*/
let i = 0
function change_title() {
    intervalId = setInterval(function() {
            if (document.title === 'App') {
                document.title = `(${i}) New Message`

            }
            else if(document.title === `(${i}) New Message`) {
                document.title = 'App'
                
            }
        }, 1000)

};

change_title();

function add_Num_to_title() {
    document.title = `(${i = i + 1}) New Message`

};
function remove_Num_to_title() {
    if (i < 0) {
        document.title = 'App'
        clearInterval(intervalId)
        

    }
    else if (i > 0){
        document.title = `(${i = i - 1}) New Message`

    }
    
};
const buttonElement = document.querySelector(".click_button");

const function_variable = function() {
    console.log('click');
}

buttonElement.addEventListener('click', function_variable);

buttonElement.removeEventListener('click', function_variable)

buttonElement.addEventListener('click', function_variable);


const like_like = document.querySelector('.like');

like_like.addEventListener('click', function() {
    if (document.querySelector('.like').innerHTML === 'Liked ❤️') {
        document.querySelector('.like').innerHTML = 'Like👍'

    }
    else{
        document.querySelector('.like').innerHTML = 'Liked ❤️';
    }
})

const submitElement = document.querySelector('.submit_button');



const submit_function = function() {
    if (submitElement.innerHTML === 'Submit') {
        submitElement.innerHTML = 'Document submitted'

    }
    else if (submitElement.innerHTML === 'Document submitted') {
        
        document.querySelector('.no_more_submit').innerHTML = 'You have already submitted your documents !'
        submitElement.removeEventListener('cilck', submit_function) 
        if (document.querySelector('.no_more_submit').innerHTML === 'You have already submitted your documents !') {
            setTimeout(function() {
                document.querySelector('.no_more_submit').innerHTML = ''
            }, 2000);

        }
    }
    
}

submitElement.addEventListener('click', submit_function);

console.log([1, -3, 5].filter(function(value, index) {
    if (value >= 0) {
        return true;
    }
    else{
        return false;
    }
    
}));

console.log([1, 1, 3].map(function(value, index) {
    return value * 2

}));

function multiply(num, num2) {
    console.log(num * num2)

}
multiply(2, 5);
total = 0;
console.log([1, -3, 7, 5].forEach(function countpositive(nums) {
    console.log(nums)
    if (nums >= 0) {
        total = total + 1

    }
}));
console.log(total);

function addNum(array, num) {
    console.log(array.map(function(value) {
        return value + num
    }));
};
addNum([1, 3, 5], 4)

function removeEgg(foods) {
    console.log(foods.filter(function(value) {
        if (value === 'egg') {
            return false

        }
        else{
            return true
        }

    }));

};
removeEgg(['egg', 'apple', 'egg', 'banana'])
eggCount = 0
function remove_twoEgg(foods) {
    console.log(foods.filter(function(value) {
        if (value === 'egg') {
            eggCount = eggCount + 1
            if (eggCount <= 2) {
                return false
            }

        }
        return true;
        

    }))

};
remove_twoEgg(['egg', 'apple', 'egg', 'banana', 'egg', 'egg'])


greeting = function() {
    console.log('Hello , Bro!')
}
function runTwice(fun) {
    fun()
    fun()
}
runTwice(function() {
    console.log('Hello , Bro!')
})
greeting()


/*
i = 0
function countTill_5() {
    const intervalId = setInterval(function() {
        console.log(i = i + 1);
        if (i >= 5) {
            clearInterval(intervalId)

        }

    }, 1000)
    
}
countTill_5()
*/

console.log(['apple', 'banana', 'mango'].forEach(function(value) {
    console.log(`Fruit: ${value}`)

}));

console.log([2, 5, 8, 9, 10].filter(function(value) {
    if(value % 2 === 0) {
        return true;

    }
    return false;
}));
count = 0
function increase_count() {
    increase_button = document.querySelector('.increase')
    increase_para = document.querySelector('.increase-para')
    increase_button.addEventListener('click', function() {
        count = count + 1
        increase_para.innerHTML = count
    })

}
increase_count();

function running() {
    start = document.querySelector('.Start_running');
    stops = document.querySelector('.Stop_running');
    let clearIntervalID;
    start.addEventListener('click', function() {
    clearIntervalID = setInterval(function() {
            console.log('Running...')
        }, 1000);
    });

    stops.addEventListener('click', function() {
            clearInterval(clearIntervalID);
        });

};

running();

console.log([2, -3, 5, -1, 0].filter(function(value) {
    if (value < 0) {
        return false
    }
    else{
        return true
    }
}));
indexs = 0;
console.log(['apple', 'banana', 'kiwi', 'watermelon'].forEach(function(value) {
    
    if (value.length > 5) {
        console.log(value)
    }
}) );

console.log([6, 4, 5].forEach(function(value) {
    console.log(value * 2)

}));

console.log(['John', 'Alex', 'Sam'].map(function(value) {
    console.log(`Mr. ${value}`)
}));



















