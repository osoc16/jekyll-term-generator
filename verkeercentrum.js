const fs = require('fs');
const parse = require('datex2-linker-api');

const outputFile = "_data/verkeercentrum.json";

parse('http://www.verkeerscentrum.be/uitwisseling/datex2full', 'https://osoc16.github.io/jekyll-term-generator/verkeercentrum/terms/').then(result => {

  fs.writeFile(outputFile, JSON.stringify(result), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The data was saved!");
  });
}).catch(err => {
  console.warn(err)
});
