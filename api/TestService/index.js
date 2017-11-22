const BaseService = require("../BaseService");

class TestService extends BaseService {
    fetchById(id) {
        return this.repository.fetchRecordById(id);
    }
}

module.exports = TestService;
