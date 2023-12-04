import React, {useEffect, useState} from 'react'
import { FaAngleDoubleRight} from 'react-icons/fa'



const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0)

  // Fetch data when the component mounts
  const fetchJobs = async ()=> {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

// useEffect for fetching API
  useEffect(()=> {
    fetchJobs()
  },[])


// Loading before fetching data
  if (loading){
    return <section className="loading">
      <h2>Loading...</h2>
    </section>
  }

// Main Section
const {id, title, dates, duties, company} = jobs[value]
  return (
  <section className="section">
      <h1 className="title">My Experiences</h1>
      <div className="underline"></div>
    <div className="jobs-container">
      <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
          key={job.id}
          onClick={()=>setValue(index)}
          className={`job-btn ${index === value && 'active-btn'}`}
          >
            {job.company}
          </button>
        )
      } )}
      </div>
      <div className="jobs-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        {duties.map((duty, index)=> {
          return (
            <div key={index} className='job-desc'>
              <div className="job-icon">
                <FaAngleDoubleRight />
                </div>  
              <p>{duty}</p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default App

