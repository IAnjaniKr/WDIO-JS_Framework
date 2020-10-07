class LoginPage{

    get headingText(){
        return $('#login-title')
    }
    get emailLabel(){
        return $('#form-login > div:nth-child(1) > label')
    }

    get emailField(){
        return $('#loginEmail')
    }

    get passwordLabel(){
        return $('#form-login > div:nth-child(2) > label')
    }

    get passwordField(){
        return $('#loginPassword')
    }

    get rememberLoginCheckbox(){
         return $('#rememberLoginChk')
    }

    get rememberLoginLabel(){

        return $('#form-login > div.form-check > label')
    }

    get submitButton(){

        return $('#form-login > button')
    }

    get loginOverlay(){

        return $('#overlay')
    }

    get superheroRoster(){
        //document.querySelector("body > div.container-fluid > div:nth-child(1) > h1")
        return $('body > div.container-fluid > div:nth-child(1) > h1')
    }
}

module.exports = new LoginPage()