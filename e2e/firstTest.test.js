describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  it('should press first menu button and navigate to that screen', async () => {
    await waitFor(element(by.id('Button1')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button1')).tap();

    // Now wait for the Course screen to load and display the gif and text
    await waitFor(element(by.id('lottie-gif')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('lottie-gif'))).toBeVisible();
    await waitFor(element(by.text('Testing Gifs')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.text('Testing Gifs'))).toBeVisible();
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();

    //Navigate to API Screen
    await waitFor(element(by.id('Button2')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button2')).tap();
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();

    //Navigate to About Screen
    await waitFor(element(by.id('Button3')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button3')).tap();
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();

    //Navigate to API Screen
    await waitFor(element(by.id('Button4')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button4')).tap();
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();
  });
});
