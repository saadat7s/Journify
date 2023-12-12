import React from 'react'

const today = new Date();
const day = today.getDate();
const data = [
{
    title: 'My title',
    content: 'my Content',
    date: day

},
{
    title: 'My title',
    content: 'my Content',
    date: day

},
{
    title: 'My title',
    content: 'my Content',
    date: day

}

]

export default function Body() {
  return (
    <section className='container'>
        <div className='row my-2'>
            {data.map(item=>{
                return(
                    <div className='col'>
                    <div className='card'>
                        <img src='' alt=''/>
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.content}</p>
                            <a href="#" class="btn me-2 btn-primary">Update</a>
                            <a href="#" class="btn me-2 btn-danger">Delete</a>
                        </div>
                    </div>
                </div>
                )
            }) }

        </div>
    </section>
  )
}
