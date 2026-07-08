import { test, expect } from '@playwright/test';


test('login test',async({page})=>{
    await page.goto('https://www.google.com/')

});

test('login stest',async({page})=>{
    await page.goto('https://www.google.com/')
    await page.locator("//textarea[@id='APjFqb']").fill('Rohith sharma')
});
