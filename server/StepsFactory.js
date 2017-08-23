const keycode = require("keycode");
const WaitersHelper = require("./waitersHelper");
const waitersHelper = new WaitersHelper();

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

        waitersHelper.waitForElementVisibility(elementToInteract);
        elementToInteract.sendKeys(text);
    }

    clearTextField(cssSelector) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToInteract);
        elementToInteract.clear();
    }

    click(cssSelector) {
        const elementToInteract = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementToBeClickable(elementToInteract);
        elementToInteract.click();
    }

    pressKey(cssSelector, keyCode) {
        const key = keycode(keyCode).toUpperCase();
        const elementToInteract = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToInteract);
        elementToInteract.sendKeys(protractor.Key[key]);
    }

    refresh() {
        browser.refresh();
    }

    expectToContain(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).toContain(text);
    }

    expectNotToContain(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).not.toContain(text);
    }

    expectToEqual(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).toEqual(text);
    }

    expectNotToEqual(cssSelector, text) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.getText()).not.toEqual(text);
    }

    expectCountToBe(cssSelector, number) {
        const elementsToCount = retrieveAllElements(cssSelector);
        const lastElementBasedOnElementsToCount = elementsToCount.last();

        waitersHelper.waitForElementVisibility(lastElementBasedOnElementsToCount);
        expect(elementsToCount.count()).toBe(number);
    }

    expectToBeDisplayed(cssSelector) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementVisibility(elementToExpect);
        expect(elementToExpect.isDisplayed()).toBe(true);
    }

    expectNotToBeDisplayed(cssSelector) {
        const elementToExpectNot = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementNotToBeVisible(elementToExpectNot);
        expect(elementToExpectNot.isDisplayed()).not.toBe(true);
    }

    expectToBePresent(cssSelector) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementPresence(elementToExpect);
        expect(elementToExpect.isPresent()).toBe(true);
    }

    expectNotToBePresent(cssSelector) {
        const elementToExpectNot = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementNotToBePresent(elementToExpectNot);
        expect(elementToExpectNot.isPresent()).not.toBe(true);
    }

    expectCurrentUrlToEqual(expectedUrl) {
        waitersHelper.waitForCurrentUrlToBeEqualTo(expectedUrl);
        expect(browser.getCurrentUrl()).toEqual(expectedUrl);
    }

    expectElementWithAttributeToContainValue(cssSelector, attribute, value) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementWithAttributeToContainValue(elementToExpect, attribute, value);
        expect(elementToExpect.getAttribute(attribute)).toContain(value);
    }

    expectElementWithAttributeNotToContainValue(cssSelector, attribute, value) {
        const elementToExpect = retrieveFirstElement(cssSelector);

        waitersHelper.waitForElementWithAttributeNotToContainValue(elementToExpect, attribute, value);
        expect(elementToExpect.getAttribute(attribute)).not.toContain(value);
    }
}

module.exports = StepsFactory;
