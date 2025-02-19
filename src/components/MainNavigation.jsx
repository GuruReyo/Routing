import React from 'react'
// import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
const MainNavigation = () => {
  return (
    // <div>MainNavigation</div>
    <>
        <header className={classes.header}>
            <ul className={classes.list}>
                <li><NavLink to='' className={({isActive})=>
                  isActive ? classes.active : undefined}
                  end
                  >Home</NavLink></li>
                <li><NavLink to='/products' 
                className={({isActive})=>
                  isActive ? classes.active : undefined}
                  >Products</NavLink></li>
                {/* <li><Link to='#'>Home</Link></li> */}
            </ul>
        </header>
    </>
  )
}

export default MainNavigation;