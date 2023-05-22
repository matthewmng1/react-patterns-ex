import React, {useState, useEffect} from "react";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'

import ColorList from "./ColorList"
import NewColorForm from "./NewColorForm";
import Color from "./Color";


const Routes = () => {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#ED2939",
    green: "#BEEF7E",
    blue: "#0600FF"
  }

  const [colors, setColors] = useState(initialColors)

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  )

  const handleNew = (newColorObj) => {
    setColors(prevColors => ({...prevColors, ...newColorObj }))
  }

  const renderColor = (props) =>  {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color}/>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/colors" exact>
          <ColorList colors={colors}/>
        </Route>
        <Route path="/colors/new" exact>
          <NewColorForm newColor={handleNew}/>
        </Route>
        <Route path="/colors/:color" render={renderColor}/>
        <Redirect to="/colors"/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;