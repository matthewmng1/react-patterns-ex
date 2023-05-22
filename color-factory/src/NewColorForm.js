import React ,{useState} from "react"
import { useHistory } from "react-router-dom";
import "./NewColorForm.css"

const NewColorForm = ({newColor}) => {

  const INITIAL_STATE = {
    name: "",
    hex: "#ffffff"
  }

  const [formData, updateFormData] = useState(INITIAL_STATE)
  const history = useHistory();

  const handleChange = (e) => {
    e.persist()
    updateFormData(data => ({
      ...data,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    newColor({
      [formData.name]: formData.hex 
    })
    history.push("/colors");
  }

  const {hex, name} = formData;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color name: </label>
      <input 
        id="name"
        placeholder="New Color"
        name="name"
        value={name}
        onChange={handleChange}
        />

      <label htmlFor="hex">Color: </label>
      <input 
        id="hex"
        type="color"
        name="hex"
        value={hex}
        onChange={handleChange}
        />
        <input type="Submit" value="Add Color" readOnly/>
    </form>
  )
}

export default NewColorForm;