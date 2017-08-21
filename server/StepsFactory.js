const EC = protractor.ExpectedConditions;

function retrieveFirstElement(cssSelector) {
    return element.all(by.css(cssSelector)).first();
}

function retrieveAllElements(cssSelector) {
    return element.all(by.css(cssSelector));
}

class StepsFactory {
    goToUrl(url) {
        browser.get(url);
    }

    enterText(cssSelector, text) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToInteract), browser.params.DEFAULT_TIMEOUT_MS);
        elementToInteract.sendKeys(text);
    }

    clearTextField(cssSelector) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToInteract), browser.params.DEFAULT_TIMEOUT_MS);
        elementToInteract.clear();
    }

    click(cssSelector) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        browser.wait(EC.elementToBeClickable(elementToInteract), browser.params.DEFAULT_TIMEOUT_MS);
        elementToInteract.click();
    }

    pressKey(cssSelector, key) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToInteract), browser.params.DEFAULT_TIMEOUT_MS);
        elementToInteract.sendKeys(protractor.Key[key]);
    }

    refresh() {
        browser.refresh();
    }

    expectToContain(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToExpect), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpect.getText()).toContain(text);
    }

    expectNotToContain(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToExpect), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpect.getText()).not.toContain(text);
    }

    expectToEqual(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToExpect), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpect.getText()).toEqual(text);
    }

    expectNotToEqual(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToExpect), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpect.getText()).not.toEqual(text);
    }

    expectCountToBe(cssSelector, number) {
        const elementsToCount = retrieveAllElements(cssSelector);
        const firstElementBasedOnElementsToCount = elementsToCount.first();

        browser.wait(EC.visibilityOf(firstElementBasedOnElementsToCount), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementsToCount.count()).toBe(number);
    }

    expectToBeDisplayed(cssSelector) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        browser.wait(EC.visibilityOf(elementToExpect), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpect.isDisplayed()).toBe(true);
    }

    expectNotToBeDisplayed(cssSelector) {
        const elementToExpectNot = retrieveFirstElement(cssSelector);

        browser.wait(EC.invisibilityOf(elementToExpectNot), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpectNot.isDisplayed()).not.toBe(true);
    }

    expectToBePresent(cssSelector) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        browser.wait(EC.presenceOf(elementToExpect), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpect.isPresent()).toBe(true);
    }

    expectNotToBePresent(cssSelector) {
        const elementToExpectNot = retrieveFirstElement(cssSelector);

        browser.wait(EC.stalenessOf(elementToExpectNot), browser.params.DEFAULT_TIMEOUT_MS);
        expect(elementToExpectNot.isPresent()).not.toBe(true);
    }
}

module.exports = StepsFactory;
