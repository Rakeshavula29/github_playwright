import{test,expect}from '@playwright/test'

test('handel Asseration',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//verift title
await expect(page).toHaveTitle('Automation Testing Practice')
//verify Ulr
await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
//element visbel ornot
await expect(page.getByText('Name:')).toBeVisible()



})