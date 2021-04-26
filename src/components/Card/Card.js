import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {

  const [jobs, setJobs] = useState(null)
  useEffect( () =>{
    fetch(`http://localhost:4000/job`, {
      headers : {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
      setJobs(data)
    })
    .catch(err => console.log(err)) 
  },[])

  return (
    <div className="row container mx-auto">"
      {
        jobs && 
          jobs.map (job => {
            return <div className = 'col-md-6'>
              <div className="card_item  my-2">       
                <h3>Position Name: {job.positionName} </h3>
                <h5>Position Type: {job.positionType}</h5>
                <div className="card_item_content">
                  <p>Responsibility: {job.responsibility}</p>
                  <p>skills: {job.skills} </p>
                  <p>experience : {job.experience} </p>
                  <p>duration: {job.duration} </p>
                  <p>salary: {job.salary} </p>
                </div>
                <button className="card_btn">Contact form</button>
              </div>
              </div>
          })
        }
      
    </div>
  );
};

export default Card;