import {test,expect} from "@playwright/test";
 
test("Mouse Drag Test", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Static.html");
    await page.locator("//a[text() = 'Interactions ']").hover();
    const Slogo = page.locator("#angular");
    const demoLogo = page.locator("#mongo");
    const seleniumLogo = page.locator("#node");
 
    const destination = await page.locator("#droparea");
 
    await Slogo.dragTo(destination);
    await page.waitForTimeout(3000);
    await demoLogo.dragTo(destination);
    await page.waitForTimeout(3000);
    await seleniumLogo.dragTo(destination);
    await page.waitForTimeout(3000);
})
 