

module.exports = {
    '@tags': ['smoke', '404'],

    before: function (browser) {

        const login = browser.page.login()
        const siderbar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        siderbar.expectedLoggedUser("Quilombo")
    },

    'quando eu busco um titulo não cadastrado': function (browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Não é mais um besteirol americano')
            .click('@searchIcon')
    },

    'então devo ver uma mensagem de alerta': function (browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui.')
    },
}