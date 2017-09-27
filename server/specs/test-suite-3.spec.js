TestSuiteHelper = require("../TestSuiteHelper");
testSuiteHelper = new TestSuiteHelper();

const sampleTestSuite =
    {
        description: "TODO MVC React",
        beforeEach: [
            {
                action: "Go to URL",
                string: "http://todomvc.com/examples/react/#/"
            },
            {
                action: "Enter text",
                css_selector: ".new-todo",
                string: "foo"
            }
        ],
        afterAll: [
            {
                action: "Refresh page"
            }
        ],
        testCases: [{
            description: "add an item in the TODO list",
            steps: [
                {
                    action: "Press key",
                    css_selector: ".new-todo",
                    key_code: 13
                },
                {
                    action: "Expect count to be",
                    css_selector: ".todo-list li",
                    number: 1
                },
                {
                    action: "Click",
                    css_selector: ".toggle-all"
                },
                {
                    action: "Click",
                    css_selector: ".clear-completed"
                }
            ]
        },
        {
            description: "clear input field before adding item in the TODO list",
            steps: [
                {
                    action: "Clear text field",
                    css_selector: ".new-todo"
                },
                {
                    action: "Expect not to be present",
                    css_selector: ".todo-list"
                }
            ]
        }]
    };

const isBeforeAllSet = false;
const isBeforeEachSet = true;
const isAfterEachSet = false;
const isAfterAllSet = true;

describe(sampleTestSuite.description, () => {
    testSuiteHelper.checkIfTestCasesAreSet(sampleTestSuite);
    testSuiteHelper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);
    testSuiteHelper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);
    testSuiteHelper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);
    testSuiteHelper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);
    testSuiteHelper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
