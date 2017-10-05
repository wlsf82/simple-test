const assert = require("assert");
const { createValidPropertiesObject } = require("../helpers/classHelpers");

class TestModel {
    constructor() {
        this.id = null; // <number>
        this.description = null; // <string>
        this.project_id = null; // <number>
    }

    toRecord(properties) {
        assert.ok(properties, "properties<object> are required");
        assert.ok(properties.id, "properties.id<number> is required");
        assert.ok(properties.description, "properties.description<string> is required");
        assert.ok(properties.project_id, "properties.project_id<number> is required");

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

module.exports = TestModel;
