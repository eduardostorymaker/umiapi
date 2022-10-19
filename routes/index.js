const express = require('express')

const allProductsRouter = require('./allProducts.router')
const allCategoriesRouter = require('./allCategories.router')

function routerAPI(app) {
    const router = express.Router()
    //import routes
    router.use('/allproducts', allProductsRouter)
    router.use('/allcategories', allCategoriesRouter)
    //api version
    app.use('/api/v1/', router)
}

module.exports = routerAPI