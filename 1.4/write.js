const fs = require('fs');
let fsReader = fs.createReadStream('text.txt', {highWaterMark: 800})

let data = []

fsReader.on('data', (chunk)=> {
    data.push(chunk)
    console.log(fsReader.bytesRead)
})
fsReader.on('end', ()=>{
    console.log('antal tecken:' + fsReader.bytesRead)
    console.log(data.length)
})
//********************** exercise 1.4**********************************
// fsReader takes the fs module and uses createReadStream on the text, when the code runs the fsReader runs it pushes chunks of data to the array.
/* the printed values are: 
    800
    1600
    2400
    2407
    antal tecken:2407
    4
*/