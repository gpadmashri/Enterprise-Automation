import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Login test", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName("test56");
    await loginPage.fillPassword("test56");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectHomePageTextToBeVisible();

});

