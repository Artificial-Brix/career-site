const Job = require('../models/job.model');

// create and save a new job 
exports.create = (req, res) =>{
   
    //validate 
    if(!req.body){
        res.status(400).send({
            message: 'content cannot be empty'
        })
    }
    
    //create a job
    const {positionName, positionType, responsibility, skills, experience, salary, duration} = req.body;
    const job = new Job({
        positionName,
        positionType,
        responsibility,
        skills,
        experience,
        salary,
        duration
    })

    //save job in database
    Job.create(job, (err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || 'server error! job is not created'
            })
        } else res.status(200).send({
            message: 'success',
            data: data
        })
    })
}

// retrieve all Job from the database 
exports.findAll = (req, res) =>{
    Job.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message: err.message || 'on no! error happening when retrieving data'
            })
        }
        else res.json(data)
    })
}

// get single job by id
exports.findOne = (req, res) =>{
    const {jobId} = req.params
    Job.findById(jobId, (err, data) =>{
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message: `not found with the ${jobId}`
                })
            }
            else {
                res.status(500).send({
                    message: `Error finding the job by the id ${jobId}`
                })
            }
        }
        res.status(200).send({
            success: true,
            data
        })
        res.end()
    })
}

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Job.updateById(
      req.params.customerId,
      new Job(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

  // delete a job with the specific job id in the request
  exports.delete = (req, res) =>{
      const {jobId} = req.params;
      Job.remove(jobId, (err, data) =>{
          if(err){
              if(err.kind === 'not_found'){
                  res.status(404).send({
                      message: `not found job the id ${jobId}`
                  })
              }else{
                  res.status(500).send({
                      message: `could not delete job with id ${jobId} `
                  })
              }
          } else{
              res.status(200).send({
                  success: true,
                  message: 'Job is deleted'
              })
          }
      })
  }

  // delete all job field
  exports.deleteAll = (req, res) =>{
      Job.removeAll((err, data) =>{
          if(err){
              res.status(500).send({
                  success: false,
                  message: err.message || 'server error when deleting all job'
              })
          }else{
              res.send({message: `All jobs were deleted successfully`})
          }
      })
  }