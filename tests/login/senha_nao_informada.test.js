const login = require("../../pages/login");

module.exports ={

    'senha nao informada': (browser) => {

        const login = browser.page.login()

        login
            .with("404@notgoogle.com",'')
            .expectAlertInfo('Opps. Cadê a senha?')
    },
}