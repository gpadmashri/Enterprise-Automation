import { Page, expect } from "@playwright/test";

export default class HomePage {

    private readonly homepageText = "Experience the difference";

    constructor(private page: Page) {

    }

    async expectHomePageTextToBeVisible() {
        await expect(this.page.getByText(this.homepageText)).toBeVisible({ timeout: 10000 });
    }



}