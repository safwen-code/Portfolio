import React from 'react'
import hire from '../images/hiring.png'

const Navbar = ({ activeNavItem, setActiveNavItem }) => {
  const style = {
    height: '46px',
    marginBottom: '8px',
    color: 'whitesmoke',
  }

  const hundelNavItem = (item) => {
    setActiveNavItem(item)
    console.log(item)
  }
  return (
    <>
      <nav
        class="navbar navbar-dark bg-dark navbar-expand-lg  
          rounded-3    
        sticky-top shadow-lg ps-3 pe-2"
      >
        <div class="container-fluid">
          <a class="navbar-brand text-white-50 " href="#">
            Profile
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: 'whitesmoke' }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a
                  class={
                    activeNavItem === 'item'
                      ? 'nav-link active text-white-50 active'
                      : 'nav-link  text-white-50'
                  }
                  onClick={() => hundelNavItem('description')}
                  href="#description"
                >
                  <em>Description</em>
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class={
                    activeNavItem === 'item'
                      ? 'nav-link active text-white-50 active'
                      : 'nav-link  text-white-50'
                  }
                  onClick={() => hundelNavItem('project')}
                  href="#project"
                >
                  <em>Projects</em>
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class={
                    activeNavItem === 'about'
                      ? 'nav-link active text-white-50 active'
                      : 'nav-link  text-white-50'
                  }
                  onClick={() => hundelNavItem('skills')}
                  href="#skills"
                >
                  <em>Skills</em>
                </a>
              </li>
              <li class="nav-item ">
                <a
                  class={
                    activeNavItem === 'about'
                      ? 'nav-link active text-white-50 active'
                      : 'nav-link  text-white-50'
                  }
                  onClick={() => hundelNavItem('devskills')}
                  href="#devskills"
                >
                  {' '}
                  <em>Dev Skills</em>
                </a>
              </li>
              <li className="nav-item ">
                <a
                  class={
                    activeNavItem === 'contact'
                      ? 'nav-link active text-white-50 active'
                      : 'nav-link  text-white-50'
                  }
                  onClick={() => hundelNavItem('contact')}
                  href="#contact"
                >
                  <em>Contact</em>
                </a>
              </li>
            </ul>
            <span class="navbar-text ">
              <a className="nav-link text-white-50" href="#contact">
                <img style={style} src={hire} />
                <em>Hire Me</em>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
