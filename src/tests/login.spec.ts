import assert from 'assert'
import LoginPage from '../pages/login.page'
import HeaderPage from '../pages/header.page'
import {
    INVALID_PASSWORD,
    INVALID_USER_NAME,
    MISSING_EMAIL_PASSWORD,
    PASSWORD,
    PASSWORD_UPPER_CASE,
    USER_NAME
} from '../utils/env'

describe('Test suite',()=>{
    it('Should display error when password is missing', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(MISSING_EMAIL_PASSWORD)
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/screenshot1.png')
    })

    it('Should display error when email is missing', async ()=>{
        await browser.url('')
        await LoginPage.passwordField.setValue(MISSING_EMAIL_PASSWORD)
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/screenshot2.png')
    })

    it('Should display error when email and password are missing', async ()=>{
        await browser.url('')
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/screenshot3.png')
    })

    it('Should display error when email is incorrect', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(INVALID_USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/screenshot4.png')
    })

    it('Should display error when password is incorrect', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(INVALID_PASSWORD)
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/screenshot5.png')
    })

    it('Should display error when password case is incorrect', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD_UPPER_CASE)
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/screenshot6.png')
    })

    it('Should login with valid email and password', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        assert.strictEqual(await LoginPage.loginOverlay.isDisplayed(),false, 'Overlay is still displayed')
        assert.strictEqual(await LoginPage.superheroRoster.isDisplayed(),true, 'Superhero Roster Text is still displayed')
        await browser.saveScreenshot('screenShots/screenshot7.png')
    })

    it('Should remember login credendtials', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.rememberLoginCheckbox.click()
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/loginSuccess.png')
        assert.strictEqual(await LoginPage.loginOverlay.isDisplayed(),false,'Overlay is still displayed')
        await HeaderPage.logoutLink.click()
        await browser.saveScreenshot('screenShots/logoutSuccess.png')
        assert.strictEqual(await LoginPage.loginOverlay.isDisplayed(),true,'Overlay is not displayed')
        assert.strictEqual(await LoginPage.emailField.getValue(),USER_NAME, 'Values do not match')
        assert.strictEqual((await LoginPage.passwordField.getValue()).length, PASSWORD.length,'Password is too short')
        assert.strictEqual(await LoginPage.rememberLoginCheckbox.isSelected(),true,'Checkbox is not selected')
    })
    it('should not remember login credentials', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        await browser.saveScreenshot('screenShots/home.png')
        await browser.pause(3000)
        assert.strictEqual(await LoginPage.loginOverlay.isDisplayed(),false,'Overlay is still displayed')
        await HeaderPage.logoutLink.click()
        await browser.pause(3000)
        assert.strictEqual(await LoginPage.loginOverlay.isDisplayed(),true,'overlay is not displayed')
        assert.strictEqual(await LoginPage.emailField.getValue(),'','Values do not match')
        assert.strictEqual((await LoginPage.passwordField.getValue()).length,0,'Length is not same')
        assert.strictEqual(await LoginPage.rememberLoginCheckbox.isSelected(),false,'Checkbox is selected')
        //browser.saveScreenshot('screenShots/login.png')
  await browser.saveScreenshot('screenShots/login.png')
    })

})
