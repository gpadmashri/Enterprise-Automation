import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Login test", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName(process.env.userid!);
    await loginPage.fillPassword(process.env.password!);

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectHomePageTextToBeVisible();
});

test("Sample env test", async ({ page }) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password)

})
 