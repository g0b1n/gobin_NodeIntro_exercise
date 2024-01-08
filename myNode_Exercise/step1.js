const fs = require('fs')
const process = require('process')

// fs.readFile('joke.txt', 'utf8', (err, data) => {

//     if(err) {
//         console.log("ERROR:", err);
//         process.kill(1)
//     }
//     console.log("DATA: ", data)
// })

// It should take one argument, path, 
// and it should read the file with that path, 
// and print the contents of that file.

function joke(path) {

    fs.readFile(path, 'utf8', function(err, data) {

        if (err) {
            console.log(`Error reading the file ${path}:, ${err}`);
            process.kill(1)
        } else {
            console.log("DATA: ", data);
        }
    });
}

joke(process.argv[2])