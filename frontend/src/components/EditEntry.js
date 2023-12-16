import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEntry = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/entries/${id}`);
        const data = await response.json();

        if (response.ok) {
          setTitle(data.title);
          setContent(data.content);
        } else {
          console.error('Error fetching entry:', data.error);
          // Handle the error as needed
        }
      } catch (error) {
        console.error('Fetch error:', error.message);
        // Handle the error as needed
      }
    };

    fetchEntry();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/entries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();

      if (response.ok) {
        // Entry successfully updated
        console.log('Entry updated successfully:', data);

        // Show a success notification
        toast.success('Changes have been saved successfully');

        // Redirect to the main page
        navigate('/');
      } else {
        console.error('Error updating entry:', data.error);
        // Handle the error as needed
      }
    } catch (error) {
      console.error('Update error:', error.message);
      // Handle the error as needed
    }
  };

  return (
    <div className="container">
      <h2>Edit Entry</h2>
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
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary mt-3" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEntry;
