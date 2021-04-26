module.exports = app =>{
    const job = require ('../controllers/jobs.controller')
    //create a new job
    app.post ('/job', job.create);

    //retrieve all the job
    app.get ('/job', job.findAll)

    // retrieve job by id
    app.get('/job/:jobId', job.findOne);

    // Update a job with customerId
    app.put("/job/:jobId", job.update);

    // Delete a job by id
    app.delete('/job/:jobId', job.delete)

    // delete all job field
    app.delete('/job', job.deleteAll)
}