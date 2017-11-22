const BaseService = require("../BaseService");

class ProjectService extends BaseService {
    fetchById(id) {
        return this.repository.fetchRecordById(id);
    }
}

module.exports = ProjectService;
