'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../daisy/ThemeContext';

const NavBar = () => {
  const {status, data:session} = useSession();
  
  const { theme, toggleTheme } = useTheme();

  
  return (
<div className="navbar bg-base-100 ">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/products">Products</Link></li>
        <li>
          <Link href="/users">Users</Link>
          <ul className="p-2">
            <li><Link href="/users?sortOrder=email">ordered by email</Link></li>
            <li><Link href="/users?sortOrder=name">ordered by name</Link></li>
          </ul>
        </li>
        <li><Link href="/products">Products</Link></li>

      </ul>
    </div>
    <Link href="/"className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
    <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1">
        <li><Link href="/products">Products</Link></li>
        <li>
            <details>
            <summary>Users</summary>
            <ul className="w-max">
                <li><Link href="/users?sortOrder=email">sorted by email</Link></li>
                <li><Link href="/users?sortOrder=name">sorted by name</Link></li>
            </ul>
            </details>
        </li>
        <li><Link href="/admin">admin</Link></li>


        </ul>
    </div>
    <div className="navbar-end">


        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <input
          onClick={toggleTheme}
          type="checkbox" value="synthwave" className="toggle theme-controller"/>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        <div className="dropdown dropdown-end">
        <div  tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">8</span>
            </div>
        </div>
        <div  tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
            </div>
            </div>
        </div>
        </div>
        <div className="dropdown dropdown-end">

        {status === 'unauthenticated' && <Link className='btn btn-primary' href="/api/auth/signin">Sign in</Link>}
        {status === 'authenticated' && 
        
        <>
           <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <Image width={40} height={40} alt="Tailwind CSS Navbar component" src="/avatar.webp" /> 
              </div>
            </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <Link href="/" className="justify-between">
                  {session.user?.name} <span className="badge">Profile</span>
              </Link>
              </li>
              <li><Link href="/">Settings</Link></li>
              <li><Link href="/api/auth/signout">Logout</Link></li>
          </ul>
        </>
        
        }
         
          </div>
    </div>
</div>
  )
}

export default NavBar