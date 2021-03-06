const MapToStepsHelper = require("./MapToStepsHelper");
const TestCasesFactory = require("./TestCasesFactory");

const mapToStepsHelper = new MapToStepsHelper();
const testCasesFactory = new TestCasesFactory();

class TestSuiteHelper {
    addBeforeAllCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            beforeAll(() => {
                mapToStepsHelper.addSteps(testSuite.beforeAll);
            });
        }
    }

    addBeforeEachCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            beforeEach(() => {
                mapToStepsHelper.addSteps(testSuite.beforeEach);
            });
        }
    }

    addAfterAllCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            afterAll(() => {
                mapToStepsHelper.addSteps(testSuite.afterAll);
            });
        }
    }

    addAfterEachCallbackOnTestSuite(testSuite, isSet) {
        if (isSet) {
            afterEach(() => {
                mapToStepsHelper.addSteps(testSuite.afterEach);
            });
        }
    }

    addTestCasesCallbacksOnTestSuite(testSuite) {
        testSuite.testCases.forEach((testCase) => {
            testCasesFactory.addStepsOnTestCaseBeasedOnDescription(testCase.description, testCase.steps);
        });
    }

    checkIfTestCasesAreSet(testSuite) {
        if (typeof(testSuite.testCases) === "undefined" || typeof(testSuite.testCases[0]) === "undefined") {
            console.log("Test cases are mandatory!");
            return;
        }
    }
}

module.exports = TestSuiteHelper;
