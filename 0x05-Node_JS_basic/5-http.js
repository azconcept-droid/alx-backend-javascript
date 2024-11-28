const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2]

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(databasePath)
      .then(({ students, fields }) => {
        res.write(`Number of students: ${students.length}\n`);
        const result = Object.entries(fields)
          .map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`)
          .join('\n');
        res.write(result);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
