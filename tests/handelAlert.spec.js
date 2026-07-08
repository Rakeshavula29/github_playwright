import{test,expect}from"@playwright/test"

test('handel alert',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async(dialog)=>{
        console.log('alter messs'+dialog.message())
        await dialog.accept()
    }) 
    await page.click("//button[@id='alertBtn']")
})
test('handel alters',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dailog,',async(dialog)=>{
        console.log('altermsf'+dialog.message())
        await dialog.dismiss()
    })
    await page.click("//button[@id='confirmBtn']")
})
test('handel alterss',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dailog,',async(dialog)=>{

        await dialog.accept('Rakesh')
    })
    await page.click("//button[@id='promptBtn']")
})
