import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  async function deleteHandler(id){
    await fetch(`http://localhost:5000/api/entries/${id}`, {
        method : 'DELETE'
    }); 
    window.location.reload();
    
  }

  return (
    <section className='container'>
      <div className='row my-2'>
        {data.map(item => (
          <div className='col' key={item._id}>
            <div className='card'>
              <img src='' alt='' />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <Link to={`/edit/${item._id}`} className="btn me-2 btn-primary">
                    Update
                </Link>
                
                <button className="btn me-2 btn-danger" onClick={(e)=>deleteHandler(item._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
