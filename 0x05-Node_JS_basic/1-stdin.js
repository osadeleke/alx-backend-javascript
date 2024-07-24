process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const trimmedData = data.trim();
  console.log(`Your name is: ${trimmedData}`);
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
  // process.exit(0);
});
