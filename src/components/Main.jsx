import React, { useState } from 'react'

import Navbar from '../layout/Navbar'
import Aboutme from '../layout/Aboutme'

//step 2
// import Mode from '../layout/Mode'
import Containers from './Containers'
import back from '../images/back.jpg'

const Main = () => {
  // const [white, setMode] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState('description')

  //change mode white to black
  // const changeHundlerMode = () => {
  //   setMode(!white)
  // }

  return (
    <>
      <div
        // className={
        //   white ? 'container-fluid  bg-light' : 'container-fluid  bg-dark'
        // }
        className="container-fluid pt-4"
        style={{ backgroundImage: `url(${back})` }}
      >
        <Navbar
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
        {/* <Mode white={white} changeHundlerMode={changeHundlerMode} /> */}
        <div className="container-fluid mt-3">
          <div className="row d-flex justify-content-between">
            <Aboutme />
            <Containers activeNavItem={activeNavItem} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
