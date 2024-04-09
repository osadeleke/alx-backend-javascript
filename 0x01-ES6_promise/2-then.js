export default function handleResponseFromAPI(promise) {
  return promise.then(() => {
    console.log('Got a response from the API');
  }).catch(() => {
    console.log('Got a response from the API');
    return Promise.reject(new Error());
  });
}
