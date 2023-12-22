import React, { useEffect, useState } from 'react';
import './Body.css';
import Sidebar from './Sidebar';
import JournalCard from './JournalCard';

const Body = () => {
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
    <section className="body">
      <div className="elementsRow row m-0">
        <div className='col sidebarMain'>
          <Sidebar />
        </div>

        <div className='col me-4'>
          <div className="row my-2">
            {data.map((item) => (
              <JournalCard
                key={item._id}
                id={item._id}
                title={item.title}
                content={item.content}
                onDelete={deleteHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
