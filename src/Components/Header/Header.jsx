import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <div>
        
        <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">R-Router</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <Link to="/footer">Footer</Link>
      </li>
      <li>
        <Link to="/banner">Banner</Link>
      </li>
      <li>
        <Link to="/main">Main</Link>
      </li>
    </ul>
  </div>
</div>

<Outlet/>
    </div>
  )
}

export default Header