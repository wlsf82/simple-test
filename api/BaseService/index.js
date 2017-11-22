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
        return this.repository.fetchRecordBy();
    }
}

module.exports = BaseService;
