import React, { useEffect, useState } from 'react'

export default function Body() {
    const [data, setData] = useState([]);
    async function fetchData(){
       await fetch("http://localhost:5000/api/entries").then(response => response.json()).then(item => setData(item))    }
    useEffect(()=>
{
    fetchData();
}, [])
    return (
    <section className='container'>
        <div className='row my-2'>
            {data.map(item=>{
                return(
                <div className='col' key = {item._id}>
                    <div className='card'>
                        <img src='' alt=''/>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.content}</p>
                            <a href="/update" class="btn me-2 btn-primary">Update</a>
                            <a href="/delete" class="btn me-2 btn-danger">Delete</a>
                        </div>
                    </div>
                </div>
                )
            }) }

        </div>
    </section>
  )
}
