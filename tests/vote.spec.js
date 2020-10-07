const assert = require('assert')
const LoginPage = require('../pages/login.page')
const VotePage = require('../pages/vote.page')

describe('Vote Section Test suite',()=>{
    it('Should test increment vote',()=>{
        browser.url('')
        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()
        let originalVoteValue = Number(VotePage.voteItemValue1.getText())
        console.log('originalVote:'+originalVoteValue)
        console.log('originalVote + 1:'+ (originalVoteValue + 1))
        VotePage.submitButton.click()
        assert.strictEqual(Number(VotePage.voteItemValue1.getText()), originalVoteValue + 1,'Values are not same')
        //assert.strictEqual(VotePage.voteItemValue1.getText(), originalVoteValue + 1,'Values are not same')
        assert.strictEqual(VotePage.thanksAlert.isDisplayed(),true,'Alert not displayed')
        assert.strictEqual(VotePage.thanksAlert.getText(),'Thanks for voting!','Alert text is not same')
        browser.pause(3000)
        browser.saveScreenshot('screenShots/vote.png')
        //browser.saveDocumentScreenshot('screenShots/vote.png')
    })

    it('Should test something else',()=>{

    })
})