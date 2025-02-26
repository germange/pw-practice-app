import { Locator, Page } from "playwright/test";
import { HelperBase } from "./helperBase";

export class FormLayoutPage extends HelperBase{

    //private readonly page: Page

    constructor(page: Page){
        super(page)

    }
/**
 * Fill out the grid form with credentials
 * @param emal - valid user email
 * @param password - valid user password
 * @param optionText - should be name of option to select
 */
    async submitUsingTheGridFormWitheCredentialsAndSelectoption(emal: string, password: string, optionText: string ){
        const usingTheGridFOrm = this.page.locator('nb-card', {hasText: "Using the Grid"})
        await usingTheGridFOrm.getByRole('textbox', {name: "Email"}).fill(emal)
        await usingTheGridFOrm.getByRole('textbox', {name: "Password"}).fill(password)
        await usingTheGridFOrm.getByRole('radio', {name: optionText}).check({force: true})
        await usingTheGridFOrm.getByRole('button').click()
    }
x
/**
 * Fill out the inline form with credentials
 * @param name - should be first and last name
 * @param email - valid user email
 * @param rememberMe - true or false if user session to be saved
 */
    async submitInlineFormWithNmaeEmailAndCheckbox(name: string, email: string, rememberMe: boolean ){
        const inlineFOrm = this.page.locator('nb-card', {hasText: "Inline Form"})
        await inlineFOrm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await inlineFOrm.getByRole('textbox', {name: "Email"}).fill(email)
        if (rememberMe){
            await inlineFOrm.getByRole('checkbox').check({force: true})
            await inlineFOrm.getByRole('button').click()
        }
    }
}