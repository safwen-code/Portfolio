import React, { useEffect } from 'react'
import { connect } from 'react-redux'
const Project = () => {
  return (
    <div className=" container m-2 border border-dark" id="project">
      <div className="row m-2 border border-dark  ">
        <h2>Projects</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
        <p className="lead">
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs. My aim is to
          bring across your message and identity in the most creative way. I
          created web design for many famous brand companies.
        </p>
      </div>
      <div className="row m-2 border border-dark">
        <h2>what i do!</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
      </div>

      <div class="container mb-3">
        <div class="row border border-dark">
          <div class="col-sm-6 col-md-6  border border-dark">
            <div
              class="card mb-3 text-bg-secondary"
              style={{ max_width: '540px' }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">web developpement</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6  border border-dark">
            <div
              class="card mb-3 text-bg-secondary"
              style={{ max_width: '540px' }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">web developpement</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6  border border-dark">
            <div
              class="card mb-3 text-bg-secondary"
              style={{ max_width: '540px' }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="..." class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">web developpement</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
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
