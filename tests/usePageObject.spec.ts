import {test, expect} from '@playwright/test';
import {PageManager} from '../page-object/pageManager';
import { faker } from '@faker-js/faker';

test.beforeEach(async({page})=>{
    await page.goto('/')
  })

  test('navigate to form page', async ({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
  })

  test('parametrized methods', async ({page}) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com `

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWitheCredentialsAndSelectoption(process.env.USERNAME,process.env.PASSWORD, "Option 1")
    await page.screenshot({path: 'screenshots/formLayoutsPage.png'})
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNmaeEmailAndCheckbox(randomFullName, randomEmail, true)
    await page.locator('nb-card', {hasText: "Inline Form"}).screenshot({path: 'screenshots/inlineForm.png'})
    await pm.navigateTo().datePickerPage()
    await pm.ondatePickerPage().selectCommonDatePickerDateFromToday(3)
    await pm.ondatePickerPage().selectDatePickerWithRangeFromToday(1,2)
  })