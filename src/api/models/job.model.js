const db = require('./db');

// constructor 
const Job = function (job) {
    this.positionName = job.positionName;
    this.positionType = job.positionType;
    this.responsibility = job.responsibility;
    this.skills = job.skills;
    this.experience = job.experience;
    this.salary = job.salary;
    this.duration = job.duration;
}

Job.create = (newJob, result) =>{
    db.query('INSERT INTO job SET ?', newJob, (err, res) =>{
        if(err){
            console.log('error: ', err)
            result(err, null)
            return;
        } 
        console.log('new job created: ' ,{id: res.insertedId, ...newJob});
        result(null, {id: res.insertedId, ...newJob})
    })
}

Job.getAll = result =>{
    db.query('SELECT * FROM JOB', (err, res) =>{
        if(err){
            console.log('error: ', err)
            result(null, err)
            return
        }
        console.log('JOB: ', res)
        result(null, res)
    })
}

Job.findById = (jobId, result) =>{
    db.query(`SELECT * FROM JOB WHERE id = ${jobId}`, (err, res) =>{
        if(err){
            result(err, null)
        }
        if(res.length){
            result(null, res[0])
        }
        // not found job by the id
        result({
            kind: 'not_found'
        })
    })
}

// update
Job.updateById = (id, job, result) =>{
    db.query(`UPDATE JOB SET responsibility = ?, skills = ?, experience = ?, salary = ? , duration = ?`, [job.responsibility, job.skills, job.experience, job.salary, job.duration], (err, res) =>{
        if(err){
            result('error: ', err)
            return;
        }
        else if(res.affectedRows == 0){
            // not found job with the id
            result({
                kind: 'not_found'
            }, null)
            return
        }
        else result(null, {id: id, ...job})

    })
}

//remove  one by id
Job.remove = (id, result) =>{
    db.query('DELETE FROM JOB WHERE id = ?', id, (err, res) =>{
        if(err){
            result(null, err)
            return
        }
        else if(res.affectedRows == 0){
            //not found job with the id 
            result({kind: 'not_found'}, null)
            return
        } 
        result(null, res)
    })
}

// remove all
Job.removeAll = result =>{
    db.query('DELETE FROM JOB', (err, res) =>{
        if(err){
            result(null, err)
            return
        }
        result(null, res)
        console.log(res)
    })
}

module.exports = Job;