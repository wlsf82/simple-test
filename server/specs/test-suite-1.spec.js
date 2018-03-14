TestSuiteHelper = require("../TestSuiteHelper");
testSuiteHelper = new TestSuiteHelper();

const sampleTestSuite =
    {
        description: "Google",
        beforeAll: [
            {
                description: "Go to URL",
                string: "https://gmail.com"
            }
        ],
        beforeEach: [
            {
                description: "Go to URL",
                string: "https://google.com"
            },
            {
                description: "Click",
                css_selector: "input[name='btnI']"
            }
        ],
        afterEach: [
            {
                description: "Go to URL",
                string: "https://drive.google.com"
            }
        ],
        afterAll: [
            {
                description: "Go to URL",
                string: "http://google.com/pagenotfound"
            }
        ],
        testCases: [{
            description: "search for 'foo'",
            steps: [
                {
                    description: "Go to URL",
                    string: "https://google.com"
                },
                {
                    description: "Enter text",
                    css_selector: "#lst-ib",
                    string: "foo"
                },
                {
                    description: "Press key",
                    css_selector: "#lst-ib",
                    key_code: 13
                },
                {
                    description: "Expect to contain",
                    css_selector: "#search h3 a",
                    string: "Foo"
                }
            ]
        },
        {
            description: "search for 'foobar'",
            steps: [
                {
                    description: "Go to URL",
                    string: "https://google.com"
                },
                {
                    description: "Enter text",
                    css_selector: "#lst-ib",
                    string: "foobar"
                },
                {
                    description: "Press key",
                    css_selector: "#lst-ib",
                    key_code: 13
                },
                {
                    description: "Expect to contain",
                    css_selector: "#search h3 a",
                    string: "foobar"
                }
            ]
        }]
    };

const isBeforeAllSet = true;
const isBeforeEachSet = true;
const isAfterEachSet = true;
const isAfterAllSet = true;

describe(sampleTestSuite.description, () => {
    testSuiteHelper.checkIfTestCasesAreSet(sampleTestSuite);
    testSuiteHelper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);
    testSuiteHelper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);
    testSuiteHelper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);
    testSuiteHelper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);
    testSuiteHelper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
