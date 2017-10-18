let fs =require('fs');

fs.writeFile('text.txt','My name is error and you cant stop me!', (err) => {
    if(err) throw err;
    console.log("the file has been saved!")
});
//********************** exercise 1.3*************************************
// uses the fs module and writeFile, writeFile takes three parameters the file to be created, 
// the text of the file and an error, when file runs the file is created.