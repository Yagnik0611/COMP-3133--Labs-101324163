const csv = require('csv-parser')
const fs = require('fs')
// deleting canada and usa txt file if exist 

try {
    fs.unlinkSync('canada.txt')
    console.log('canada.txt has beeen deleted!')
} catch (err) {
    console.log('canada.txt has been not found!')
}

try {
    fs.unlinkSync('usa.txt')
    console.log('usa.txt has been deleted!')
} catch (err) {
    console.log('usa.txt has been not found!')
}
// creating canada and usa file 
fs.closeSync(fs.openSync('canada.txt', 'w'))
fs.closeSync(fs.openSync('usa.txt', 'w'))

// reading file 
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => {
        if (data.country === 'Canada') {
            fs.appendFileSync('canada.txt', `${data.country},${data.year},${data.population}\n`)
        }
        if (data.country === 'United States') {
            fs.appendFileSync('usa.txt', `${data.country},${data.year},${data.population}\n`)
        }
    })


    // fs.unlinkSync('canada.txt')
// .then(() => console.log('Canada.txt has been deleted!'))
// .catch(error => console.log('Canada.txt does not exist!'))

// fs.unlinkSync('usa.txt')
// .then(()=> console.log('USa.txt has been deleted!'))
// .catch(error=> console.log('usa.txt does not exist!'))