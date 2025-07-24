import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { decrypt, encrypt } from "../utils/CryptojsUtils";
import { encryptEnvFile, decryptEnvFile } from "../utils/EncryptEnvFile";


test("Login test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName(decrypt(process.env.userid!));
    await loginPage.fillPassword(decrypt(process.env.password!));

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectHomePageTextToBeVisible();
});

test("Sample env test", async ({ page }) => {
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password)

})
 
test.skip("Sample Code for checking Encryption & Decryption", async ({ page}) => {
// const plainText = "Hello, Mars!";
// const encryptedText = encrypt(plainText);
// console.log('SALT:', process.env.SALT);
// console.log('Encrypted:', encryptedText);
// const decryptedText = decrypt(encryptedText);
// console.log('Decrypted:', decryptedText);
encryptEnvFile();

})