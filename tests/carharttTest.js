module.exports = {
    beforeEach: browser => {
        carhartt = browser.page.carharttPage.js()
        carhartt
            .navigate()
    },
    after: browser => {
        browser.end()
    },
    'Add Item To Cart and Remove': browser => {
        carhartt
            .waitForElementPresent('@menMenu')
            .moveToElement('@menMenu')
            .waitforElementPresent('@gifts')
            .click('@gifts')
            .waitForElementPresent('@outwear')
            .moveToElement('@firstOuterFront')
            .waitForElementPresent('@firstOuterView')
            .click('@firstOuterView')
            .click('@colorMoss')
            .click('xLargeTall')
            .click('@addToCart')
            .waitForElementPresent('@cartView')
            .click('@cartView')
            .waitForElementPresent('@cartItemOne')
            carhartt.expect.element('@cartItemOne').contains.text("Sandstone Sherpa-Lined Sierra Jacket")
            carhartt
            .click('cartRemoveItemOne')
            .waitForElementPresent('@emptyCart')
            .click('@homePage')
            .pause(10000)
        }
}