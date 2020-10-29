const login = require("../../pages/login");

module.exports ={

    'senha incorreta': (browser) => {

        const login = browser.page.login()
        
        login
            .with("zumbi@dospalmares.com.br","pdt123")
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}