import assert from 'assert'
import LoginPage from '../pages/login.page'
import VotePage from '../pages/vote.page'
import { PASSWORD, USER_NAME } from '../utils/env'

describe('Vote Section Test suite',()=>{
    it('Should test increment vote', async ()=>{
        await browser.url('')
        await LoginPage.emailField.setValue(USER_NAME)
        await LoginPage.passwordField.setValue(PASSWORD)
        await LoginPage.submitButton.click()
        let originalVoteValue = Number(await VotePage.voteItemValue1.getText())
        console.log('originalVote:'+originalVoteValue)
        console.log('originalVote + 1:'+ (originalVoteValue + 1))
        await VotePage.submitButton.click()
        await browser.waitUntil(
            async () => Number(await VotePage.voteItemValue1.getText()) === originalVoteValue + 1,
            { timeoutMsg: 'Vote count did not increment' }
        )
        assert.strictEqual(Number(await VotePage.voteItemValue1.getText()), originalVoteValue + 1,'Values are not same')
        assert.strictEqual(await VotePage.thanksAlert.isDisplayed(),true,'Alert not displayed')
        assert.strictEqual(await VotePage.thanksAlert.getText(),'Thanks for voting!','Alert text is not same')
        await browser.pause(3000)
        await browser.saveScreenshot('screenShots/vote.png')
        //browser.saveDocumentScreenshot('screenShots/vote.png')
    })
})
