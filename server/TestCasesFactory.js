const MapToStepsHelper = require("./MapToStepsHelper");
const mapToStepsHelper = new MapToStepsHelper();

class TestCasesFactory {
    addStepsOnTestCaseBeasedOnDescription(description, steps) {
        it(description, () => {
            mapToStepsHelper.addSteps(steps);
        });
    }
}

module.exports = TestCasesFactory;
