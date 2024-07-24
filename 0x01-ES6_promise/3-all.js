import { uploadPhoto, createUser } from "./utils";

export function handleProfileSignup() {
    uploadPhoto.then((photo) => {
        console.log(`${photo.body} ${data.firstName} ${data.lastName}`);
    })

    createUser.then((data) => {
        console.log(`${photo.body} ${data.firstName} ${data.lastName}`);
    })
}
