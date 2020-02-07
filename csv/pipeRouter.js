const fs = require('fs');
const csv = require('csv-parser');



let results = [];
let patients = [] 



// initializes the fs.ReadStream object
const HospitalData = function(){
  fs.createReadStream('text.csv')
    // checks for errors 
    .on('error', () => {} )
    //parse the csv file
    .pipe(csv())
    // push the file to the results array
    .on('data', (data) => results.push(data))
    // at the end, we can 
    .on('end', () => {
       //console.log(results)
 
      const bar = results.filter((result) => result.InsuranceCompany = process.argv.slice(2).join(' '));
      //const bar = results.map( res => res )
      //sort by first name
      bar.sort((a, b) => a.LastName.localeCompare(b.LastName))
       console.log('bar', bar)
       fs.writeFileSync('./text_revised.txt', JSON.stringify(bar, null, 4) , 'utf-8')
  })
  console.log(results);
}

HospitalData()