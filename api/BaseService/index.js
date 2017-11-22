const assert = require("assert");

class BaseService {
    constructor({ repository }) {
        assert.ok(repository, "repository is required");

        this.repository = repository;
    }

    fetchAll() {
        return this.repository.fetchAll();
    }

    fetchById(id) {
        assert.ok(typeof id === "number", "id<number> is required");

        return this.repository.fetchRecordBy(id);
    }
}

module.exports = BaseService;
