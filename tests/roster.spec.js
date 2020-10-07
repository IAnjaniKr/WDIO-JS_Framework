const assert = require('assert')
const LoginPage = require('../pages/login.page')
const RosterPage = require('../pages/roster.page')

describe('Test suite',()=>{
    it('Should test Roster page',()=>{
        browser.url('')
        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()
        var instructions = 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.'
        var title = 'Build Your Superhero Roster:'
        assert.strictEqual(RosterPage.instructionText.getText(), instructions, 'Instructions don not match')
        assert.strictEqual(RosterPage.listTitle.getText(), title, 'Item does not match')
        assert.strictEqual(RosterPage.wolverineItem.getText(),'Wolverine','Wolverine Item does not match')
        assert.strictEqual(RosterPage.ironManItem.getText(),'Iron Man','Iron Man Item does not match')
        assert.strictEqual(RosterPage.deadpoolItem.getText(),'Deadpool','Deadpool Item does not match')
        assert.strictEqual(RosterPage.thorItem.getText(),'Thor','Thor Item does not match')
        assert.strictEqual(RosterPage.spidermanItem.getText(),'Spider-Man','Spider-Man Item does not match')
        assert.strictEqual(RosterPage.addHeroLabel.getText(),'ADD A SUPERHERO','Add a superhero lable not same')
        assert.strictEqual(RosterPage.addHeroField.getAttribute('placeholder'),'Enter Hero','Placeholder text does not match')
        browser.pause(3000)
        browser.saveScreenshot('screenShots/Roster.png')
    })

    it('Should test Roster valeue add',()=>{
        browser.url('')
        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()
        RosterPage.addHeroField.setValue('Batman')
        RosterPage.submitButton.click()
        assert.strictEqual(RosterPage.newItem.getText(),'Batman', 'New Item not same')
        browser.pause(3000)
    })
})