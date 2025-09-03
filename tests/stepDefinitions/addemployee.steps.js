const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

When('User clicks on PIM button', async function () {

    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
});

When('User clicks on Add employee sub menu', async function () {

    await page.locator("//a[text()='Add Employee']").click()
})

When('User enter firstname as {string} and lastname {string}', async function (firstname, lastname) {

    await page.locator('//input[@name="firstName"]').fill(firstname)

    await page.locator('//input[@name="lastName"]').fill(lastname)


});

When('user clicks on save button', async function () {

    await page.locator('//button[@type="submit"]').click()

});


Then('User will get successfully saved message', async function () {

    await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
});


Then('User will get error Message for firstname and lastname', async function () {


    await expect(page.locator("(//span[text()='Required'])[1]")).toBeVisible()
});


