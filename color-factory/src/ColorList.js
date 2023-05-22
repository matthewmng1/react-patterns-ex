import React from 'react'
import {Link} from 'react-router-dom'
import "./ColorList.css"

const ColorList = ({colors}) => {
  const links = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ))

  return (
    <div className='ColorList'>
      <h1>The Color Factory</h1>
      <h1>
        <Link to="/colors/new">Add a New Color</Link>
      </h1>
        <div>
          <h2>Select a Color</h2>
          <ul>{links}</ul>
        </div>
    </div>
  )
}

export default ColorList;