import { useEffect, useState } from 'react';
import './homepage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

 const Homepage = () => {

    // useEffect(() => {
    //     axios.get('/')
    //      },[]);
    // const navigate = useNavigate();

    // const enterSite = e => {
    //     e.preventDefault()
    //     navigate('/login')
    // }

    return (
        <div className='container-main'>
            <div className="header-nav">
                <span className="mytext1"> Travelling Insured </span>
            </div>
           
            <div className="">
            </div>

            <div className="container">
                <div className="slogan">
                    <h1>
                        <span className="cc">always Travel</span>
                        <div className="message">
                            <div className="word1">Uniquely</div>
                            <div className="word2">Safely</div>
                            <div className="word3">with a smile</div>
                        </div>
                    </h1>
                </div>

                {/* <a href="/#" onClick={e => enterSite(e)} className="mainBtn"> */}
              <Link to="/login">   <div className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="#FF8282" />
                                <stop offset="100%" stopColor="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span >Get Started!</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Homepage;


