
import pg from '../../lib/db'

let movieData = {}

module.exports = {

    before: function (browser) {

        movieData = {
            title: 'Meu Namorado é um Zumbi',
            status: 'Disponível',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: ['Nicholas Hoult', 'Teresa Palmer', 'Analeign Tipton', 'Rob Corddry'],
            cover: 'meu-namo-zumbi.jpg',
            plot: 'Necrofilia com extra steps. Pra confundir a cabeça de adolescentes e futuros enterros. Se acontecer um cenário zumbi uma menina que viu isso vai ser mordida tentando arranjar um namorado.'
        }

        pg.removeByTitle(movieData.title).then(function () {
            pg.insertMovie(movieData)
        })

        const login = browser.page.login()
        const siderbar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        siderbar.expectedLoggedUser("Quilombo")
    },

    'quanto eu faço a busca pelo titulo': function (browser) {
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', movieData.title)
            .click('@searchIcon')
    },
    'então o titulo buscado deve ser exibido na lista': function (browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementPresent('@tr', 10000)
            .expect.elements('@tr').count.to.equal(1)
        movie
            .assert.containsText('@tr', movieData.title)
    },
}