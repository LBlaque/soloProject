module.exports = {
    url: 'https://www.carhartt.com/',
    commands: [],
    elements: {
        menMenu: {
            selector: '//*[@id="accessible-megamenu-1575909199748-2"]',
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
            selector: '//*[@id="catalogEntry_img24591"]/img[2]',
            locateStrategy: 'xpath'
        },
        firstOuterView: {
            selector: '//*[@id="J141_quickview"]',
            locateStrategy: 'xpath'
        },
        colorMoss: {
            selector: '//*[@id="swatches"]/ul/li[3]',
            locateStrategy: 'xpath'
        },
        xLarge: {
            selector: '/html/body/div[18]/div/div/div[2]/div[2]/div/div[6]/div[1]/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        xLargeTall: {
            selector: '/html/body/div[18]/div/div/div[2]/div[2]/div/div[6]/div[2]/ul/li[2]/a',
            locateStrategy: 'xpath'
        },
        addToCart: {
            selector: '/html/body/div[18]/div/div/div[2]/div[2]/div/ul/li[2]/a',
            locateStrategy: 'xpath'
        },
        cartView: {
            selector: '//*[@id="miniCartLink"]',
            locateStrategy: 'xpath'
        },
        homePage: {
            selector: '//*[@id="top-header"]/div[3]/div[2]/div[1]/div[2]/div/a/div',
            locateStrategy: 'xpath'
        },
        cartItemOne: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[1]/a',
            locatestrategy: 'xpath'
        },
        cartRemoveItemOne: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[4]/div[3]/a',
            locateStrategy: 'xpath'
        },
        emptyCart: {
            selector: '//*[@id="top-bar-summary"]/div/div/div',
            locateStrategy: 'xpath'
        },
    }
}