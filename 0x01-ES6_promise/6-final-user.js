import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((responses) => {
      const respArray = [];
      for (const response of responses) {
        if (response.status === 'fulfilled') {
          respArray.push({
            status: response.status,
            value: response.value,
          });
        } else {
          respArray.push({
            status: response.status,
            value: `${response.reason.name}: ${response.reason.message}`,
          });
        }
      }
      return respArray;
    });
}
