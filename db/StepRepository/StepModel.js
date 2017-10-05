const assert = require("assert");
const { createValidPropertiesObject } = require("../helpers/classHelpers");

class StepModel {
    constructor() {
        this.id = null; // <number>
        this.description = null; // <string>
        this.action_id = null; // <number>
        this.test_id = null; // <number>
        this.css_selector = null; // <string>
        this.string = null; // <string>
        this.expectation = null; // <number>
        this.key_code = null; // <number>
    }

    toRecord(properties) {
        assert.ok(properties, "properties<object> are required");
        assert.ok(properties.id, "properties.id<number> is required");
        assert.ok(properties.description, "properties.description<string> is required");
        assert.ok(properties.action_id, "properties.action_id<number> is required");
        assert.ok(properties.test_id, "properties.test_id<number> is required");

        const _createValidPropertiesObject = createValidPropertiesObject.bind(this);

        // Only allow existing property names to be modified
        const record = Object.assign(
            {},
            this,
            _createValidPropertiesObject(properties)
        );

        return record;
    }
}

module.exports = StepModel;
