const EC = protractor.ExpectedConditions;

function elementWithAttributeHasValue(htmlElement, attribute, value) {
    return htmlElement.getAttribute(attribute).then((elementAttribute) => {
        return elementAttribute.includes(value);
    });
}

function elementWithAttributeHasNotValue(htmlElement, attribute, value) {
    return htmlElement.getAttribute(attribute).then((elementAttribute) => {
        return !elementAttribute.includes(value);
    });
}

class WaitersHelper {
    waitForElementVisibility(htmlElement) {
        browser.wait(EC.visibilityOf(htmlElement), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForElementNotToBeVisible(htmlElement) {
        browser.wait(EC.invisibilityOf(htmlElement), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForElementPresence(htmlElement) {
        browser.wait(EC.presenceOf(htmlElement), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForElementNotToBePresent(htmlElement) {
        browser.wait(EC.stalenessOf(htmlElement), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForElementWithAttributeToContainValue(htmlElement, attribute, value) {
        browser.wait(elementWithAttributeHasValue(htmlElement, attribute, value), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForElementWithAttributeNotToContainValue(htmlElement, attribute, value) {
        browser.wait(elementWithAttributeHasNotValue(htmlElement, attribute, value), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForElementToBeClickable(htmlElement) {
        browser.wait(EC.elementToBeClickable(htmlElement), browser.params.DEFAULT_TIMEOUT_MS);
    }

    waitForCurrentUrlToBeEqualTo(url) {
        browser.wait(EC.urlIs(url), browser.params.DEFAULT_TIMEOUT_MS);
    }
}

module.exports = WaitersHelper;
