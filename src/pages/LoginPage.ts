import { Page } from "@playwright/test"
import HomePage from "./HomePage"
import { error } from "console";

export default class LoginPage{

    private readonly usernameInputSelector = "username";
    private readonly pasaswordInputSelector ="password";
    private readonly loginButtonSelector = "Log In";

    constructor (private page:Page)
    {

    }

    async navigateToLoginPage()
    {
        await this.page.goto("./");
    }

    async fillUserName(username:string)
    {
        await this.page.locator('input[name=' + this.usernameInputSelector +']').fill(username);
    }

    async fillPassword(password:string)
    {
        await this.page.locator('input[name=' + this.pasaswordInputSelector +']').fill(password);
    }

    async clickLoginButton()
    {
        await this.page
        .getByRole('button', {name: this.loginButtonSelector })        
        .click()
        .catch((error) =>
            console.error("Error clicking on Login button:", error)
    );

    const homePage = new HomePage(this.page);
    return homePage;
     
    }
}
