import React, { useState } from 'react';

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">React Notes</h1>
      <form onSubmit={addNote}>
        <input
          className="border p-2 mb-2"
          placeholder="Note title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 mb-2"
          placeholder="Note body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Add Note
        </button>
      </form>
      {notes.map(note => (
        <div
          key={note.title}
          className="border-dashed border-4 border-gray-600 mb-4 p-4"
        >
          <h3 className="text-xl font-bold mb-2">{note.title}</h3>
          <p className="text-gray-600">{note.body}</p>
          <button
            onClick={() => removeNote(note.title)}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteApp;