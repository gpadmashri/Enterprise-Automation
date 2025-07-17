import { Page } from "@playwright/test"
import HomePage from "./HomePage"
import { error } from "console";

export default class LoginPage{

    private readonly usernameInput = "";
    private readonly pasaswordInput =" ";
    private readonly loginButton = "";

    constructor (private page:Page)
    {

    }

    async navigateToLoginPage()
    {
        await this.page.goto("./");
    }

    async fillUserName(username:string)
    {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async fillPassword(password:string)
    {
        await this.page.locator(this.pasaswordInput).fill(password);
    }

    async clickLoginButton()
    {
        await this.page
        .locator(this.loginButton)
        .click()
        .catch((error) =>
            console.error("Error clicking on Login button:", error)
    );

    const homepage = new HomePage(this.page);
    return homepage;
     
    }

}
