import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './ShowItems.css'

const ShowItems = () => {
  const [items, setItems] = useState([{
    id:'',
    title:'',
    description:'',
  }])
  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({
    id:'',
    title:'',
    description:'',
  })

  useEffect(() => {
    fetchItems();
  },[items])

  const fetchItems = async () => {
    const data = await fetch('/items');
    const items = await data.json();
    setItems(items);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUpdatedItem(prevInput => {
      return({
        ...prevInput,
        [name]: value
      }
      )
    })
    console.log(updatedItem)
  }
  
  const deleteItem = (id) => {
    axios.delete('/delete/' + id)
    alert("item deleted");
    console.log(`deleted item with id ${id}`);
  }

  const openUpdate = (id) => {
    setIsPut(true);
    setUpdatedItem(prevInput => {
      return ({
        ...prevInput,
        id: id,
      })
    })
  }

  const updateItem = (id) => {
    axios.put('/put/' + id, updatedItem);
    alert('item updated');
    console.log(`item with id ${id} updated`);
  }

  const handleUpdate = (event) => {
    const {name, value} = event.target;
    setUpdatedItem(prevInput => {
      return({
        ...prevInput,
        [name]: value,
      })
    })
    console.log(updatedItem);
  }

  return (
    <>
      <div className="container">
        <div className="items-container">
          {!isPut ? 
            null : (<div className="container input-container">
            <input 
              onChange={handleUpdate} 
              value={updatedItem.title} 
              type="text" 
              name="title" 
              placeholder="title"
            />
            <input 
              onChange={handleUpdate} 
              alue={updatedItem.description} 
              type="text" 
              name="description" 
              placeholder="description"
            />
            <button onClick={() => updateItem(updatedItem.id)}>Update Item</button>
            <button onClick={() => setIsPut(false)}>Cancel</button>
          </div>) 
          }
          <div className="top-row">
            <h1 className="top-title">Title</h1>
            <h1 className="top-description">description</h1>
          </div>
          {items.map(item => {
            return (
              <div className="items" key={item._id}>
                <div className="item-title">
                  <h1>{item.title}</h1>
                </div>
                <div className="item-description">
                  <p>{item.description}</p>
                </div>
                <div className="buttons">
                  <button onClick={() => deleteItem(item._id)}>DELETE</button>
                  <button onClick={() => openUpdate(item._id)}>EDIT</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ShowItems
