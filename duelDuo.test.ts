import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  await driver.sleep(2000);
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("draw button displays div", async () => {
  await driver.sleep(2000);
  const draw = await driver.findElement(By.id("draw"));
  await draw.click();
  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test("add to Duo button displays div", async () => {
  await driver.sleep(2000);
  const addToDuo = await driver.findElement(
    By.xpath("//button[@class='bot-btn']")
  );
  await addToDuo.click();
  await driver.sleep(2000);
  const playerDuo = await driver.findElement(By.id("player-duo"));
  const displayed = await playerDuo.isDisplayed();
  expect(displayed).toBe(true);
});
