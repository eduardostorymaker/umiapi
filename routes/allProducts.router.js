const express = require('express')

const AllProductsService = require('./../services/allProducts.service')

const router = express.Router()
const allProductsService = new AllProductsService()

router.get('/', async (req,res) => {
    const response = await allProductsService.find()
    res.status(200).json(response)
})

module.exports = router