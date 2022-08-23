import React, {useState} from 'react';
import Footer from './Footer';
import Heading from './Header';
import Note from './Note';
import CreateArea from './CreateArea';


function App() {
  const [items, setItems] = useState([]);

  function addNote(note) {
    setItems(prevItems => {
      return [...prevItems, note];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Heading />
      <CreateArea onAdd={ addNote} />
      {items.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteItem}
            />
          ))}
      <Footer />
    </div>
  )
}

export default App;