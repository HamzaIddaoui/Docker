const express = require('express')
const router = express.Router() 
const {getCustomers,setCustomer,putCustomer,deleteCustomer} = require('../controllers/customersController')


router.route('/').get(getCustomers).post(setCustomer)
router.route('/:id').delete(deleteCustomer).put(putCustomer)


module.exports = router