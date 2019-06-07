const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public/index.html')));

app.get('/login', (req,res) => {
  res.send('<h1>Welcome!!</h1>');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);