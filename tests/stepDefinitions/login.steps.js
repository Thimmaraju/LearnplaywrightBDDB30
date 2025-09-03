const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

const logindata = require("../../testData/login.json");

Given('User Launch the Application', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});


When('User Enter username as {string} and Password as {string}', async function (username, password) {

    await page.locator('//input[@name="username"]').fill(username)
    await page.locator('//input[@name="password"]').fill(password)
});


When('User enter Valid username and password', async function () {

    await page.locator('//input[@name="username"]').fill(logindata.Username)
    await page.locator('//input[@name="password"]').fill(logindata.Password)
});
When('User clicks on login button', async function () {

    await page.locator('//button[@type="submit"]').click()

});

Then('User should be navigated to Dashboard page', async function () {

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

Then('User should get the login error Message', async function () {
   
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
});

