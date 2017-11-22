const BaseService = require("../BaseService");

class ActionService extends BaseService {
    fetchById(id) {
        return this.repository.fetchRecordById(id);
    }
}

module.exports = ActionService;
