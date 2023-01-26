import React from 'react'
import { loginEndpoint } from '../../AuthProcess/ApiDetails'
import "./login.css"


function Login() {
  return (
    <>
      <section className="login d-flex ">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-4 col-lg-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="img-container">
                    <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="Company Logo" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <h3>Gethampy</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <a className="btn btn-primary startBtn" href={loginEndpoint}>
                    Get Started 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login