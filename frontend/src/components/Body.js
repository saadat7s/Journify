import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Body.css'; // Import the CSS file for styling

export default function Body() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:5000/api/entries");
      const items = await response.json();
      setData(items);
    } catch (error) {
      console.error('Error fetching entries:', error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteHandler(id) {
    await fetch(`http://localhost:5000/api/entries/${id}`, {
      method: 'DELETE',
    });
    fetchData(); // Refetch data after deletion
  }

  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-md-4 my-2">
        {data.map((item) => (
          <div className="col mb-4" key={item._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-content">{item.content.substring(0, 100)}...</p>
                <div className="card-buttons">
                  <Link to={`/edit/${item._id}`} className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={(e) => deleteHandler(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
