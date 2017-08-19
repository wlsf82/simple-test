function goToUrl(url) {
    browser.get(url);
}

function enterText(cssSelector, text) {
    element.all(by.css(cssSelector)).first().sendKeys(text);
}

function click(cssSelector) {
    element.all(by.css(cssSelector)).first().click();
}

function pressKey(cssSelector, key) {
    element.all(by.css(cssSelector)).first().sendKeys(protractor.Key[key]);
}

function expectToContain(cssSelector, text) {
    expect(element.all(by.css(cssSelector)).first().getText()).toContain(text);
}

function mapToSteps(testCase) {
    testCase.forEach((step) => {
        switch (step.action) {
            case "Go to URL":
                goToUrl(step.url);
                break;
            case "Enter text":
                enterText(step.css_selector, step.text);
                break;
            case "Press key":
                pressKey(step.css_selector, step.key);
                break;
            case "Click":
                click(step.css_selector);
                break;
            case "Expect to contain":
                expectToContain(step.css_selector, step.text);
                break;
        }
    });
}

function addStepsOnTestCaseBeasedOnDescription(description, steps) {
    it(description, () => {
        mapToSteps(steps);
    });
}

class Helper {
    addBeforeAllCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            beforeAll(() => {
                mapToSteps(testSuite.beforeAll);
            });
        }
    }

    addBeforeEachCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            beforeEach(() => {
                mapToSteps(testSuite.beforeEach);
            });
        }
    }

    addAfterAllCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            afterAll(() => {
                mapToSteps(testSuite.afterAll);
            });
        }
    }

    addAfterEachCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            afterEach(() => {
                mapToSteps(testSuite.afterEach);
            });
        }
    }

    addTestCasesCallbacksOnTestSuite(testSuite) {
        testSuite.testCases.forEach((testCase) => {
            addStepsOnTestCaseBeasedOnDescription(testCase.description, testCase.steps);
        });
    }
}

module.exports = Helper;
