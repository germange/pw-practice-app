import {test, expect} from '@playwright/test';
import {PageManager} from '../page-object/pageManager'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200')
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

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWitheCredentialsAndSelectoption("test@test.com", "Welcome1", "Option 1")
    await pm.onFormLayoutsPage().submitInlineFormWithNmaeEmailAndCheckbox("Test Man", "testman@test.com", true)
    await pm.navigateTo().datePickerPage()
    await pm.ondatePickerPage().selectCommonDatePickerDateFromToday(3)
    await pm.ondatePickerPage().selectDatePickerWithRangeFromToday(1,2)
  })