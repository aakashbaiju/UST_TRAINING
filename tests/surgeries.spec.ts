import { test, expect } from "@playwright/test";

test("Test Register Page", async ({ page }) => {

    await page.goto("https://www.practo.com/care");

// open dropdown
await page.getByText("Select Ailment*").click();

// const modal = page.getByRole('dialog');

// type to load options
// await modal.locator("input").first().fill("Eye");

// click correct clickable container
await page.locator("//div[contains(@class,'cursor-pointer') and .//b[contains(.,'Eye')]]").click();
await page.locator("//h1[contains(@class,'list-module_sizeSmallItemContentTitle__kaSwM list-module_itemContentTitle__XreVD SpecialityWithAilmentSelectorModal-module_ailmentTitle__Lciwm') and text() = 'Glaucoma']").click();


await page.getByPlaceholder("Name*").fill("");

// Enter phone number
await page.getByPlaceholder("Contact Number*").fill("876345678");

// Click Submit / Book Appointment button
await page.getByRole('button', { name: /book/i }).click();

const consultationText = page.locator("p.pt-40px", { hasText: /Get FREE consultation/i });
await expect(consultationText).toBeVisible();

//Locate error message
const errorMsg = page.getByText("Invalid User Name");
//  Assertions
await expect.soft((errorMsg)).toBeVisible();
await expect.soft((errorMsg)).toHaveText("Invalid User Name");
// const cityError = page.locator("Please pick a value");

// Assertion
// await expect(cityError).toBeVisible();
await page.waitForTimeout(5000);
});

// test("To test the form filling:", async ({ page }) => {

//     await page.goto("https://www.practo.com/care");

//     await page.locator("//span[contains(@class,'generalLeadForm-module_text__ElFI0') and text()='Select Ailment*']");

// });
