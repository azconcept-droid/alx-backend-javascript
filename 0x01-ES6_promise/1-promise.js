function getResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        const status = success;
        if (!status) {
            reject(new Error('The fake API is not working currently'));
        } else {
            const response = { status: 200, body: 'success'};
            resolve(response);
        }
    });
}

export default getResponseFromAPI;
