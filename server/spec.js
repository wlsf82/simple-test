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
        action: "to contain",
        css_selector: "#search a",
        text: "foo"
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
    expect(element(by.css(cssSelector)).getText()).toContain(text);
}

const isBeforeAllSet = true;
const isBeforeEachSet = true;
const isAfterEachSet = true;
const isAfterAllSet = true;

function addBeforeAllCallBack(isSet) {
    if (isSet) {
        beforeAll(() => {
            mapToSteps(beforeAllSteps);
        });
    }
}

function addBeforeEachCallBack(isSet) {
    if (isSet) {
        beforeEach(() => {
            mapToSteps(beforeEachSteps);
        });
    }
}

function addAfterAllCallBack(isSet) {
    if (isSet) {
        afterAll(() => {
            mapToSteps(afterAllSteps);
        });
    }
}

function addAfterEachCallBack(isSet) {
    if (isSet) {
        afterEach(() => {
            mapToSteps(afterEachSteps);
        });
    }
}

function mapToSteps(array) {
    array.forEach((item, i) => {
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
            case "Expectation":
                expectToContain(item.css_selector, item.text);
                break;
        }
    });
}

describe("Google", () => {
    if (typeof(testSteps[0]) === "undefined") {
        console.log("Test steps are mandatory!");
        return;
    }
    addBeforeAllCallBack(isBeforeAllSet);

    addBeforeEachCallBack(isBeforeEachSet);

    it("search for a text", () => {
        mapToSteps(testSteps);
    });

    addAfterEachCallBack(isAfterEachSet);

    addAfterAllCallBack(isAfterAllSet);
});
