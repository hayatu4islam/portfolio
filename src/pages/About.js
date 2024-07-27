import React from 'react'
import './About.css'
// import myPix from '..pages/pix.jpeg'

function About() {
  return (
    <div className='about-me'>
        <div className='about-me-text'>
            <h2>
                Hello! I'm Hayat Adeyemo, a passionate and versatile professional. With a background in Software Engineering, I have developed a number of software applications. As a trained data scientist from TechTalent Academy, I am proficient in Numpy, Pandas, Matplotlib, seaborn, Scikit-learn, Keras, and TensorFlow. I also have experience in cybersecurity. As a continuous learner, I've completed over 300 online courses across various platforms. 
            </h2>
            <h2>
                I have expertise in the following areas:
                <ul>
                    <li>Software Engineering</li>
                    <li>Data Science</li>
                    <li>cybersecurity</li>
                </ul>
            </h2>
        </div>
        <div className='about-me-photo'>
            <img src='pix.jpeg' style={{ width:'300px'}} alt='My pix'/>
        </div>
    </div>
  )
}

export default About