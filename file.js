const fs = require("fs");

const quote ="No beauty shines brighter than that of a good heart !!!!😀😀😀";

// fs.writeFile("./awesome.csv", quote, (err) => {
//      console.log("Completed writing awesome.html")
// })


//Task 1
// create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// text-4.html
// ........
// text-10.html

// const quote2 = "Live more, worry less 😀😀😀😀";

// for (let i = 1; i <= 10; i++) {    
// fs.writeFileSync(`./backup/hey-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing hey-${i}.html`)
// })
// }

// task - 2
// node file.js 20 -> In command line - 20 files to be created / text-1.html... text-20.html

// const [, , noOfFiles] = process.argv;
// console.log(noOfFiles);

// const quote3 =  "Happy Day";

// for (let i = 1; i <= noOfFiles; i++) {    
// fs.writeFileSync(`./backup/text-${i}.html`, quote3, (err) => {
//     console.log(`Completed writing text-${i}.txt`)
// })
// }

//Read file

// fs.readFile("./awesome.html", "utf-8", (err, data) =>  {
//         if(err) {
//             console.log("Error ❌",err);
//         }
//         console.log("The content of the file is :", data);
// });

// const niceQuote = "\nMake everyday a little less ordinarily😀";


// fs.appendFileSync("./nice.txt", niceQuote, (err) => {
//      console.log("Completed writing nice.txt")
// })

// fs.unlink("./toDelete.txt",(err) => {
//     console.log("Deleted Successfully")
// })

// fs.readdir("./backup", (err, files) => {
//     console.log("All file names", files);
// })

// fs.unlink("./backup/text-1.txt",(err) => {
//     console.log("Deleted Successfully")
// })



//Delete all files in backup folder

// fs.readdir("./backup", (err, data) => {

//     data.forEach(fileName => {
//         fs.unlink(`./backup/${fileName}`,(err) => {
//             console.log("Deleted Successfully", fileName)
//         })
//     })

// })



//writeFile  --> CallStack  --> WebApi (Whoever finishes writing first)  -->CallBack Queue

const bulkQuote = "Live more, worry less 😀😀😀😀";

const [, , noOfFiles] = process.argv;

for (let i = 1; i <= noOfFiles; i++) {    
fs.writeFileSync(`./backup/hey-${i}.html`, bulkQuote) 
    console.log(`Completed writing hey-${i}.html`, i)

}

// writeFile, readFile, appendFile - async
// writeFileSync, readFileSync, appendFileSync - Sync