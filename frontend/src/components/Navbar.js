import React from 'react'

export default function Navbar() {
  return (
    <section className='container-fluid p-0'>
      <nav className="navbar navbar-expand-md bg-dark border-bottom border-body" data-bs-theme="dark">
    <article className="container">
    <a className="navbar-brand" href="#">Journify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Add</a>
        </li>

        
      </ul>
    </div>
  </article>
</nav>
    </section>
  )
}
