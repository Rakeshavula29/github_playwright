import{test,expect}from"@playwright/test"

test('handel drag & drop',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const source=page.locator("//div[@id='draggable']")
    const traget= page.locator("//div[@id='droppable']")

    await source.dragTo(traget)
    await expect(traget).toHaveText("Dropped!")
})