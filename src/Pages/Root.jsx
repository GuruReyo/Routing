import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
// import { Link } from 'react-router-dom';
import classes from './Root.module.css';
const Root = () => {
  return (
    // <div>Layout</div>
    <>
        <MainNavigation />
        <main className={classes.content}>
         <Outlet />
        </main>
        
    </>
  );
}

export default Root;