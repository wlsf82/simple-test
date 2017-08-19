const sampleTestSuite =
    {
        description: "Google",
        beforeAll: [
            {
                action: "Go to URL",
                text: "https://gmail.com"
            }
        ],
        beforeEach: [
            {
                action: "Go to URL",
                text: "https://google.com"
            },
            {
                action: "Click",
                css_selector: "input[name='btnI']"
            }
        ],
        afterEach: [
            {
                action: "Go to URL",
                text: "https://drive.google.com"
            }
        ],
        afterAll: [
            {
                action: "Go to URL",
                text: "http://google.com/pagenotfound"
            }
        ],
        testCases: [{
            description: "search for 'foo'",
            steps: [
                {
                    action: "Go to URL",
                    text: "https://google.com"
                },
                {
                    action: "Enter text",
                    css_selector: "#lst-ib",
                    text: "foo"
                },
                {
                    action: "Press key",
                    css_selector: "#lst-ib",
                    key: "ENTER"
                },
                {
                    action: "Expect to contain",
                    css_selector: "#search h3 a",
                    text: "Foo"
                }
            ]
        },
        {
            description: "search for 'foobar'",
            steps: [
                {
                    action: "Go to URL",
                    text: "https://google.com"
                },
                {
                    action: "Enter text",
                    css_selector: "#lst-ib",
                    text: "foobar"
                },
                {
                    action: "Press key",
                    css_selector: "#lst-ib",
                    key: "ENTER"
                },
                {
                    action: "Expect to contain",
                    css_selector: "#search h3 a",
                    text: "foobar"
                }
            ]
        }]
    };

const isBeforeAllSet = true;
const isBeforeEachSet = true;
const isAfterEachSet = true;
const isAfterAllSet = true;

function addBeforeAllCallback(isSet) {
    if (isSet) {
        beforeAll(() => {
            mapToSteps(sampleTestSuite.beforeAll);
        });
    }
}

function addBeforeEachCallback(isSet) {
    if (isSet) {
        beforeEach(() => {
            mapToSteps(sampleTestSuite.beforeEach);
        });
    }
}

function addAfterAllCallback(isSet) {
    if (isSet) {
        afterAll(() => {
            mapToSteps(sampleTestSuite.afterAll);
        });
    }
}

function addAfterEachCallback(isSet) {
    if (isSet) {
        afterEach(() => {
            mapToSteps(sampleTestSuite.afterEach);
        });
    }
}

function addTestCasesCallbacksOnTestSuite(testSuite) {
    testSuite.testCases.forEach((testCase) => {
        addStepsOnTestCaseBeasedOnDescription(testCase.description, testCase.steps);
    });
}

function addStepsOnTestCaseBeasedOnDescription(description, steps) {
    it(description, () => {
        mapToSteps(steps);
    });
}

function mapToSteps(array) {
    array.forEach((item) => {
        switch (item.action) {
            case "Go to URL":
                goToUrl(item.text);
                break;
            case "Enter text":
                enterText(item.css_selector, item.text);
                break;
            case "Press key":
                pressKey(item.css_selector, item.key);
                break;
            case "Click":
                click(item.css_selector);
                break;
            case "Expect to contain":
                expectToContain(item.css_selector, item.text);
                break;
        }
    });
}

function goToUrl(url) {
    browser.get(url);
}

function enterText(cssSelector, text) {
    element(by.css(cssSelector)).sendKeys(text);
}

function click(cssSelector) {
    element(by.css(cssSelector)).click();
}

function pressKey(cssSelector, key) {
    element(by.css(cssSelector)).sendKeys(protractor.Key[key]);
}

function expectToContain(cssSelector, text) {
    expect(element.all(by.css(cssSelector)).first().getText()).toContain(text);
}

describe(sampleTestSuite.description, () => {
    if (typeof(sampleTestSuite.testCases) === "undefined" || typeof(sampleTestSuite.testCases[0]) === "undefined") {
        console.log("Test steps are mandatory!");
        return;
    }

    addBeforeAllCallback(isBeforeAllSet);

    addBeforeEachCallback(isBeforeEachSet);

    addTestCasesCallbacksOnTestSuite(sampleTestSuite);

    addAfterEachCallback(isAfterEachSet);

    addAfterAllCallback(isAfterAllSet);
});
