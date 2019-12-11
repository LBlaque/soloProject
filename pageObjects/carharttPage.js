var carharttCommands = {
    addRemoveItem: function () {
        this
        carhartt
        .waitForElementPresent('@menMenu')
        carhartt.moveToElement('@menMenu', 5, 5)
        carhartt
        .waitForElementPresent('@menGifts')
        .click('@menGifts')
        .waitForElementPresent('@outwear')
        .click('@outwear')
        carhartt.moveToElement('@firstOuterFront', 5, 5)
        carhartt
        .pause(300)
        .waitForElementPresent('@firstOuterView')
        .click('@firstOuterView')
        .waitForElementPresent('@productScreen')
        .waitForElementPresent('@colorBlack')
        .waitForElementPresent('@BTXLarge')
        .pause(1500)
        .click('@colorBlack')
        .click('@BTXLarge')
        .waitForElementPresent('@addToCart')
        .pause(1500)
        .click('@addToCart')
        .pause(1500)
        .waitForElementPresent('@cartView')
        .click('@cartView')
        .waitForElementPresent('@itemOneColorAttr')
        .waitForElementPresent('@itemOneSizeAttr')
        .waitForElementPresent('@itemOneQtyAttr')
        carhartt.expect.element('@itemOneColorAttr').contains.text("COLOR: BLACK")
        carhartt
        carhartt.expect.element('@itemOneSizeAttr').contains.text("SIZE: XLARGE (TALL)")
        carhartt
        carhartt.expect.element('@itemOneQtyAttr').contains.text("QTY/PRICE: 1 @ $129.99")
        carhartt
        .click('@cartRemoveItemOne')
        carhartt.expect.element('@emptyCart').contains.text("SHOPPING CART - 0 ITEMS")
        carhartt
        .click('@homePage')
        .pause(1000)
        return this
    },
    signInFnc: function () {
        this
        carhartt
        .click('@signIn')
        .waitForElementPresent('@emailSignIn')
        .pause(300)
        .setValue('@emailSignIn', "kanbanonopolis@gmail.com")
        .setValue('@emailPassword', "nohopefordeadmen1")
        .click('@loginSubmit')
        .pause(300)
        .waitForElementPresent('@signOut')
        .click('@signOut')
        .waitForElementPresent('@homePage')
        .pause(3000)
        return this
    },
}
module.exports = {
    url: 'https://www.carhartt.com/',
    commands: [carharttCommands],
    elements: {
        searchBar: {
            selector: '//*[@id="site-search"]/div/div/input',
            locateStrategy: 'xpath'
        },
        menMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[1]/a',
            locateStrategy: 'xpath'
        },
        menGifts: {
            selector: '//*[@id="mainMen"]/div/ul[1]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menOuterWear: {
            selector: '//*[@id="mainMen"]/div/ul[1]/li[3]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menOuterWearCategory: {
            selector: '//*[@id="section_button__5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearCategoryEle: {
            selector: '//*[@id="SBN_Jackets & Coats_5_-1004_3074457345618259709"]/div',
            locateStrategy: 'xpath'
        },
        menOuterWearClimate: {
            selector: '//*[@id="section_button_ads_f13006_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearClimateMild: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_7_Mild"]',
            locateStrategy: 'xpath'
        },
        menOuterWearSize: {
            selector: '//*[@id="section_button_ads_f12501_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearSizeSXL: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_3_S-XL"]',
            locateStrategy: 'xpath'
        },
        menOuterWearColor: {
            selector: '//*[@id="section_button_ads_f13017_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearColorBlk: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_57_Black"]',
            locateStrategy: 'xpath'
        },
        menOuterWearProduct: {
            selector: '//*[@id="section_button_ads_f13009_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearProductPocket: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_35_Inside_Pocket"]',
            locateStrategy: 'xpath'
        },
        menOuterWearPrice: {
            selector: '//*[@id="section_button_5_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearPriceLess: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_37_Less_than_$100"]',
            locateStrategy: 'xpath'
        },
        menOuterWearAnsi: {
            selector: '//*[@id="section_button_ads_f13002_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearAnsiTwo: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_1_2"]',
            locateStrategy: 'xpath'
        },
        menOuterWearRating: {
            selector: '//*[@id="section_button_ads_f13005_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menOuterWearRatingOne: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_1_0"]',
            locateStrategy: 'xpath'
        },
        menBibsAndCovers: {
            selector: '//*[@id="mainMen"]/div/ul[1]/li[4]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menBibsCategories: {
            selector: '//*[@id="section_button__5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsCategoriesUnlined: {
            selector: '//*[@id="SBN_Unlined Bibs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsSize: {
            selector: '//*[@id="section_button_ads_f12501_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsSizeSm: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_8_SMALL"]',
            locateStrategy: 'xpath'
        },
        menBibsColor: {
            selector: '//*[@id="section_button_ads_f13017_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsColorBlk: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_15_Black"]',
            locateStrategy: 'xpath'
        },
        menBibsProduct: {
            selector: '//*[@id="section_button_ads_f13009_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsProductDouble: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_14_Double_Front/Knee"]',
            locateStrategy: 'xpath'
        },
        menBibsPrice: {
            selector: '//*[@id="section_button_3_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsPriceLess: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_14_Less_than_$100"]',
            locateStrategy: 'xpath'
        },
        menBibsRating: {
            selector: '//*[@id="section_button_ads_f13005_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsRatingStar: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_1_5"]',
            locateStrategy: 'xpath'
        },
        menBibsFit: {
            selector: '//*[@id="section_button_ads_f13010_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menBibsFitRelax: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_1_Relaxed"]',
            locateStrategy: 'xpath'
        },
        menHoodiesAndSweats: {
            selector: '//*[@id="mainMen"]/div/ul[1]/li[5]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menShirts: {
            selector: '//*[@id="mainMen"]/div/ul[1]/li[6]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menPants: {
            selector: '//*[@id="mainMen"]/div/ul[2]/li[1]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menBoots: {
            selector: '//*[@id="mainMen"]/div/ul[2]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menAccessories: {
            selector: '//*[@id="mainMen"]/div/ul[2]/li[3]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menThermals: {
            selector: '//*[@id="mainMen"]/div/ul[2]/li[4]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menUnderwear: {
            selector: '//*[@id="mainMen"]/div/ul[2]/li[5]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menBigTall: {
            selector: '//*[@id="mainMen"]/div/ul[3]/li[1]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menCollections: {
            selector: '//*[@id="mainMen"]/div/ul[3]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        menShopIndustry: {
            selector: '//*[@id="mainMen"]/div/ul[3]/li[3]/a/span[2]',
            locateStrategy: 'xpath'
        },
        womenMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[2]/a',
            locateStrategy: 'xpath'
        },
        kidsMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        accessoriesMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[4]/a',
            locateStrategy: 'xpath'
        },
        accessoriesHat: {
            selector: '//*[@id="mainAccessories"]/div/ul[1]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesSocks: {
            selector: '//*[@id="mainAccessories"]/div/ul[1]/li[3]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesGloves: {
            selector: '//*[@id="mainAccessories"]/div/ul[1]/li[4]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesBagsCoolers: {
            selector: '//*[@id="mainAccessories"]/div/ul[1]/li[5]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesToolBeltBag: {
            selector: '//*[@id="mainAccessories"]/div/ul[2]/li[1]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesBeltWallet: {
            selector: '//*[@id="mainAccessories"]/div/ul[2]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesDogGear: {
            selector: '//*[@id="mainAccessories"]/div/ul[2]/li[3]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesGlasses: {
            selector: '//*[@id="mainAccessories"]/div/ul[2]/li[4]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesAprons: {
            selector: '//*[@id="mainAccessories"]/div/ul[3]/li[1]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesKneePads: {
            selector: '//*[@id="mainAccessories"]/div/ul[3]/li[2]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesTechGear: {
            selector: '//*[@id="mainAccessories"]/div/ul[3]/li[3]/a/span[2]',
            locateStrategy: 'xpath'
        },
        accessoriesStickers: {
            selector: '//*[@id="mainAccessories"]/div/ul[3]/li[4]/a/span[2]',
            locateStrategy: 'xpath'
        },
        flameResMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[5]/a',
            locateStrategy: 'xpath'
        },
        giftGuidesMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[6]/a',
            locateStrategy: 'xpath'
        },
        newMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[7]/a',
            locateStrategy: 'xpath'
        },
        clearanceMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[8]/a',
            locateStrategy: 'xpath'
        },
        brandsMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[9]/a',
            locateStrategy: 'xpath'
        },
        discoverMenu: {
            selector: '/html/body/div[3]/div/header/div[3]/div[2]/div[2]/div[1]/div/nav/ul/li[10]/a',
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
        homePageHero: {
            selector: '//*[@id="home-hero"]',
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
        emailSignIn: {
            selector: '//*[@id="email-modal"]',
            locateStrategy: 'xpath'
        },
        emailPassword: {
            selector: '//*[@id="password-modal"]',
            locateStrategy: 'xpath'
        },
        signOut: {
            selector: '//*[@id="top-header"]/div[3]/div[2]/div[1]/div[1]/nav[2]/ul/li[3]/a',
            locateStrategy: 'xpath'
        },
        itemOneColorAttr: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div[1]',
            locateStrategy: 'xpath'
        },
        itemOneSizeAttr: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div[2]',
            locateStrategy: 'xpath'
        },
        itemOneQtyAttr: {
            selector: '//*[@id="checkout"]/div[2]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div[3]',
            locateStrategy: 'xpath'
        },
        menGiftCategory: {
            selector: '//*[@id="section_button_ads_f13011_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menGiftCategoryOut: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_4_Outerwear"]',
            locateStrategy: 'xpath'
        },
        menGiftPrice: {
            selector: '//*[@id="section_button_1_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menGiftPriceRange: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_32_Less_than_$100"]',
            locateStrategy: 'xpath'
        },
        menGiftRating: {
            selector: '//*[@id="section_button_ads_f13005_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menGiftRatingStar: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_6_0"]',
            locateStrategy: 'xpath'
        },
        menGiftColor: {
            selector: '//*[@id="section_button_ads_f13017_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menGiftColorFirst: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_27_Black"]',
            locateStrategy: 'xpath'
        },
        menGiftSize: {
            selector: '//*[@id="section_button_ads_f12501_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menGiftSizeLarge: {
            selector: '/html/body/div[3]/div/div[3]/div[2]/div[1]/div/div/div[3]/div[1]/div/div/div/div/div[2]/form/fieldset[5]/div/div/div[2]/ul[1]/li[1]/a',
            locateStrategy: 'xpath'
        },
        menGiftProductBenefits: {
            selector: '//*[@id="section_button_ads_f13009_ntk_cs_5_-1004_3074457345618259709"]',
            locateStrategy: 'xpath'
        },
        menGiftProductBenefitsStretch: {
            selector: '//*[@id="facetButton_5_-1004_3074457345618259709_6_Stretch"]',
            locateStrategy: 'xpath'
        },
        hoodieItemOne: {
            selector: '//*[@id="catalogEntry_img35812"]/img[1]',
            locateStrategy: 'xpath'
        },
        frPantsItemOne: {
            selector: '//*[@id="catalogEntry_img23026"]/img[1]',
            locateStrategy: 'xpath'
        },
        regSmall: 'a[data-attr-val-id="7000000000000001229"]',
        regMedium: 'a[data-attr-val-id="7000000000000001226"]',
        regLarge: 'a[data-attr-val-id="7000000000000001223"]',
        regXLarge: 'a[data-attr-val-id="7000000000000001231"]',
        regXXLarge: 'a[data-attr-val-id="7000000000000001234"]',
        BTLarge: 'a[data-attr-val-id="7000000000000001312"]',
        BTXLarge: 'a[data-attr-val-id="7000000000000001318"]',
        BTXXLarge: 'a[data-attr-val-id="7000000000000001320"]',
        BTXXXLarge: 'a[data-attr-val-id="7000000000000001327"]',
        BTXXXXLarge: 'a[data-attr-val-id="7000000000000001330"]',
        BTLargeReg: 'a[data-attr-val-id="7000000000000001244"]',
        BTXLargeReg: 'a[data-attr-val-id="7000000000000001250"]',
        addToCart: 'a.add-to-cart',
        productScreen: 'div.product',
        colorDarkBrown: 'a[title="Dark Brown"]',
        colorBlack: 'a[title="Black"]',
        colorMoss: 'a[title="Moss"]',
        colorBrown: 'a[title="Carhartt Brown"]',
        colorShadow: 'a[title="Shadow"]',
        // cartView: 'a[id="miniCartLink"]',
        signIn: 'a#signin-modal-link',
        loginSubmit: 'button[id="logonSubmitBtn"]',
        searchGo: 'div[class="icon_search_change"]',
        menuTitle: 'h1.t9',
        menuTitleTwo: 'h2.t8',
    }
}