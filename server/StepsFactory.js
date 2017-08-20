class StepsFactory {
    goToUrl(url) {
        browser.get(url);
    }

    enterText(cssSelector, text) {
        element.all(by.css(cssSelector)).first().sendKeys(text);
    }

    clearTextField(cssSelector) {
        element.all(by.css(cssSelector)).first().clear();
    }

    click(cssSelector) {
        element.all(by.css(cssSelector)).first().click();
    }

    pressKey(cssSelector, key) {
        element.all(by.css(cssSelector)).first().sendKeys(protractor.Key[key]);
    }

    refresh() {
        browser.refresh();
    }

    expectToContain(cssSelector, text) {
        expect(element.all(by.css(cssSelector)).first().getText()).toContain(text);
    }

    expectNotToContain(cssSelector, text) {
        expect(element.all(by.css(cssSelector)).first().getText()).not.toContain(text);
    }

    expectToEqual(cssSelector, text) {
        expect(element.all(by.css(cssSelector)).first().getText()).toEqual(text);
    }

    expectNotToEqual(cssSelector, text) {
        expect(element.all(by.css(cssSelector)).first().getText()).not.toEqual(text);
    }

    expectCountToBe(cssSelector, number) {
        expect(element.all(by.css(cssSelector)).count()).toBe(number);
    }

    expectToBeDisplayed(cssSelector) {
        expect(element.all(by.css(cssSelector)).first().isDisplayed().toBe(true));
    }

    expectNotToBeDisplayed(cssSelector) {
        expect(element.all(by.css(cssSelector)).first().isDisplayed().not.toBe(true));
    }

    expectToBePresent(cssSelector) {
        expect(element.all(by.css(cssSelector)).first().isPresent().toBe(true));
    }

    expectNotToBePresent(cssSelector) {
        expect(element.all(by.css(cssSelector)).first().isPresent().not.toBe(true));
    }
}

module.exports = StepsFactory;
