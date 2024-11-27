const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const databasePath = process.argv[2]

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
  res.send('This is the list of our students');
});

app.listen(1245);

module.exports = app;
