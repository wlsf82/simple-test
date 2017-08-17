const testSuiteDescription = "foo";
const testCaseDescription = "bar";

const beforeAllSteps = [
    {
        description: "Go to URL",
        action: "Go to URL",
        text: "https://talkingabouttesting.com"
    }
];

const beforeEachSteps = [];

const afterEachSteps = [
    {
        description: "Go to URL",
        action: "Go to URL",
        text: "https://talkingabouttesting.com/entre-em-contato/"
    }
];

const afterAllSteps = [];

const testSteps = [
    {
        description: "Go to URL",
        action: "Go to URL",
        text: "https://google.com"
    },
    {
        description: "Search",
        action: "Enter text",
        css_selector: "#lst-ib",
        text: "foo"
    },
    {
        description: "Press ENTER",
        action: "Press key",
        css_selector: "#lst-ib",
        key: "ENTER"
    },
    {
        description: "Expectation",
        action: "To contain",
        css_selector: "#search h3 a",
        text: "Foo"
    }
];

function goToUrl(url) {
    browser.get(url);
}

function enterText(cssSelector, text) {
    element(by.css(cssSelector)).sendKeys(text);
}

function pressKey(cssSelector, key) {
    element(by.css(cssSelector)).sendKeys(protractor.Key[key]);
}

function expectToContain(cssSelector, text) {
    expect(element.all(by.css(cssSelector)).first().getText()).toContain(text);
}

const isBeforeAllSet = true;
const isBeforeEachSet = true;
const isAfterEachSet = true;
const isAfterAllSet = true;

function addBeforeAllCallback(isSet) {
    if (isSet) {
        beforeAll(() => {
            mapToSteps(beforeAllSteps);
        });
    }
}

function addBeforeEachCallback(isSet) {
    if (isSet) {
        beforeEach(() => {
            mapToSteps(beforeEachSteps);
        });
    }
}

function addAfterAllCallback(isSet) {
    if (isSet) {
        afterAll(() => {
            mapToSteps(afterAllSteps);
        });
    }
}

function addAfterEachCallback(isSet) {
    if (isSet) {
        afterEach(() => {
            mapToSteps(afterEachSteps);
        });
    }
}

function addTestStepsCallback(description) {
    it(description, () => {
        mapToSteps(testSteps);
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
            case "To contain":
                expectToContain(item.css_selector, item.text);
                break;
        }
    });
}

describe(testSuiteDescription, () => {
    if (typeof(testSteps[0]) === "undefined") {
        console.log("Test steps are mandatory!");
        return;
    }
    addBeforeAllCallback(isBeforeAllSet);

    addBeforeEachCallback(isBeforeEachSet);

    addTestStepsCallback(testCaseDescription);

    addAfterEachCallback(isAfterEachSet);

    addAfterAllCallback(isAfterAllSet);
});
