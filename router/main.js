const express = require('express');

const router = express.Router()

const {postData,getData,updateData,deleteData} = require('../controllers/tasks')

router.route('/').post(postData)
router.route('/').get(getData)
router.route('/:id').put(updateData).delete(deleteData)
router.get('/check',(req,res)=>{
    res.send('deployed successfully')
})


module.exports = router;