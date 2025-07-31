import { Page, expect } from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class HomePage {

    private readonly homepageText = "Experience the difference";

    constructor(private page: Page) {

    }

    async expectHomePageTextToBeVisible() {
        await expect(this.page.getByText(this.homepageText))
        .toBeVisible({ timeout: 10000 })
        .catch((error) => {
            logger.error(`Error clicking button:${error}`);
            throw error;
        }).then(()=> logger.info("Clicked login button"));
    }
}