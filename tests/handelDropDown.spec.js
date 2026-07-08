import{test ,expect}from '@playwright/test'

//metod 1 only select one
test('handeldropdown',async({page})=>{
     
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.selectOption('#country','India')
//mathod 2 get by value
    await page.selectOption('#country',{value:'uk'})
//mathod 3 get by index 
    await page.selectOption('#country',{index:4})
//mathod  4 get by  label
await page.selectOption('#country',{label:"Brazil"})
})
test('handelDropdown print and select 1', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
 await page.locator('#country').click()

const options=await page.locator("//select[@id='country']//option")
 const count = await options.count();
 console.log('total city is :', count)
for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    console.log(text);
}
//await page.locator("//select[@id='country']/option[6]")


const selectedValue = await page.locator("//select[@id='country']/option[6]").textContent();
console.log("Selected Value:", selectedValue);
})

test('handeldropdown3',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const dropdown=await page.locator('#country')
const options=await page.locator("//select[@id='country']//option")
 const count = await options.count();
 console.log('total city is :', count)
for(let i=0;i<count;i++){
    const text= await options.nth(i).textContent()
     console.log(text?.trim());
}
 await dropdown.selectOption({label:'Japan'})

 const selectoption=await dropdown.inputValue()
 console.log('selectvalue is',selectoption)
})
test('handel dropdown',async({page})=>{

 await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
  const dropdown=await page.locator('#dropdown-class-example')
 const dropdownlist=page.locator("//select[@id='dropdown-class-example']//option")
 const count =await dropdownlist.count()
 for(let i=0;i<count;i++){
    const text=await dropdownlist.nth(i).textContent()
    console.log(text)
 }
 await dropdown.selectOption({label:'Option2'})
  const selectedValue =await dropdown.inputValue()
  console.log(selectedValue)

})