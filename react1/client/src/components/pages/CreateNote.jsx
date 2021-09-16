import React , {useState} from 'react'
import axios from 'axios';

const CreateNote = () => {

  const [input, setInput] = useState({
    title: '',
    content: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(input);

    const newNote = {
      title: input.title,
      content: input.content,
    }
    axios.post('http://localhost:4000/createnote', newNote)
  }

  return (
    <>
    <div className="container">
      <h1>Create Note</h1>
      <form action="">
        <div className="form-group">
          <input 
            onChange={handleChange}
            name="title" 
            value={input.title}
            placeholder="Note title" 
            autoComplete="off" 
            type="text" 
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea 
            onChange={handleChange}
            name="content" 
            value={input.content}
            placeholder="Note content" 
            autoComplete="off" 
            type="text-area" 
            className="form-control"
          />
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>

      </form>
    </div>
    </>
  )
}

export default CreateNote
