import {test,expect} from'@playwright/test'
import { promises } from 'node:dns'
import path, { dirname } from 'node:path'

test('handel download file',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')

    const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.click("//button[text()='Download PDF File']")
    ])
    const downloadFilepath=path.join(__dirname,'downloadpgf',await download.suggestedFilename())
    await download.saveAs(downloadFilepath)
    expect(await download.path()).toBeTruthy()
    await page.close()
})

test('handelDownloadFiles',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
   const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click("//button[text()='Download PDF File']")
]);
    const dlfilepath=path.join(__dirname,'downloadpgf',await download.suggestedFilename())
    await download.saveAs(dlfilepath)
    expect(await download.path()).toBeTruthy()
})