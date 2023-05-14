import React, { useEffect } from 'react'
import { connect } from 'react-redux'
const Project = () => {
  return (
    <div className=" container m-2 " id="project">
      <div className="row m-2   ">
        <h2 style={{ fontFamily: 'cursive' }}>Projects</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
        <p className="lead">
          Software Engineer with 3 years Computer Science degree and more than 2
          year of experience.As a dedicated problem solver , I have many skill
          in Javascript ,node js , php and supporting
          laguages/libraries/frameworks that solve real-word problems through
          code.
        </p>
      </div>
      <div className="row m-2 ">
        <h2 style={{ fontFamily: 'cursive' }}>Project I Done</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
      </div>

      <div class="container mb-3">
        <div class="row ">
          <div class="col-sm-6 col-md-6  ">
            <div
              class="card mb-3 "
              style={{ max_width: '540px', backgroundColor: '#ECF2FF' }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Jungel Home</h5>
                    <p class="card-text">
                      littel project that display planet of Jungel Home
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Created 3 years ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6  ">
            <div
              class="card mb-3 "
              style={{ max_width: '540px', backgroundColor: '#ECF2FF' }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Timilec Managment</h5>
                    <p class="card-text">
                      Project for manage team position of termodure group
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Created 2years ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6  ">
            <div
              class="card mb-3 "
              style={{ max_width: '540px', backgroundColor: '#ECF2FF' }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Portfolio </h5>
                    <p class="card-text">Create a portfolio with react</p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Created yesterday
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapToState = (state) => ({})
export default connect(mapToState)(Project)
