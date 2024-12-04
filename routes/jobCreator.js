const express = require('express')
const router = express.Router()
const axios = require('axios')
const { ObjectId } = require('mongodb');
router.get('/', (req,res)=>{
  res.send("these re the list of tasks")
})

router.post('/:id/', (req,res) => {
  const job_id = req.params.id
  const { job_name, job_desc} = req.body
  if(job_name === null || job_name === undefined || job_name.trim() === "" ){
return res.status(400).json({"error": "please do not send empty value here"})
  }
  res.status(200).send(
    {
    "job_id": new ObjectId(),
    "job_name": job_name,
    "job_desc":job_desc
    })
})
module.exports = router