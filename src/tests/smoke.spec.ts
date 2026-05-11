import assert from 'assert'
import LoginPage from '../pages/login.page'
import HeaderPage from '../pages/header.page'
import IntroPage from '../pages/intro.page'
import RosterPage from '../pages/roster.page'
import VotePage from '../pages/vote.page'
import { PASSWORD, USER_NAME } from '../utils/env'

describe('Test suite',()=>{
    it('Should smoke test loginpage', async ()=>{
        await browser.url('')
        assert.strictEqual(await LoginPage.headingText.isDisplayed(),true,'LoginPage.headingText')
        assert.strictEqual(await LoginPage.emailLabel.isDisplayed(),true,'LoginPage.emailLabel')
        assert.strictEqual(await LoginPage.emailField.isDisplayed(),true,'LoginPage.emailField')
        assert.strictEqual(await LoginPage.passwordLabel.isDisplayed(),true,'LoginPage.passwordLabel')
        assert.strictEqual(await LoginPage.passwordField.isDisplayed(),true,'LoginPage.passwordField')
        assert.strictEqual(await LoginPage.rememberLoginCheckbox.isDisplayed(),true,'LoginPage.rememberLoginCheckbox')
        assert.strictEqual(await LoginPage.rememberLoginLabel.isDisplayed(),true,'LoginPage.rememberLoginLabel')
        assert.strictEqual(await LoginPage.submitButton.isDisplayed(),true,'LoginPage.submitButton')
        await browser.pause(5000)
    })

    it('Should smoke test headerpage', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        await browser.pause(3000)
        assert.strictEqual(await HeaderPage.logoutLink.isDisplayed(),true,'HeaderPage.logoutLink')
        assert.strictEqual(await HeaderPage.linkLink.isDisplayed(),true,'HeaderPage.linkLink')
        assert.strictEqual(await HeaderPage.heroFactsLink.isDisplayed(),true,'HeaderPage.heroFactsLink')
        await HeaderPage.heroFactsLink.click()
        await browser.pause(3000)
        assert.strictEqual(await HeaderPage.wolverineOption.isDisplayed(),true,'HeaderPage.wolverineOption')
        assert.strictEqual(await HeaderPage.spidermanOption.isDisplayed(),true,'HeaderPage.spidermanOption')
        assert.strictEqual(await HeaderPage.searchField.isDisplayed(),true,'HeaderPage.searchField')
        assert.strictEqual(await HeaderPage.searchButton.isDisplayed(),true,'HeaderPage.searchButton')
        //assert.strictEqual(HeaderPage.searchField.isDisplayed(),true,'HeaderPage.searchField')
        await browser.pause(3000)

    })

    it('Should smoke test intropage', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()

        assert.strictEqual(await IntroPage.titleText.isDisplayed(),true,'IntroPage.titleText')
        assert.strictEqual(await IntroPage.mainImage.isDisplayed(),true,'IntroPage.mainImage')
        await browser.pause(3000)

    })

    it('Should smoke test rosterpage', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()

        assert.strictEqual(await RosterPage.instructionText.isDisplayed(),true,'RosterPage.instructionText')
        assert.strictEqual(await RosterPage.listTitle.isDisplayed(),true,'RosterPage.listTitle')
        assert.strictEqual(await RosterPage.wolverineItem.isDisplayed(),true,'RosterPage.wolverineItem')
        assert.strictEqual(await RosterPage.ironManItem.isDisplayed(),true,'RosterPage.ironManItem')
        assert.strictEqual(await RosterPage.deadpoolItem.isDisplayed(),true,'RosterPage.deadpoolItem')
        assert.strictEqual(await RosterPage.thorItem.isDisplayed(),true,'RosterPage.thorItem')
        assert.strictEqual(await RosterPage.spidermanItem.isDisplayed(),true,'RosterPage.spidermanItem')
        assert.strictEqual(await RosterPage.addHeroLabel.isDisplayed(),true,'RosterPage.addHeroLabel')
        assert.strictEqual(await RosterPage.addHeroField.isDisplayed(),true,'RosterPage.addHeroField')
        assert.strictEqual(await RosterPage.submitButton.isDisplayed(),true,'RosterPage.submitButton')
        await browser.pause(7000)

    })

    it('Should smoke test votepage', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()

        assert.strictEqual(await VotePage.voteTitle.isDisplayed(),true,'VotePage.voteTitle')
        assert.strictEqual(await VotePage.voteItem1.isDisplayed(),true,'VotePage.voteItem1')
        assert.strictEqual(await VotePage.voteItem2.isDisplayed(),true,'VotePage.voteItem2')
        assert.strictEqual(await VotePage.voteItem3.isDisplayed(),true,'VotePage.voteItem3')
        assert.strictEqual(await VotePage.voteItem4.isDisplayed(),true,'VotePage.voteItem4')
        assert.strictEqual(await VotePage.voteItem5.isDisplayed(),true,'VotePage.voteItem5')
        assert.strictEqual(await VotePage.voteItemLabel1.isDisplayed(),true,'VotePage.voteItemLabel1')
        assert.strictEqual(await VotePage.voteItemLabel2.isDisplayed(),true,'VotePage.voteItemLabel2')
        assert.strictEqual(await VotePage.voteItemLabel3.isDisplayed(),true,'VotePage.voteItemLabel3')
        assert.strictEqual(await VotePage.voteItemLabel4.isDisplayed(),true,'VotePage.voteItemLabel4')
        assert.strictEqual(await VotePage.voteItemLabel5.isDisplayed(),true,'VotePage.voteItemLabel5')
        assert.strictEqual(await VotePage.submitButton.isDisplayed(),true,'VotePage.submitButton')
        assert.strictEqual(await VotePage.voteItemText1.isDisplayed(),true,'VotePage.voteItemText1')
        assert.strictEqual(await VotePage.voteItemValue1.isDisplayed(),true,'VotePage.voteItemValue1')
        assert.strictEqual(await VotePage.voteItemText2.isDisplayed(),true,'VotePage.voteItemText2')
        assert.strictEqual(await VotePage.voteItemValue2.isDisplayed(),true,'VotePage.voteItemValue2')
        assert.strictEqual(await VotePage.voteItemText3.isDisplayed(),true,'VotePage.voteItemText3')
        assert.strictEqual(await VotePage.voteItemValue3.isDisplayed(),true,'VotePage.voteItemValue3')
        assert.strictEqual(await VotePage.voteItemText4.isDisplayed(),true,'VotePage.voteItemText4')
        assert.strictEqual(await VotePage.voteItemValue4.isDisplayed(),true,'VotePage.voteItemValue4')
        assert.strictEqual(await VotePage.voteItemText5.isDisplayed(),true,'VotePage.voteItemText5')
        assert.strictEqual(await VotePage.voteItemValue5.isDisplayed(),true,'VotePage.voteItemValue5')
        await browser.pause(10000)


    })
})
