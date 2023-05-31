import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Contactgeo from './contentCantainers/Contactgeo'
import Contactvalidation from './contentCantainers/Contactvalidation'
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'
import linked from '../../images/linkedin.png'
import { contact } from '../../Actions/profileAction'

const Contact = ({ contact }) => {
  const style = {
    height: '42px',
    marginBottom: '8px',
    color: 'whitesmoke',
    marginLeft: '4px',
    marginRight: '4px',
  }

  return (
    <div className="container mt-5 ">
      <div className="row">
        <Contactgeo />
        <Contactvalidation contact={contact} />
        <div className="d-flex justify-content-center mt-4 mb-2 ">
          © 2023 All Rights Reserved by ib-themes.
        </div>
      </div>
    </div>
  )
}

const mapToProp = (state) => ({})

export default connect(mapToProp, { contact })(Contact)
