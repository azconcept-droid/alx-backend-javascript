import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return photoPromise.then((photo) => {
    userPromise.then((user) => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    });
  }).catch(() => console.log('Signup system offline'));
}
