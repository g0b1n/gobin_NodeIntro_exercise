const fs = require('fs')
const process = require('process')
const axios = require('axios')


// Add a feature where, on the command line,
// you can optionally provide an argument to output to a
// file instead of printing to the console. The argument
// should look like this: --out output-filename.txt readfile-or-url.


function handleOutPut(text, out) {
    if(out) {
        fs.writeFile(out, text, 'utf8', function() {
            if (err) {
                console.error(`Could not write ${out}: ${err}`)
            }
        })  
    } else {
        console.log(text)
    }
}

// Add a new function, ***webCat***. This should take a URL and, using 
// [axios](https://github.com/axios/axios#installing), should read the content of that URL and print it to the console.

// Modify the code that invoked ***cat*** so that, based on the command-line args,
// it decides whether the argument is a file path or a URL and calls either ***cat*** or ***webCat***, respectively.

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

// joke(process.argv[2])

// read page from the URL and print it out

async function webJoke(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error getting ${url}: ${err}`);
        process.exit(1);
    }
}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2]
}

if (path.slice(0, 4) === 'http') {
    webJoke(path);
} else {
    joke(path);
}


