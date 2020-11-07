
module.exports ={
    '@tags':['smoke'],

    'login com sucesso': (browser) => {
        const login = browser.page.login()
        const siderbar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br','pwd123')
        siderbar.expectedLoggedUser("Quilombo")

    },
    
    // 'dado que eu acesso a página de login': function(browser){
    //     browser
    //         .resizeWindow(1920,1080)
    //         .url('http://zombie-web:5000/login')
    //         .waitForElementVisible('.card-login', 3000)
    // },
    // 'quando faço login com sucesso': function(browser){
    //     browser
    //         .setValue("input[name=email]", "zumbi@dospalmares.com.br")
    //         .setValue("input[name=password]", "pwd123")
    //         .click('.login-button')
    // },
    // 'então devo ver o meu nome na área logada': function(browser){
    //     const userInfo=".user .info span"

    //     browser
    //         .waitForElementVisible(userInfo, 3000)
    //         .assert.containsText(userInfo, "Quilombo")
    //         .end();
    // }
    
}