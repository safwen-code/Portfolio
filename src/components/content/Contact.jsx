import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Contactgeo from './contentCantainers/Contactgeo'
import Contactvalidation from './contentCantainers/Contactvalidation'
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'
import linked from '../../images/linkedin.png'

const Contact = () => {
  const style = {
    height: '42px',
    marginBottom: '8px',
    color: 'whitesmoke',
    marginLeft: '4px',
    marginRight: '4px',
  }

  return (
    <div className="container mt-5 " id="contact">
      <div className="row">
        <Contactgeo />
        <Contactvalidation />
        <div className="d-flex justify-content-center mt-4 mb-2 ">
          © 2023 All Rights Reserved by ib-themes.
        </div>
      </div>
    </div>
  )
}

const mapToProp = (state) => ({})

export default connect(mapToProp)(Contact)
