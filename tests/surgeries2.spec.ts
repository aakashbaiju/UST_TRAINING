import { test, expect } from "@playwright/test";

test("TC01 - Fill ailment, name, number and submit", async ({ page }) => {

    await page.goto("https://www.practo.com/care");

    
    await page.getByText("Select Ailment*").click();

   
    await page.locator("//div[contains(@class,'cursor-pointer') and .//b[contains(.,'Eye')]]").click();


    await page.locator("//h1[contains(@class,'list-module_sizeSmallItemContentTitle__kaSwM list-module_itemContentTitle__XreVD SpecialityWithAilmentSelectorModal-module_ailmentTitle__Lciwm') and text() = 'Glaucoma']").click();

    
    await page.getByPlaceholder("Name*").fill("Aakash");

    
    await page.getByPlaceholder("Contact Number*").fill("8763456789");


    await page.getByRole('button', { name: /book/i }).click();

    
    const consultationText = page.locator("p.pt-40px", { hasText: /Get FREE consultation/i });
    await expect(consultationText).toBeVisible();
});

test("TC02 - Validate error for invalid username", async ({ page }) => {

    await page.goto("https://www.practo.com/care");

    
    await page.getByText("Select Ailment*").click();

    
    await page.locator("//div[contains(@class,'cursor-pointer') and .//b[contains(.,'Eye')]]").click();

    
    await page.locator("//h1[contains(@class,'list-module_sizeSmallItemContentTitle__kaSwM list-module_itemContentTitle__XreVD SpecialityWithAilmentSelectorModal-module_ailmentTitle__Lciwm') and text() = 'Glaucoma']").click();

    
    await page.getByPlaceholder("Name*").fill("");

    
    await page.getByPlaceholder("Contact Number*").fill("876345678");

    
    await page.getByRole('button', { name: /book/i }).click();

    
    const errorMsg = page.getByText("Invalid User Name");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText("Invalid User Name");
});

test("To check whether all departments are present",async ({page})=>
{
    await page.goto("https://www.practo.com/care");
    const departments =[
        "General Surgery",
        "Proctology",
        "Ophthamology",
        "Urology",
        "Cosmetic",
        "Orthopedics",
        "Robotic Surgeries",
        "Oncology",
        "Dentist"
    ];

    const wrapper = page.locator('#surgeries');

    for (const dep of departments) {
        await expect(
            wrapper.locator('[data-qa-id="our-deparments-speciality-name"]', { hasText: dep })
        ).toBeVisible();
        console.log(`${dep} is found`);
    }    
    await page.waitForTimeout(5000);
});
