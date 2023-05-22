// homepage - shows all dogs
import React from "react";
import {Link} from "react-router-dom"

const DogList = ({dogs}) => {
  return (
    <div>
      <h1>Dogs</h1>
      <div>
        {dogs.map(dog => (
          <div>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              {dog.name}
            </Link>
            
            <br/>
            
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              <img src={dog.src} style={{width: 200}}/>
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DogList;
        