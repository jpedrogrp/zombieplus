const login = require("../../pages/login");

module.exports ={

    'email nao informado': (browser) => {

        const login = browser.page.login()

        login
            .with('',"pwd123")
            .expectAlertInfo('Opps. Cadê o email?')
    }
}