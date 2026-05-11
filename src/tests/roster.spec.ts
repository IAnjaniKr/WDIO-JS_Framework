import assert from 'assert'
import LoginPage from '../pages/login.page'
import RosterPage from '../pages/roster.page'
import { PASSWORD, USER_NAME } from '../utils/env'

describe('Test suite',()=>{
    it('Should test Roster page', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        const instructions = 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.'
        const title = 'Build Your Superhero Roster:'
        assert.strictEqual(await RosterPage.instructionText.getText(), instructions, 'Instructions don not match')
        assert.strictEqual(await RosterPage.listTitle.getText(), title, 'Item does not match')
        assert.strictEqual(await RosterPage.wolverineItem.getText(),'Wolverine','Wolverine Item does not match')
        assert.strictEqual(await RosterPage.ironManItem.getText(),'Iron Man','Iron Man Item does not match')
        assert.strictEqual(await RosterPage.deadpoolItem.getText(),'Deadpool','Deadpool Item does not match')
        assert.strictEqual(await RosterPage.thorItem.getText(),'Thor','Thor Item does not match')
        assert.strictEqual(await RosterPage.spidermanItem.getText(),'Spider-Man','Spider-Man Item does not match')
        assert.strictEqual(await RosterPage.addHeroLabel.getText(),'ADD A SUPERHERO','Add a superhero lable not same')
        assert.strictEqual(await RosterPage.addHeroField.getAttribute('placeholder'),'Enter Hero','Placeholder text does not match')
        await browser.pause(3000)
        await browser.saveScreenshot('screenShots/Roster.png')
    })

    it('Should test Roster valeue add', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        await RosterPage.addHeroField.setValue('Batman')
        await RosterPage.submitButton.click()
        await RosterPage.newItem.waitForDisplayed()
        assert.strictEqual(await RosterPage.newItem.getText(),'Batman', 'New Item not same')
        await browser.pause(3000)
    })
})
