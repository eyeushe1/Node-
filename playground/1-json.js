const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Yrab Holiday'

// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//LOAD AND PARSE THE JSON DATA
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)


//CHANGE THE NAME AND AGE PROPERTY USING YOUR INFO

user.name = 'Gunther'
user.age = 54

//STRINGIFY THE CHANGED OBJECT AND OVERWRITE THE ORIGINAL DATA
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

//TEST YOUR WORK BY VIEWING DATA IN THE JSON FILE
