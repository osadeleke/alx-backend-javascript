const p = new Promise((resolve, reject) => {
  const a = 1 + 2;
  if (a === 2) {
    resolve('Success');
  } else {
    reject(new Error('Failed'));
  }
});

p.then((message) => {
  console.log(`yay! with pass messsage = ${message}`);
}).catch((message) => {
  console.log(`this is a fail with message  = ${message}`);
});
