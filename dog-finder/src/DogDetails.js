import React from "react"; 
import {useParams, Redirect} from "react-router-dom"

const DogDetails = ({dogs}) => {
  const { name } = useParams();

  if(!name) return <Redirect to="/dogs"/>

  if(name){
    const currDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return (
      <div>
      <h1>{currDog.name}</h1>
      <img src={currDog.src} alt={currDog.name} style={{width: 400}}/>
      <h3>Age: {currDog.age}</h3>
      <h3>Fun Facts about {currDog.name}!</h3>
      <ul>
          {currDog.facts.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
    </div>
  )}
}

export default DogDetails;

{/*       
    name: "Whiskey",
    age: 5,
    src: "./images/whiskey.jpg",
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    */}