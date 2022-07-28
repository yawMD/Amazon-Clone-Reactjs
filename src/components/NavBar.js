import React from 'react';
import "./NavBar.css"

const NavBar = ()=>{
    return(
        <header>
        <nav>
        <div className="image"><img src="./loog.png" width="100px" height="100%" alt=""/></div>
        <div className="nav"> 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" width="20px" height="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
        <p>Deliver to <br /><h2>Ghana</h2></p>
        <input type="text" name="" />
        </div>
        <div className="last-lane">
        <div>
        <p>Hello,sign in <br /><h4>Accounts and list</h4></p>
        </div>
        <div>
        <p>Returns<br /><h4>and Orders</h4></p>
        </div>
        <div>
        <p>Cart</p>
        </div>
        </div>
        </nav>
        <div className="second-nav">
        <div className="second">
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" class="menu h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
<p>All</p>
        </div>
        <ul>
        <li>Todays deal</li>
        <li>Customer service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
        </ul>
        
        </div>
        </header>
    )
}
export default NavBar;