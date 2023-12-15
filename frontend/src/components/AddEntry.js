import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';










export default function AddEntry() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [FormData, setFormData] = useState({
        title: '',
        content: ''
    });
    const EntryHandler = async() => {
        await fetch('http://localhost:5000/api/entries', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(FormData)
        })
        navigate('/');

    }

  return (
    <div className="container">
    <h2>Add Entry</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setFormData({
                ...FormData, title: e.target.value
            })
        }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
            setFormData({
                ...FormData, content: e.target.value

            })    
        }}
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={EntryHandler}>
        Save
      </button>
    </form>
  </div>
);
};
  

