import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({ title: "", content: "" });

  function updateItem(event) {
    const { name, value } = event.target;
    setItem((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={updateItem}
          value={item.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={updateItem}
          value={item.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onAdd(item);
            event.preventDefault();
            setItem({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
