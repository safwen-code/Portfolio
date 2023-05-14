import React from 'react'

const Description = () => {
  return (
    <div
      className=" container m-2  shadow  bg-body-tertiary rounded"
      id="description"
    >
      <div className="row m-2   ">
        <h2 style={{ fontFamily: 'cursive' }}>About me</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
        <p className="fw-semibold">
          Developpeur Full Stack passionnée par l’univer du web et dotée d’une
          curiosité pour cette metier.Polyvalent et forte de 2 ans d’experience,
          je me suis spécialisée dans le developpement frontend ansi que le
          backend. Je suis spécialisée sur les frameworks React, php et nodejs.
        </p>
      </div>
      <div className="row m-2 ">
        <h2 style={{ fontFamily: 'cursive' }}>what i do!</h2>
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
                    <h5 class="card-title">Web Developpement</h5>
                    <p class="card-text">
                      create apps in many domaine like education managment with
                      react jquery css sass and more utils.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        More than 3 years experience in this domaine
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
                    <h5 class="card-title">backend developpment </h5>
                    <p class="card-text">
                      create Apis with node and php framewok using the concept
                      of micro-service systéme
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        More of 2 years experience in this domaine "industry
                        4.7"
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
                    <h5 class="card-title">UI & Mangement</h5>
                    <p class="card-text">
                      create ui concept interface depend the concept of project
                      management project with kanban srum and to do .
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
export default Description
