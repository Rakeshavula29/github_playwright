import{test ,expect} from '@playwright/test'
import { promises } from 'node:dns'

test('handel windows',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
 const [newPage]=await Promise.all([
    page.context().waitForEvent('page'),
    page.click('#openwindow')
 ])
 await newPage.waitForLoadState()
 console.log(await newPage.title());
})
