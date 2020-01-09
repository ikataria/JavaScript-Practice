// Question 1. Write a function to find the maximum and minimum number form an array without using inbuilt functions.

// let arr = [10, 4, 50, 510, 21, 621, -1, 4851, 54, 445, 548, 844]

// function find(search) {
//     let temp = 1;

//     for (let i = 0; i < arr.length; i++) {
//         if (search.toLowerCase() === 'max') {

//             if (temp < arr[i])
//                 temp = arr[i]

//         } else {
//             if (temp > arr[i])
//                 temp = arr[i]
//         }

//     }
//     return temp
// }
// console.log('^^^^^^^^^^^^>', find('max'))





// Question 2. Write a JavaScript function to round a number to a given decimal places.

// console.log(round(12.7456, 2))

// function round(num, decimal) {
//     return num.toFixed(decimal)
// }





// Question 3. Get the product of all elements in an array by using higher order functions.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let temp = arr.reduce((a, b) => a * b)
// console.log(temp)




// Question 4. Write a program to print elements of an array with and without using higher order functions.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*********without higher order function ************/
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
/*********with higher order function ************/
// arr.forEach(a => console.log(a))




// Question 5. Write a simple JavaScript program to join all elements of the following array into a string. (Use with and without higher order functions)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let temp = ''
/********* without higher order function ************/
// for (let i = 0; i < arr.length; i++) {
//     temp += arr[i]
// }
// console.log(temp)
/********* with higher order function ************/
// console.log(arr.join(temp))





// Question 6.  Write a function to write a text in camel case.

// let sample = 'Write a function to write a text in camel case'
//     // let a = sample.splice(0, 1)
//     //     // .slice(0, 1)
//     // console.log(a)

// console.log(camelize(sample))

// function camelize(text) {
//     let arr = text.split(' ')

//     let final = arr[0].toLowerCase()

//     for (let i = 1; i < arr.length; i++) {
//         // console.log(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//         final += arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

//     }
//     return final
// }




// Question 7. Write a JavaScript program to sort the items of an array.
// let arr = [54, 48, 35, 1, -37, 91, 798]
// console.log(arr.sort((a, b) => a - b))





// Question 8. Write a JavaScript function to retrieve falsy and truthy values from all elements in an array.
// let arr = [true, 0, 1, false, 05, null, 1993, ""]

// console.log(search())

// function search() {
//     // if(type.toLowerCase() === 'truthy')
//     let final = {
//         truthy: [],
//         falsy: []
//     }

//     for (let value of arr) {
//         if (value) final.truthy.push(value)
//         else final.falsy.push(value)
//     }
//     return final
// }





// Question 9. Write a program to print fibonacci series by using higher order functions.
// let first = 0,
//     second = 1,
//     temp = 0

// for (let i = 0; i < 10; i++) {
//     first += second
//     console.log(first)
//     temp = first
//     first = second
//     second = temp

// }




// Question 10. Write all above questions in ES6 Syntax and ES5 Syntax.
// Maximum Possible answer are written in ES6