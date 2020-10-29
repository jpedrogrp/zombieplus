const login = require("../../pages/login");

module.exports ={

    'nao cadastrado': (browser) => {
        
        const login = browser.page.login()

        login
            .with("404@notgoogle.com","pwd123")
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}