import React from 'react';

function Note(props) {
  function handleClick() { 
    props.onDelete(props.id);
  }

  return (
    <div className='note'>
      <h1 className='title'>{props.title}</h1>
      <p className='content'>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Note;