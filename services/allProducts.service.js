const pool = require('./../libs/postgres.pool')

class AllProductsService {
    constructor () {
        this.pool = pool
        this.pool.on('error', (err) => console.error(err))
    }

    async find() {
        try {
            const query = 'select * from allpublicproducts;'
            const response = await this.pool.query(query)
            return response.rows
        } catch (err) {
            console.log("Error on query all products", err)
        }
    }
}

module.exports = AllProductsService