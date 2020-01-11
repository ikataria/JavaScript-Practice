/********************************************** Server Configuration ********************************************************/
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect("mongodb://localhost/dummyData", { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
    // console.log('connection data :::::', connection)
    if (err) {
        console.log(`Can't connect to the database`, err)
    } else {
        console.log('----------Successfully connected to the database----------')
    }
})


/************************************************ Exercise ************************************************/

let dbHotel = require('./model/hotel')


// Question 1.Import the database on to your local mongoDB machine.
// mongoimport --db dummyData -c hotel --drop --file Downloads/primer-dataset.json





// Question 2.Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))






// Question 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))





// Question 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, 'address.zipcode': 1, _id: 0 })
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))





// Question 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx in descending order of the restaurant name alphabetically.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ borough: 'Bronx' }).sort({borough : -1})
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))






// Question 6. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ borough: 'Bronx' }).skip(5)
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))





// Question 7. Write a MongoDB query to find the restaurants that achieved a score of more than 80 but less than 100.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ 'grades.score': { $gt: 80, $lt: 100 } })
//         resolve(restaurants)
//             // let restaurants = await dbHotel.find({ grades: { $elemMatch: { "score": { $gt: 80, $lt: 100 } } } })
//             // resolve(restaurants)
//     })
// }


// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))






// Question 8.  Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order. 

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ cuisine: { $nin: ['American '] }, 'grades.grade': 'A', borough: { $nin: ['Brooklyn'] } }).sort('-cuisine')
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))







// Question 9.  Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ name: /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })
//         resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))








// Question 10. Write an aggregation query which finds the total no of restaurants serving cuisine ‘Italian’ and ‘Bakery’ in borough bronx.

// dbHotel.aggregate([{ $group: { _id: "cuisine", totalRestaurants: { $sum: 1 } } }])


// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.aggregate([
//             { $match: { cuisine: { $in: ["Bakery", "Italian"] } } },
//             { $group: { _id: "cuisine", totalRestaurants: { $sum: 1 } } }
//         ])
//         resolve(restaurants)
//             // let restaurants = await dbHotel.find({ grades: { $elemMatch: { "score": { $gt: 80, $lt: 100 } } } })
//             // resolve(restaurants)
//     })
// }

// display().then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))




// Question 11.  Write a query to provide all distinct types of cuisine in borough Brooklyn. 

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.aggregate([
//             { $match: { borough: "Brooklyn" } },
//             { $group: { _id: "$cuisine", total: { $sum: 1 } } }
//         ])
//         resolve(restaurants)
//             // let uniqueCuisine = restaurants.filter((cuisineType, index, self) => self.indexOf(cuisineType) === index)
//             // resolve(uniqueCuisine)
//     })
// }

// display()
//     .then(data => console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })









// Question 12. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52.


// { $gt: 42, $lte: 52 }

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ 'address.coord.1': { $gt: 42, $lte: 52 } }, { "restaurant_id": 1, "name": 1, "address": 1 }).limit(100)
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })







// Question 13. Write a query to show number of restaurant according to each borough.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.aggregate([
//             { $group: { _id: "$borough", totalRestaurants: { $sum: 1 } } },
//         ])

//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })







// Question 14. Write a Query to show total types of cuisine with their actual counts.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.aggregate([
//             { $group: { _id: "$cuisine", count: { $sum: 1 } } }
//         ])
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })








// Question 15. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ name: /.*mon.* / }, { "name": 1, "borough": 1, "address.coord": 1, cuisine: 1 }).limit(100)
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })






// Question 16. Write a MongoDB query to know whether all the addresses contains the street or not.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ 'address.street': { $exits: true } }).limit(100)
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })






// Question 17. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.find({ cuisine: { $nin: ['American', 'Chinees'] }, name: /^Wil/ }, { _id: 0, "name": 1, "borough": 1, cuisine: 1, restaurant_id: 1 }).limit(100)
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })







// Question 18.  Write a query to replace a document which has restaurant id “41704620”.Change all the details except restaurant id without using set and push.

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.update({ restaurant_id: "41704620" }, {
//             address: {
//                 building: "417-JMD_Megapolis",
//                 coord: [-77.777, 77.3314],
//                 street: "Sohna_Road",
//                 zipcode: "122018"
//             },
//             borough: "Gurgaon",
//             cuisine: "chicken_65",
//             grades: [{ date: new Date(), grade: 'A', score: 99.99 }, { date: new Date(), grade: 'A', score: 100 }],
//             name: "zaika",
//             restaurant_id: "41704620"
//         })
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data =>
//         // data.address.coord[1],
//         console.log('---------restaurants-------', data, '---------restaurants-------'))
//     .catch(err => {
//         console.log(err)
//     })






// Question 19. Write a query to increase score of every grades by 2 of all restaurants.

/***wrong */

// let display = () => {
//     return new Promise(async(resolve, reject) => {
//         let restaurants = await dbHotel.aggregate([{
//             $group: {
//                 _id: "$grades.score",
//                 score: { $push: "$" }
//             }
//         }])
//         resolve(restaurants)
//     })
// }

// display()
//     .then(data => {
//         console.log('---------restaurants--------', data, '--------restaurants-------')
//     })
//     .catch(err => {
//         console.log(err)
//     })




/************************************** Server listening *************************/
app.listen(9777, () => console.log(`server Started on PORT ${9777}`))