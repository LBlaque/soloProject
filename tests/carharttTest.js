module.exports = {
    beforeEach: browser => {
        carhartt = browser.page.carharttPage()
        carhartt
            .navigate()
    },
    after: browser => {
        browser.end()
    },
    'Add Item To Cart and Remove': browser => {
        carhartt
        .addRemoveItem()
    },
}