import React, { useState, useEffect } from 'react'

const Notes = () => {
  const [notes, setNotes] = useState([{
    title:'',
    content:'',
  }])

  useEffect(() => {
    fetch('/notes').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes));
  })

  // useEffect(() => {
  //   fetchNotes();
  // });
  
  // const fetchNotes = async () => {
  //   const data = await fetch('/notes');
  //   const notes = await data.json();
  //   setNotes(notes);
  // }

  return (
    <>
    <div className="container">
      <h1>Notes</h1>
      {notes.map(note => {
        return (
          <div className='container'>
            <h2>Title: {note.title}</h2>
            <h3>{note.content}</h3>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Notes
