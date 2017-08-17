const beforeAllSteps = [
    {
        description: "Go to URL",
        action: "Go to URL",
        text: "https://talkingabouttesting.com"
    }
];

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
    it("search for a text", () => {
        mapToSteps(testSteps);
    });
});
