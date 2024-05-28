import React from 'react'
import "../../App.css";
import "./Header.css";

function Header() {
  return (
   <section>
    <nav>
      <div>
        {/* <img src="Logo.png" alt="img" /> */}
          <img src="/Logo.png" alt="Logo" width={70}/>
      </div>
      <ul className="nav-links">
    <li className='forward'><a href="/">Home</a></li>
    <li className="forward"><a href="/">Doctors</a></li>
    <li className="forward"><a href="/">Services</a></li>
    <li className="forward"><a href="/">Review</a></li>
    <li className=""><button className='btn'>Login</button></li>
  </ul>
  <button className='btn hidden-btn'>Login</button>
    </nav>
   </section>
  )
}

export default Header