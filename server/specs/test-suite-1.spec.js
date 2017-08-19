Helper = require("../helper");
helper = new Helper();

const sampleTestSuite =
    {
        description: "Google",
        beforeAll: [
            {
                action: "Go to URL",
                url: "https://gmail.com"
            }
        ],
        beforeEach: [
            {
                action: "Go to URL",
                url: "https://google.com"
            },
            {
                action: "Click",
                css_selector: "input[name='btnI']"
            }
        ],
        afterEach: [
            {
                action: "Go to URL",
                url: "https://drive.google.com"
            }
        ],
        afterAll: [
            {
                action: "Go to URL",
                url: "http://google.com/pagenotfound"
            }
        ],
        testCases: [{
            description: "search for 'foo'",
            steps: [
                {
                    action: "Go to URL",
                    url: "https://google.com"
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
                    url: "https://google.com"
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

describe(sampleTestSuite.description, () => {
    if (typeof(sampleTestSuite.testCases) === "undefined" || typeof(sampleTestSuite.testCases[0]) === "undefined") {
        console.log("Test steps are mandatory!");
        return;
    }

    helper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);

    helper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);

    helper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);

    helper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);

    helper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
