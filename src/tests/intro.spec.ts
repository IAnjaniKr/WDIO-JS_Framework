import assert from 'assert'
import LoginPage from '../pages/login.page'
import IntroPage from '../pages/intro.page'
import { PASSWORD, USER_NAME } from '../utils/env'

describe('Intro Test Suite',()=>{
    it('Should display correct title', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        await browser.pause(3000)
        assert.strictEqual(await IntroPage.titleText.getText(),'Superhero Roster','The text do not match')

        await browser.saveScreenshot('screenShots/Intro1.png')

    })
    it('Should dispay correct image', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        await browser.pause(3000)
        assert.strictEqual(await IntroPage.mainImage.isDisplayed(),true,'Image is not displayed')
        const imageSrc = await IntroPage.mainImage.getAttribute('src')
        assert.ok(imageSrc?.endsWith('/images/superhero.png'),'src is not same')
        assert.strictEqual(await IntroPage.mainImage.getAttribute('alt'),'Superhero Image','Alt is not same')
        await browser.saveScreenshot('screenShots/Intro2.png')
    })
})
