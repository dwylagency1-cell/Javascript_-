let num = [10, 20 , 30]
    console.log(num)
    num[2] = 99
    console.log(num)

getLastValue([1, 20, 33])
getLastValue(['hello', 'world'])
function getLastValue(array) {
    result =  array[array.length -1]
    console.log(result)
}
arraySwap([1, 2, 5])
function arraySwap(array) {
    let firstArray = array[0]
    let lastArray = array[array.length - 1]

    let temp = firstArray
    array[0] = array[array.length - 1]
    array[array.length - 1] = temp
    result = array
    console.log(result)
}
/*
for (i = 0; i <= 10; i = i + 2) {
    console.log(i)

}

for (let i = 5; i >= 0; i = i - 1) {
    console.log(i)
}
*/
/*
let i = 0;
while (i <= 10) {
    console.log(i)
    i = i + 2
}
    */

let i = 5

while (i >= 0) {
    console.log(i)
    i = i - 1

}

let array = [1, 2, 3];

for (let i = 0; i < array.length; i++) {
    array[i]
    array[i] = array[i]+ 1
}
console.log(array)

addOne([2, 3, 4])
function addOne(array) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] + 1

    }
    console.log(array)
}
addNum([2, 5, 6], 3)
function addNum(array, num) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] + num

    }
    console.log(array)

}
addArray([2, 3, 5], [2, 3, 4])
function addArray(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        array1[i] = array1[i] + array2[i]
    }
    console.log(array1)
}
countPositive([1, -4, -5])
function countPositive(nums) {
    let count = 0
    for (i = 0; i < nums.length; i++) {
        nums[i]

        if (nums[i] > 0) {
            count = count + 1
        }
    }
    console.log(count)
}
 minMax([2, 4, 6])
function minMax(nums) {
    let min = nums[0]
    let max = nums[0] 
    for (i = 0; i < nums.length; i++) {
        
        if (nums[i] < min) {
            min = nums[i]
        }
        else if (nums[i] > max) {
            max = nums[i]

        }

    }
    console.log(min, max)

}







