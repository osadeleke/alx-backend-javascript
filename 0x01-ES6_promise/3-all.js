import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([response1, response2]) => {
      console.log(`${response1.body} ${response2.firstName} ${response2.lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
