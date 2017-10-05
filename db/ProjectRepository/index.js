const assert = require("assert");
const BaseWriteRepository = require("../BaseWriteRepository");

class ProjectRepository extends BaseWriteRepository {
    constructor({ knex, name, model }) {
        assert.ok(knex, "knex is required");
        assert.ok(name, "name<string> is required");
        assert.ok(model, "model is required");

        super();

        this.knex = knex;
        this.name = name;
        this.model = model;
    }
}

module.exports = ProjectRepository;
