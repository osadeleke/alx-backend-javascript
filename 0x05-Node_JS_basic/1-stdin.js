process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const trimmedData = data.trim();
  process.stdout.write(`Your name is: ${trimmedData}\r`);

  if (!process.stdin.isTTY) {
    console.log(`Your name is: ${trimmedData}\r`);
    console.log('This important software is now closing');
  }
});
