import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="container">
        <section className='flex font text-4xl justify-between'>
            <h2><Link to='/'>Product App</Link></h2>

            <ul className='flex gap-5'>
              <li><Link to="add">Add</Link></li>
              <li>About</li>
            </ul>
        </section>

        <Outlet />
    </div>
  )
}

export default Header