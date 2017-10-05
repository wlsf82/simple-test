const assert = require("assert");
const BaseRepository = require("../BaseRepository");

class BaseWriteRepository extends BaseRepository {
    insertRecord(object) {
        assert.ok(typeof object === "object", "object<object> is required");

        return this.knex.insert(object)
            .into(this.name);
    }

    deleteRecordById(recordId) {
        assert.ok(typeof recordId === "number", "recordId<number> is required");

        return this.knex(this.name)
            .where("id", recordId)
            .delete()
            .then(rowsDeleted => rowsDeleted > 0);
    }
}

module.exports = BaseWriteRepository;
