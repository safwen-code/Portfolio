import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

import imgprof from '../images/imgprof.jpg'
import tel from '../images/tel.png'
import email from '../images/email.png'
import emplacement from '../images/emplacement.png'
import birthday from '../images/birthday.png'
import telecharger from '../images/telecharger.png'
import Typewriter from 'typewriter-effect'

const Aboutme = () => {
  const styleimg = {
    width: '24px',
  }

  return (
    <div className="col col-md-4  shadow-lg  rounded   ">
      <div className="col  mb-1 ">
        <div id="postionimg" className="mt-1 mb-1">
          {' '}
          <img
            src={imgprof}
            alt=""
            class="rounded mx-auto d-block"
            width="290px"
            height="199px"
          />
        </div>
        <div className="mt-3">
          <div
            className="col card m-2 p-2"
            style={{ backgroundColor: '#ECF2FF' }}
          >
            {' '}
            <div className="card-header text-center mb-1 fs-4 fst-italic">
              {' '}
              Djebbi Safwen
            </div>
            <div
              className="card-body d-flex justify-content-center align-items-center 
                        fs-5 fst-italic   rounded  mt-3 mb-2 ms-5 mx-5 text-light shadow-lg"
              style={{ backgroundColor: '#8294C4' }}
            >
              {' '}
              <Typewriter
                options={{
                  strings: [
                    'FullStack Developper',
                    'Web Developper',
                    'Software Engineer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="card-description  d-flex justify-content-center mt-3">
              <AiFillLinkedin className="m-2" size={'2rem'} color="576CBC" />{' '}
              <AiOutlineGithub className="m-2" size={'2rem'} color="212A3E" />{' '}
              <FaFacebookF className="m-2" size={'2rem'} color="576CBC" />
            </div>
          </div>
          <div
            class="col card text-bg-secondary m-1"
            style={{ backgroundColor: '#ECF2FF' }}
          >
            <ul
              class="  list-group list-group-flush"
              style={{ backgroundColor: '#ECF2FF' }}
            >
              <li
                class=" list-group-item list-group-item-action mt-2 mb-2"
                style={{ backgroundColor: '#ECF2FF' }}
              >
                <div className="d-flex flex-direction-row ">
                  <img src={tel} alt="" style={styleimg} />
                  <div className=" ms-5  fw-semibold">+216 26 607 437</div>
                </div>
              </li>
              <li
                class="list-group-item list-group-item-action mt-2 mb-2"
                style={{ backgroundColor: '#ECF2FF' }}
              >
                <div className="d-flex flex-direction-row ">
                  <img src={email} alt="" style={styleimg} />
                  <div className=" ms-5 fw-semibold ">
                    safwendjebbi1234@gmail.com
                  </div>
                </div>
              </li>
              <li
                class="list-group-item list-group-item-action mt-2 mb-2"
                style={{ backgroundColor: '#ECF2FF' }}
              >
                <div className="d-flex flex-direction-row ">
                  <img src={emplacement} alt="" style={styleimg} />
                  <div className=" ms-5 fw-semibold">Ban arous Nasseen</div>
                </div>
              </li>
              <li
                className="list-group-item list-group-item-action mt-2 mb-2"
                style={{ backgroundColor: '#ECF2FF' }}
              >
                <div className="d-flex flex-direction-row ">
                  <img src={birthday} alt="" style={styleimg} />
                  <div className=" ms-5 fw-semibold">20/08/1994</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col d-flex justify-content-center align-item-center mt-3 mb-1">
            <button
              type="button"
              class="btn  fw-semibold "
              style={{ backgroundColor: '#B6EAFA' }}
            >
              <img src={telecharger} alt="" style={styleimg} className="me-3" />
              Dawnload CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Aboutme)
