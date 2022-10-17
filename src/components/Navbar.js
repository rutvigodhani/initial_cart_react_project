import React from 'react'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
             <div className="container-fluid row">
                 <a className="navbar-brand col-1" href="#">Apna Cart &nbsp; ({props.totalItem})</a>
             </div>
         </nav>
  )
}

export default Navbar;