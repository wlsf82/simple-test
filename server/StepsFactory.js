const keycode = require("keycode");
const protractorHelper = require("protractor-helper");

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

        protractorHelper.sendKeysWhenVisible(elementToInteract, text);
    }

    clearTextField(cssSelector) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        protractorHelper.clearFieldWhenVisible(elementToInteract);
    }

    click(cssSelector) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        protractorHelper.clickWhenClickable(elementToInteract);
    }

    pressKey(cssSelector, keyCode) {
        const key = keycode(keyCode).toUpperCase();
        const elementToInteract = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementVisibility(elementToInteract);
        elementToInteract.sendKeys(protractor.Key[key]);
    }

    refresh() {
        browser.refresh();
    }

    expectToContain(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).toContain(text);
    }

    expectNotToContain(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).not.toContain(text);
    }

    expectToEqual(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).toEqual(text);
    }

    expectNotToEqual(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).not.toEqual(text);
    }

    expectCountToBe(cssSelector, number) {
        const elementsToCount = retrieveAllElements(cssSelector);
        const lastElementBasedOnElementsToCount = elementsToCount.last();

        protractorHelper.waitForElementVisibility(lastElementBasedOnElementsToCount);
        expect(elementsToCount.count()).toBe(number);
    }

    expectToBeDisplayed(cssSelector) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.isDisplayed()).toBe(true);
    }

    expectNotToBeDisplayed(cssSelector) {
        const elementToExpectNot = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementNotToBeVisible(elementToExpectNot);
        expect(elementToExpectNot.isDisplayed()).not.toBe(true);
    }

    expectToBePresent(cssSelector) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementPresence(elementToExpect);
        expect(elementToExpect.isPresent()).toBe(true);
    }

    expectNotToBePresent(cssSelector) {
        const elementToExpectNot = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementNotToBePresent(elementToExpectNot);
        expect(elementToExpectNot.isPresent()).not.toBe(true);
    }

    expectCurrentUrlToEqual(expectedUrl) {
        protractorHelper.waitForUrlToBeEqualToExpectedUrl(expectedUrl);
        expect(browser.getCurrentUrl()).toEqual(expectedUrl);
    }

    expectElementWithAttributeToContainValue(cssSelector, attribute, value) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementAttributeToHaveValue(elementToExpect, attribute, value);
        expect(elementToExpect.getAttribute(attribute)).toContain(value);
    }

    expectElementWithAttributeNotToContainValue(cssSelector, attribute, value) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        protractorHelper.waitForElementAttributeNotToHaveValue(elementToExpect, attribute, value);
        expect(elementToExpect.getAttribute(attribute)).not.toContain(value);
    }
}

module.exports = StepsFactory;
