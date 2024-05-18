import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";

import "../styles/Header.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo and Hamburger Button */}
        <div className="flex items-center">
          <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
            <HiMiniBars3BottomLeft className="text-2xl" />
          </label>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-black text-accent-content ml-2"
          >
            <AiFillShopping />
            Zashop
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-4">
          <NavLink className="text-accent-content" to="/">
            Home
          </NavLink>
          <NavLink className="text-accent-content" to="/shop">
            Shop
          </NavLink>
          <NavLink className="text-accent-content" to="/about-us">
            About us
          </NavLink>
          <NavLink className="text-accent-content" to="/contact">
            Contact
          </NavLink>
          <NavLink className="text-accent-content" to="/login">
            Login
          </NavLink>
          <NavLink className="text-accent-content" to="/register">
            Register
          </NavLink>
        </div>

        {/* Profile and Cart */}
        <div className="flex items-center space-x-4">
          <Link
            to="/search"
            className="btn btn-ghost btn-circle text-accent-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
          <Link
            to="/wishlist"
            className="btn btn-ghost btn-circle text-accent-content"
          >
            <FaHeart className="text-xl" />
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-accent-content">
                  Items
                </span>
                <span className="text-info text-accent-content">
                  Subtotal: $
                </span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn bg-blue-600 btn-block text-white hover:bg-blue-500 text-base-content"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/user-profile"
                  className="justify-between text-accent-content"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/order-history" className="text-accent-content">
                  Order history
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-accent-content">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar for Mobile */}
        <div className="lg:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{/* Page content here */}</div>
            <div className="drawer-side z-10">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
                <label htmlFor="my-drawer" className="btn drawer-button">
                  <FaWindowClose className="text-3xl ml-auto" />
                </label>
                {/* Sidebar content here */}
                <li className="text-xl">
                  <NavLink className="text-accent-content" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink className="text-accent-content" to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink className="text-accent-content" to="/about-us">
                    About us
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink className="text-accent-content" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink className="text-accent-content" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="text-xl">
                  <NavLink className="text-accent-content" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
