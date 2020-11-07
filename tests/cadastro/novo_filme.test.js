import pg from '../../lib/db'

let movieData = {}


module.exports = {

    before: function (browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é chutar a bunda de zumbis e a rainha vermelha, e ser um filme bosta de videogame, que podia ser muito melhor'
        }

        pg.removeByTitle(movieData.title)

        const login = browser.page.login()
        const siderbar = browser.page.sidebar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        siderbar.expectedLoggedUser("Quilombo")

    },

    'quando eu faço o cadastro do filme': function (browser) {
        const movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .click('@createButton')
    },
    'entao devo ver o filme na lista': function (browser) {
        const movie = browser.page.movie()

        //visible = procura elemento na pagina, mas também procura pelo atributo display
        //present = verifica se o elemento está na página (em algum lugar)

        movie
            .waitForElementPresent('@list', 10000)
            .assert.containsText('@list', movieData.title)
    }
}