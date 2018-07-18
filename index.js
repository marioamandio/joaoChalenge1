var express = require('express');

var app = express();

var brightness = require('brightness');

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render()
  });

app.get('/lessBright', (req, res) => {
    console.log('-----------')

    let currentBright = brightness.get().then(level => {
         return level -= 0.1;
     });

    brightness.set(currentBright).then(() => {
        res.redirect('/')
    });

});

app.get('/moreBright', (req, res) => {
    let currentBright = brightness.get().then(level => {
        return level += 0.1;
    });

   brightness.set(currentBright).then(() => {
       res.redirect('/')
   });
});

app.listen(3000)



 
// brightness.get().then(level => {
//     console.log(level);
//     //=> 0.5
// });
 
// brightness.set(0.8).then(() => {
//     console.log('Changed brightness to 80%');
// });