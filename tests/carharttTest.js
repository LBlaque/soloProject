module.exports = {
    beforeEach: browser => {
        carhartt = browser.page.carharttPage()
        carhartt
            .navigate()
    },
    after: browser => {
        browser.end()
    },
    // 'Add Item To Cart and Remove': browser => {
    //     carhartt
    //     .addRemoveItem()
    // },
    // 'Sign in': browser => {
    //     carhartt
    //     .signInFnc()
    // },
    // 'hover all menus': browser => {
    //     carhartt
    //     .waitForElementPresent('@menMenu')
    //     carhartt.moveToElement('@menMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@womenMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@kidsMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@flameResMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@giftGuidesMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@newMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@clearanceMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@brandsMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    //     carhartt.moveToElement('@discoverMenu', 5, 5)
    //     carhartt
    //     .pause(5000)
    // },
    // 'Use The Search Bar': browser => {
    //     carhartt
    //     .waitForElementPresent('@searchBar')
    //     .setValue('@searchBar', "Hoodie")
    //     .click('@searchGo')
    //     .waitForElementPresent('@hoodieItemOne')
    //     .pause(1000)
    //     .click('@homePage')
    //     .waitForElementVisible('@searchBar')
    //     .setValue('@searchBar', "FR Pants")
    //     .click('@searchGo')
    //     .waitForElementPresent('@frPantsItemOne')
    //     .click('@homePage')
    //     .waitForElementPresent('@homePageHero')
    //     .pause(1000)
    // }
    // 'Accessories Menu Clicker': browser => {
    //     carhartt
    //     .waitForElementPresent('@accessoriesMenu')
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesHat')
    //     .click('@accessoriesHat')
    //     carhartt.expect.element('@menuTitle').contains.text("HATS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5 ,5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesSocks')
    //     .click('@accessoriesSocks')
    //     carhartt.expect.element('@menuTitle').contains.text("SOCKS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesGloves')
    //     .click('@accessoriesGloves')
    //     carhartt.expect.element('@menuTitle').contains.text("GLOVES")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5 ,5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesBagsCoolers')
    //     .click('@accessoriesBagsCoolers')
    //     carhartt.expect.element('@menuTitle').contains.text("BAGS AND COOLERS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesToolBeltBag')
    //     .click('@accessoriesToolBeltBag')
    //     carhartt.expect.element('@menuTitle').contains.text("TOOL BAGS & TOOL BELTS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesBeltWallet')
    //     .click('@accessoriesBeltWallet')
    //     carhartt.expect.element('@menuTitleTwo').contains.text("BELTS & WALLETS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesDogGear')
    //     .click('@accessoriesDogGear')
    //     carhartt.expect.element('@menuTitle').contains.text("DOG GEAR")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesGlasses')
    //     .click('@accessoriesGlasses')
    //     carhartt.expect.element('@menuTitle').contains.text("SAFETY GLASSES")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesAprons')
    //     .click('@accessoriesAprons')
    //     carhartt.expect.element('@menuTitle').contains.text("WORK APRONS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesKneePads')
    //     .click('@accessoriesKneePads')
    //     carhartt.expect.element('@menuTitle').contains.text("KNEE PADS")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .pause(1000)
    //     .waitForElementPresent('@accessoriesTechGear')
    //     .click('@accessoriesTechGear')
    //     carhartt.expect.element('@menuTitle').contains.text("CELL PHONE ACCESSORIES")
    //     carhartt
    //     carhartt.moveToElement('@accessoriesMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@accessoriesStickers')
    //     .click('@accessoriesStickers')
    //     carhartt.expect.element('@menuTitle').contains.text("STICKERS")
    //     carhartt
    //     .click('@homePage')
    //     .waitForElementPresent('@homePageHero')
    // }
    // 'navigate accordions': browser => {
    //     carhartt
    //     .waitForElementPresent('@menMenu')
    //     carhartt.moveToElement('@menMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@menGifts')
    //     .click('@menGifts')
    //     carhartt.moveToElement('@menGiftProductBenefits', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@menGiftCategory')
    //     .waitForElementPresent('@menGiftCategoryOut')
    //     .click('@menGiftCategory')
    //     .pause(300)
    //     .click('@menGiftPrice')
    //     .waitForElementPresent('@menGiftPriceRange')
    //     .pause(300)
    //     .click('@menGiftPrice')
    //     .pause(300)
    //     .click('@menGiftRating')
    //     .waitForElementPresent('@menGiftRatingStar')
    //     .pause(300)
    //     .click('@menGiftRating')
    //     .pause(300)
    //     .click('@menGiftColor')
    //     .waitForElementPresent('@menGiftColorFirst')
    //     .pause(300)
    //     .click('@menGiftColor')
    //     .pause(300)
    //     .click('@menGiftSize')
    //     .waitForElementPresent('@menGiftSizeLarge')
    //     .pause(300)
    //     .click('@menGiftSize')
    //     .pause(300)
    //     .click('@menGiftProductBenefits')
    //     .waitForElementPresent('@menGiftProductBenefitsStretch')
    //     .pause(300)
    //     .click('@menGiftProductBenefits')
    //     .pause(300)
    //     .click('@homePage')
    //     .waitForElementPresent('@homePageHero')
    //     .pause(1000)
    // },
    // 'navigate accordions2': browser => {
    //     carhartt
    //     .waitForElementPresent('@menMenu')
    //     carhartt.moveToElement('@menMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@menOuterWear')
    //     .click('@menOuterWear')
    //     .waitForElementPresent('@menOuterWearCategory')
    //     .waitForElementPresent('@menOuterWearCategoryEle')
    //     carhartt.moveToElement('@menOuterWearAnsi', 5, 5)
    //     carhartt
    //     .click('@menOuterWearCategory')
    //     .click('@menOuterWearClimate')
    //     .waitForElementPresent('@menOuterWearClimateMild')
    //     .pause(300)
    //     .click('@menOuterWearClimate')
    //     .pause(300)
    //     .click('@menOuterWearSize')
    //     .waitForElementPresent('@menOuterWearSizeSXL')
    //     .pause(300)
    //     .click('@menOuterWearSize')
    //     .click('@menOuterWearColor')
    //     .waitForElementPresent('@menOuterWearColorBlk')
    //     .pause(300)
    //     .click('@menOuterWearColor')
    //     .click('@menOuterWearProduct')
    //     .waitForElementPresent('@menOuterWearProductPocket')
    //     .pause(300)
    //     .click('@menOuterWearProduct')
    //     .click('@menOuterWearPrice')
    //     .waitForElementPresent('@menOuterWearPriceLess')
    //     .pause(300)
    //     .click('@menOuterWearPrice')
    //     .click('@menOuterWearAnsi')
    //     .waitForElementPresent('@menOuterWearAnsiTwo')
    //     .pause(300)
    //     .click('@menOuterWearAnsi')
    //     .click('@menOuterWearRating')
    //     .waitForElementPresent('@menOuterWearRatingOne')
    //     .pause(300)
    //     .click('@homePage')
    //     .waitForElementPresent('@homePageHero')
    //     .pause(1000)
    // },
    // 'navigate accordions3': browser => {
    // carhartt
    //     .waitForElementPresent('@menMenu')
    //     carhartt.moveToElement('@menMenu', 5, 5)
    //     carhartt
    //     .waitForElementPresent('@menBibsAndCovers')
    //     .click('@menBibsAndCovers')
    //     .waitForElementPresent('@menBibsCategories')
    //     .waitForElementPresent('@menBibsCategoriesUnlined')
    //     carhartt.moveToElement('@menBibsFit', 5, 5)
    //     carhartt
    //     .click('@menBibsCategories')
    //     .pause(300)
    //     .click('@menBibsSize')
    //     .waitForElementPresent('@menBibsSizeSm')
    //     .pause(300)
    //     .click('@menBibsSize')
    //     .pause(300)
    //     .click('@menBibsColor')
    //     .waitForElementPresent('@menBibsColorBlk')
    //     .pause(300)
    //     .click('@menBibsColor')
    //     .pause(300)
    //     .click('@menBibsProduct')
    //     .waitForElementPresent('@menBibsProductDouble')
    //     .pause(300)
    //     .click('@menBibsProduct')
    //     .pause(300)
    //     .click('@menBibsPrice')
    //     .waitForElementPresent('@menBibsPriceLess')
    //     .pause(300)
    //     .click('@menBibsPrice')
    //     .pause(300)
    //     .click('@menBibsRating')
    //     .waitForElementPresent('@menBibsRatingStar')
    //     .pause(300)
    //     .click('@menBibsRating')
    //     .pause(300)
    //     .click('@menBibsFit')
    //     .waitForElementPresent('@menBibsFitRelax')
    //     .pause(300)
    //     .click('@menBibsFit')
    //     .pause(300)
    //     .click('@homePage')
    //     .waitForElementPresent('@homePageHero')
    //     .pause(1000)
    // },
}