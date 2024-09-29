// Import the 'readline' module to handle input from the command line
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

});

// Handle the event when the user closes the program
rl.on('close', () => {
  console.log('This important software is now closing');
});
