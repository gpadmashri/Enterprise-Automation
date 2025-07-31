import { Page } from "@playwright/test"
import HomePage from "./HomePage"
import { error } from "console";
import logger from "../utils/LoggerUtil";

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
        logger.info("User navigated to the given url")
    }

    async fillUserName(username:string)
    {
        await this.page.locator ('input[name=' + this.usernameInputSelector +']').fill(username);
        logger.info("Filled username")
    }

    async fillPassword(password:string)
    {
        await this.page.locator('input[name=' + this.pasaswordInputSelector +']').fill(password);
        logger.info("Filled password")
    }

    async clickLoginButton()
    {
        await this.page
        .getByRole('button', {name: this.loginButtonSelector })        
        .click()
        .catch((error) => {
        logger.error(`Error clicking login button:${error}`);
        throw error;
        }).then(()=> logger.info("Clicked login buttun")
            // console.error("Error clicking on Login button:", error)
    );

    const homePage = new HomePage(this.page);
    return homePage;
     
    }
}
