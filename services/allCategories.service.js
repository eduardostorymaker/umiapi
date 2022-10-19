const pool = require('./../libs/postgres.pool')

class AllCategoriesService {
    constructor () {
        this.pool = pool
        this.pool.on('error', (err) => console.error(err))
    }

    async find() {
        try {
            const query = 'select * from allcategories;'
            const response = await this.pool.query(query)
            return response.rows
        } catch (err) {
            console.log("Error on query all categories", err)
        }
    }
}

module.exports = AllCategoriesService