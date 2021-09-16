import React, {useState} from 'react';
import axios from 'axios';
import './AddItem.css'

const AddItem = () => {
  const [item, setItem] = useState({
    title:'',
    description:'',
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setItem(prevInput => {
      return({
        ...prevInput,
        [name]: value
      }
      )
    })
    console.log(item)
  }

  const handleClick  = (event) => {
    event.preventDefault();
    const newItem = {
      title: item.title,
      description: item.description,
    }
    axios.post("/newitem", newItem);
    console.log(newItem);
    alert('item added');

    setItem({})
  }
  
  return (
    <>
    <div className="container input-container">
      <h1>Add an item to the database here</h1>
        <input 
          onChange={handleChange} 
          value={item.title} 
          type="text" 
          name="title" 
          placeholder="title"
        />
        <input 
          onChange={handleChange} 
          alue={item.description} 
          type="text" 
          name="description" 
          placeholder="description"
        />
      <button onClick={handleClick}>Add Item</button>
    </div>
    </>
  )
}

export default AddItem
