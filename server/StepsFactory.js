class StepsFactory {
    goToUrl(url) {
        browser.get(url);
    }

    enterText(cssSelector, text) {
        element.all(by.css(cssSelector)).first().sendKeys(text);
    }

    click(cssSelector) {
        element.all(by.css(cssSelector)).first().click();
    }

    pressKey(cssSelector, key) {
        element.all(by.css(cssSelector)).first().sendKeys(protractor.Key[key]);
    }

    expectToContain(cssSelector, text) {
        expect(element.all(by.css(cssSelector)).first().getText()).toContain(text);
    }
}

module.exports = StepsFactory;
