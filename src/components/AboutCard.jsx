import React from 'react'

const AboutCard = (props) => {
  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default AboutCard