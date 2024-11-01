import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-10 h-16">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-2xl font-bold">eBook app</NavLink>
        <ul className="flex space-x-6 text-white">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "") + " hover:underline"}>Home</NavLink></li>
          <li><NavLink to="/products" className={({ isActive }) => (isActive ? "underline" : "") + " hover:underline"}>Products</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "") + " hover:underline"}>About</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => (isActive ? "underline" : "") + " hover:underline"}>Login</NavLink></li>
          <li><NavLink to="/register" className={({ isActive }) => (isActive ? "underline" : "") + " hover:underline"}>Create Account</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
