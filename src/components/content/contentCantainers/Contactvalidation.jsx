import React, { useState } from 'react'
import { connect } from 'react-redux'

const Contactvalidation = ({ AddContact }) => {
  const [Contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = Contact

  const onChangeHundler = (e) => {
    setContact({ ...Contact, [e.target.name]: e.target.value })
  }

  const submiContact = (e) => {
    e.preventDefault()
    AddContact(Contact)
    console.log('contact', Contact)
  }
  return (
    <div className="col-sm border border-primary ">
      <div className=" card text-dark bg-light  mt-3 ms-2 mx-2 mb-3">
        <h2 className="ms-2">Hire Me</h2>
        <p className="ms-2 lead">
          I'm always open to discussing product design work or partnerships.
        </p>
      </div>
      <div className=" ms-2 mx-2 mb-1 ">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChangeHundler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={onChangeHundler}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
            value={message}
            onChange={onChangeHundler}
          ></textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary w-100"
          onClick={submiContact}
        >
          Valider
        </button>
      </div>
    </div>
  )
}

export default connect(null)(Contactvalidation)
