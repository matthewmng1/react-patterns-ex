import React from "react"
import {NavLink} from "react-router-dom"

const Navbar = ({dogs}) => {
  const links = dogs.map(dog => (
    <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
      {dog.name}
    </NavLink>
    )
  )
  return (
    <nav>
      <NavLink to="/dogs">
        Home
      </NavLink>
      {links}
    </nav>
  )
}

export default Navbar;