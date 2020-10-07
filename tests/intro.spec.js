const assert = require('assert')
const LoginPage = require('../pages/login.page')
const IntroPage = require('../pages/intro.page')
describe('Intro Test Suite',()=>{
    it('Should display correct title',()=>{
        browser.url('')
        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()
        browser.pause(3000)
        assert.strictEqual(IntroPage.titleText.getText(),'Superhero Roster','The text do not match')
        
        browser.saveScreenshot('screenShots/Intro1.png')

    })
    it('Should dispay correct image',()=>{
        browser.url('')
        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()
        browser.pause(3000)
        assert.strictEqual(IntroPage.mainImage.isDisplayed(),true,'Image is not displayed')
        assert.strictEqual(IntroPage.mainImage.getAttribute('src'),'http://localhost:8080/images/superhero.png','src is not same')
        assert.strictEqual(IntroPage.mainImage.getAttribute('alt'),'Superhero Image','Alt is not same')
        browser.saveScreenshot('screenShots/Intro2.png')
    })
})