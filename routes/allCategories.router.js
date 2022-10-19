const express = require('express')

const AllCategoriesService = require('../services/allCategories.service')

const router = express.Router()
const allCategoriesService = new AllCategoriesService()

router.get('/', async (req,res) => {
    const response = await allCategoriesService.find()
    res.status(200).json(response)
})

module.exports = router