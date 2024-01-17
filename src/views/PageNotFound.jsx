import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/pageNotFound.css'
const PageNotFound = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="page__not__found__container">
          <p>Page Not Found</p>
          <NavLink to='/'><button>Back To Home</button></NavLink>
        </div>
      </div>
    </>
  )
}

export default PageNotFound