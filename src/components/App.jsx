import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return notes.filter((elem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((elem, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={elem.title}
            content={elem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
