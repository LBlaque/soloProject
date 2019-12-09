var carharttCommands = {
    addRemoveItem: function () {
        this
        carhartt
        .waitForElementPresent('@menMenu')
        carhartt.moveToElement('@menMenu', 5, 5)
        carhartt
        .waitForElementPresent('@gifts')
        .click('@gifts')
        .waitForElementPresent('@outwear')
        .click('@outwear')
        carhartt.moveToElement('@firstOuterFront', 5, 5)
        carhartt
        .pause(300)
        .waitForElementPresent('@firstOuterView')
        .click('@firstOuterView')
        .waitForElementPresent('@productScreen')
        .waitForElementPresent('@colorMoss')
        .waitForElementPresent('@xLargeTall')
        .pause(1500)
        .click('@colorMoss')
        .click('@xLargeTall')
        .waitForElementPresent('@addToCart')
        .pause(1500)
        .click('@addToCart')
        .pause(1500)
        .waitForElementPresent('@cartView')
        .click('@cartView')
        .waitForElementPresent('@cartItemOne')
        carhartt.expect.element('@cartItemOne').contains.text("SANDSTONE SHERPA-LINED SIERRA JACKET")
        carhartt
        .click('@cartRemoveItemOne')
        carhartt.expect.element('@emptyCart').contains.text("SHOPPING CART - 0 ITEMS")
        carhartt
        .click('@homePage')
        .pause(1000)
        return this
    },
}
module.exports = {
    url: 'https://www.carhartt.com/',
    commands: [carharttCommands],
    elements: {
        menMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        gifts: {
            selector: '//*[@id="mainMen"]/div/ul[1]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        outwear: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_4_Outerwear"]',
            locateStrategy: 'xpath'
        },
        firstOuterFront: {
            selector: '//*[@id="catalogEntry_img24591"]/img[1]',
            locateStrategy: 'xpath'
        },
        firstOuterView: {
            selector: '//*[@id="J141_quickview"]',
            locateStrategy: 'xpath'
        },
        xLarge: {
            selector: '/html/body/div[18]/div/div/div[2]/div[2]/div/div[6]/div[1]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        productAttrs: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[3]',
            locateStrategy: 'xpath'
        },
        homePage: {
            selector: '//*[@id="top-header"]/div[3]/div[2]/div[1]/div[2]/div/a/div',
            locateStrategy: 'xpath'
        },
        cartRemoveItemOne: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[4]/div[3]/a',
            locateStrategy: 'xpath'
        },
        emptyCart: {
            selector: '//*[@id="top-bar-summary"]/div/div/div',
            locateStrategy: 'xpath'
        },
        cartView: {
            selector: '//span[text()="MY CART"]',
            locateStrategy: 'xpath'
        },
        xLargeTall: 'a[data-attr-val-id="7000000000000001318"]',
        addToCart: 'a.add-to-cart',
        cartItemOne: 'div.t12 a',
        productScreen: 'div.product',
        colorMoss: 'a[title="Moss"]',
        // cartView: 'a[id="miniCartLink"]',
    }
}