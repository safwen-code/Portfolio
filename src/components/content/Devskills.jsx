import React from 'react'
import { FaReact, FaPhp } from 'react-icons/fa'
import {
  SiMongodb,
  SiRedux,
  SiJquery,
  SiAngularjs,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si'
import { TbBrandJavascript } from 'react-icons/tb'
import { DiNodejs } from 'react-icons/di'
import git from '../../images/git.png'
import jira from '../../images/jira.png'
import uml from '../../images/uml.png'
import wind from '../../images/wind.png'
const Devskills = (props) => {
  return (
    <div className="container  border border-dark p-1" id="devskills">
      <div className="border border-dark m-1">
        {' '}
        <h2 style={{ fontFamily: 'cursive' }}>Frontend Skills</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
        <ul class="  list-group list-group-flush rounded">
          <li
            class=" list-group-item list-group-item-action"
            style={{ backgroundColor: '#FDE2F3' }}
          >
            <div className="row ">
              <div className="col-sm-6" style={{ fontFamily: 'cursive' }}>
                html css sass
              </div>
              <div className="col-sm-6" style={{ marginTop: '6px' }}>
                {' '}
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Info striped example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-info"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
          <li
            class=" list-group-item list-group-item-action"
            style={{ backgroundColor: '#FDE2F3' }}
          >
            <div className="row">
              <div className="col-sm-6" style={{ fontFamily: 'cursive' }}>
                Bootstrap ReactStrap
              </div>
              <div className="col-sm-6" style={{ marginTop: '6px' }}>
                {' '}
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Info striped example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-info"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
          <li
            class=" list-group-item list-group-item-action"
            style={{ backgroundColor: '#FDE2F3' }}
          >
            <div className="row">
              <div className="col-sm-6 " style={{ fontFamily: 'cursive' }}>
                axios Ajax HttpRequest
              </div>
              <div className="col-sm-6" style={{ marginTop: '6px' }}>
                {' '}
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Info striped example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-info"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="border border-dark m-1">
        <h2 style={{ fontFamily: 'cursive' }}>Framework I use</h2>
        <hr class="  border border-info border-2 opacity-100 w-50 ms-4"></hr>
        <div className="d-flex justify-content-around">
          <FaReact size="2rem" color="#1D267D" />
          <SiRedux size="2rem" color="#654E92" />
          <SiJquery size="2rem" color="#6C9BCF" />
          <SiAngularjs size="2rem" color="#D21312" />
        </div>
      </div>
      <div className="border border-dark m-1">
        {' '}
        <h2 style={{ fontFamily: 'cursive' }}>Backend</h2>
        <hr class="  border border-secondary border-2 opacity-100 w-50 ms-4"></hr>
        <div className="d-flex justify-content-around">
          <TbBrandJavascript size="2rem" color="#F9D949" />
          <DiNodejs color="#245953" size="2rem" />
          <SiExpress size="2rem" />
          <FaPhp color="#5C469C" size="2rem" />
          <SiMongodb color="#245953" size="2rem" />
          <SiPostgresql color="#3C486B" size="2rem" />
        </div>
      </div>
      <div className="border border-dark m-1">
        <h2 style={{ fontFamily: 'cursive' }}>Utils</h2>
        <hr class="  border border-secondary border-2 opacity-100 w-50 ms-4"></hr>
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={jira} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={jira} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={jira} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Devskills
