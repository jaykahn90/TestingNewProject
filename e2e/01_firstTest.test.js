function sleep2(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Pressing Menu buttons', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
  });

  it('should press all bottom menu buttons, navigate to those screens and come back to main screen', async () => {
    await waitFor(element(by.id('Button1')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button1')).tap();

    // waiting for course screen to load and display the gif and text
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
    await sleep2(2000);
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();

    //Navigate to About Screen
    await waitFor(element(by.id('Button3')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button3')).tap();
    await sleep2(2000);
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();

    //Navigate to API Screen
    await waitFor(element(by.id('Button4')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('Button4')).tap();
    await sleep2(2000);
    // Navigate back to Home screen
    await element(by.id('BackButton')).tap();
  });
});

///////Testing of URL buttons//////////

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Testing URL links for Youtube, Instagram and Website', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await element(by.id('Button3')).tap();
  });

  it('should press YouTube icon', async () => {
    await element(by.id('youtube-button')).tap();
    await sleep(3000);
  });

  it('should press Instagram icon', async () => {
    await element(by.id('instagram-button')).tap();
    await sleep(3000);
  });

  it('should press Facebook icon', async () => {
    await element(by.id('facebook-button')).tap();
    await sleep(3000);
  });
});

describe('Contact Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp({newInstance: true});
    await element(by.id('Button4')).tap();
  });

  it('should display an alert for missing fields', async () => {
    await element(by.id('name-input')).typeText('Sheng');
    await element(by.id('contact-button')).tap();

    await expect(
      element(
        by.text('Please fill the following fields: email, phone, message'),
      ),
    ).toBeVisible();
    await sleep2(2000);
    await element(by.text('OK')).tap(); // Assuming "OK" is a button to dismiss the alert
  });

  it('should display an alert for invalid fields', async () => {
    await element(by.id('name-input')).typeText('Andrew123');
    await element(by.id('email-input')).typeText('Andrew@gmail.com');
    await element(by.id('phone-input')).typeText('0412-abc-342');
    await element(by.id('message-input')).typeText('Hello, I need help!');
    await element(by.id('contact-button')).tap();

    await expect(
      element(by.text('Invalid input in the following fields: name, phone')),
    ).toBeVisible();
    await sleep2(2000);
    await element(by.text('OK')).tap();
  });

  it('should display a thank you alert when all fields are filled correctly', async () => {
    await element(by.id('name-input')).typeText('Stefan');
    await element(by.id('email-input')).typeText('Stefan@example.com');
    await element(by.id('phone-input')).typeText('1234567890');
    await element(by.id('message-input')).typeText('Hello, I need help!');
    await element(by.id('contact-button')).tap();

    await expect(element(by.text('Thank You Stefan'))).toBeVisible();
    await sleep2(2000);
    await element(by.text('OK')).tap();
  });
});
