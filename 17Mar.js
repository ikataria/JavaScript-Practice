/*************************** Server Configuration ******************************/
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// mongoose.connect("mongodb://localhost/dummyData", { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
//     // console.log('connection data :::::', connection)
//     if (err) {
//         console.log(`Can't connect to the database`, err)
//     } else {
//         console.log('----------Successfully connected to the database----------')
//     }
// })


/********************************* Exercise *************************************/

// 1.  Write a JavaScript program to display the current day and time in the following format.
// example :- Today is : Tuesday.
//            Current time is : 10 PM : 30 : 38

// let present = new Date();

// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let today = present.getDay()

// let hour = present.getHours() 
// let min = present.getMinutes()
// let sec = present.getSeconds()

// for(i = 0; i < days.length; i++){
//     if(today == i){
//         console.log('Today is :',days[i - 1])
//     }
// }

// if(hour > 12){
//     console.log(`Current time is :- ${hour} PM : ${min} : ${sec}`)

// }else{
//     console.log(`Current time is :- ${hour} AM : ${min} : ${sec}`)
// }


// 3. Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// let present = new Date();

// let dd = present.getDate()
// let mm = present.getMonth()
// let yyyy = present.getFullYear()


// console.log(`${dd}-${mm+1}-${yyyy}`)


// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// formula :- sqrt(s(s-a)(s-b)(s-c))
// cal s = (a + b + c)/2

let calculate = (a,b,c) => {
    let s = (a+b+c)/2
    let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)))
    console.log(area)
}
calculate(5,6,7)






/******************************** Server listening *******************************/
// app.listen(5521, () => console.log(`server Started on :- PORT ${5521}`))
app.listen(5521)