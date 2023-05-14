import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Skillmain = () => {
  return (
    <div className="container  m-2 border border-dark  " id="skills">
      <div className="row m-1 border border-dark  ">
        <div className="col-sm-6 col-md-6  border border-primary">
          <h2
            className="mb-2  "
            style={{ color: '#191825', fontFamily: 'cursive' }}
          >
            Education{' '}
          </h2>
          <div className="row border border-dark d-flex flex-column align-items-center pt-1 pb-1">
            <div
              className=" col-sm-6 col-md-6 border border-dark mb-2"
              style={{ width: '380px' }}
            >
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    <small class="text-body-secondary">2020</small>
                  </p>
                  <h5 class="card-title">Developpeur MERN</h5>
                  <p class="card-text">Go My Code</p>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-6 col-md-6 border border-dark mb-2"
              style={{ width: '380px' }}
            >
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    <small class="text-body-secondary">2018-2020</small>
                  </p>
                  <h5 class="card-title">Open Classroom</h5>
                  <p class="card-text">Certificat en ligne</p>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-6 col-md-6 border border-dark mb-2"
              style={{ width: '380px' }}
            >
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    <small class="text-body-secondary">2017</small>
                  </p>
                  <h5 class="card-title">Iset</h5>
                  <p class="card-text">cetificat en ligne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6  border border-primary">
          <h2
            className="mb-2 "
            style={{ color: '#191825', fontFamily: 'cursive' }}
          >
            Experience
          </h2>
          <div className="row border border-dark d-flex flex-column align-items-center pt-1 pb-1">
            <div
              className=" col-sm-6 col-md-6 border border-dark mb-2"
              style={{ width: '380px' }}
            >
              <div class="card ">
                <div class="card-body">
                  <p class="card-text">
                    <small class="text-body-secondary">2021</small>
                  </p>
                  <h5 class="card-title">Go My Code</h5>
                  <p class="card-text">
                    Intégration de maquette Gestions du state via Redux
                    Conception du cahier de charge Suivie la méthodologie SCRUM
                  </p>
                  <a href="#" class="btn btn-primary">
                    more
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-6 col-md-6 border border-dark mb-2"
              style={{ width: '380px' }}
            >
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    <small class="text-body-secondary">2021</small>
                  </p>
                  <h5 class="card-title">Timelec</h5>
                  <p class="card-text">
                    Controller le produit. Montage du produit à l’aide du
                    système FT bios. Suivie la méthodologie ...........
                  </p>
                  <a href="#" class="btn btn-primary">
                    more
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" col-sm-6 col-md-6 border border-dark mb-2"
              style={{ width: '380px' }}
            >
              <div class="card">
                <div class="card-body">
                  <p class="card-text">
                    <small class="text-body-secondary">2023</small>
                  </p>
                  <h5 class="card-title">developeur Full stack</h5>
                  <p class="card-text">devlopper des crm pour l'industrie'</p>
                  <a href="#" class="btn btn-primary">
                    more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Skillmain)
