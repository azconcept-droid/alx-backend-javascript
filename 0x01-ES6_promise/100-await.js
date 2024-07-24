import { createUser, uploadPhoto } from "./utils";

async function asyncUploadUser() {
    return { photo: uploadPhoto.then(() => {}), user: createUser.then(() => {}) }
}

module.exports = asyncUploadUser;
