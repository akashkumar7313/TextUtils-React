
import React from 'react'


export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <div className="container-fluid">

    <a className="navbar-brand" href="/"><h3 align="center"> TextUtils</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    );
}