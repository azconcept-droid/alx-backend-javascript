import getFullResponseFromAPI from '../1-promise';

test("getFullResponseFromAPI resolves correctly", () => {
  const successResponse = getFullResponseFromAPI(true);
  return expect(successResponse).resolves.toEqual({
    status: 200,
    body: "Success"
  });
});

test("getFullResponseFromAPI reject correctly", () => {
  const successResponse = getFullResponseFromAPI(false);
  return expect(successResponse).rejects.toEqual(new Error('The fake API is not working currently'));
});
