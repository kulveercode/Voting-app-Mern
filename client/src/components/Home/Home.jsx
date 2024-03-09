import React from 'react'
import  './Home.css'
import card1 from '../../assets/register.jpg';
import card2 from '../../assets/candidate.jpg';
import card3 from '../../assets/secure.jpg';


function Home() {
  return (
    <div className='home'>
        <div className="home-background">
          <div className="background-text">
            <h1>Welcome to Voting App</h1>
            <p>Make your Voice heard!</p>
          </div>
        </div>
        <div className="home-cards">
          <h1>ECI Officials</h1>
          <div className="card">
            <img src={card1} alt="" />
            <div className="card-text">
              <h1>Easy Registration</h1>
              <p>Register with a just few simple steps ans start voting.</p>
            </div>
          </div>
          <div className="card">
                  <img src={card2} alt="" />
                  <div className="card-text">
                     <h1>Explore Candidates</h1>
                     <p>Learn about the candidates and their proposals.</p>
                  </div>
            </div>
            <div className="card">
                  <img src={card3} alt="" />  
                  <div className="card-text">
                     <h1>Secure Voting</h1>
                     <p>Your vote is important,it's secure and confidential.</p>
                  </div>
            </div>
        </div>

    </div>
  )
}

export default Home
