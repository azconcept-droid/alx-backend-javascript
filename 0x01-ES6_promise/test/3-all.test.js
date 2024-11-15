import handleProfileSignup from "../3-all";
import * as utilsFunctions from "../utils";

test("handleProfileSignup returns the right text", async () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
  
    await handleProfileSignup();
    expect(spy).toBeCalledWith('photo-profile-1 Guillaume Salva');
    spy.mockRestore();
});

test("handleProfileSignup imports the right functions", async () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const uploadPhotoSpy = jest.spyOn(utilsFunctions, 'uploadPhoto').mockImplementation();
    uploadPhotoSpy.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        body: 'this-is-a-different-photo',
      });
    });
  
    await handleProfileSignup();
    expect(spy).toBeCalledWith('this-is-a-different-photo Guillaume Salva');
    spy.mockRestore();
});

test("handleProfileSignup manage an error", async () => {
  const spy = jest.spyOn(console, "log").mockImplementation();
  const uploadPhotoSpy = jest.spyOn(utilsFunctions, 'uploadPhoto').mockImplementation();
  uploadPhotoSpy.mockImplementation(() => {
    return Promise.reject(() => {});
  });

  await handleProfileSignup();
  expect(spy).toBeCalledWith('Signup system offline');
  spy.mockRestore();
});
