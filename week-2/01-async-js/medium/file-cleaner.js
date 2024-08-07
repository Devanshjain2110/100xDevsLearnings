const fs = require('fs')


function readingFile(){
    let f = new Promise((resolve) => {
 fs.readFile("D:/Website/100xDEVS/assignments-master/assignments-master/week-2/01-async-js/medium/a.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err)
        return;
    }
    // console.log(data)
    let ans = data.replace('/\s+/g',' ').trim()

    fs.writeFile('D:/Website/100xDEVS/assignments-master/assignments-master/week-2/01-async-js/medium/a.txt',ans, 'utf-8',
    (err) => {
        if(err){
            console.log(err)
            return;
        }
        console.log('file written successfully')
    }
    )
})
resolve();
    }

)
return f
}
let x = readingFile()

x.then(() => {
    fs.readFile("D:/Website/100xDEVS/assignments-master/assignments-master/week-2/01-async-js/medium/a.txt", "utf-8", (err, data) => {
        if(err) {
            console.log(err)
            return;
        }
        console.log(data)
})
})

