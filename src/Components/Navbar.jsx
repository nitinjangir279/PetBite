import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

import { FaDog, FaCat } from "react-icons/fa";
import { GiBirdHouse, GiFishBucket, GiCow } from "react-icons/gi";
export const Navbar = () => {
    return (
        <nav>
            <div className='bg-green-900 flex p-5 justify-between text-white'>
                <div>
                    <Link to="/" className="flex items-center gap-2">
                        <FaPaw className="text-lime-400 text-2xl" />
                        <span className="text-white text-xl font-bold tracking-wide">
                            PetBite
                        </span>
                    </Link>
                </div>
                <div className='flex text-xl gap-9'>
                    <NavLink to="/" className="hover:text-lime-300">Home </NavLink>
                    <NavLink to="/products" className="hover:text-lime-300">Products</NavLink>
                    <NavLink to="/offer" className="hover:text-lime-300">Offer/Discount</NavLink>
                    <div className="relative group cursor-pointer">
                        {/* Category label */}
                        <span className="flex items-center gap-1 text-xl    text-white hover:text-lime-300">
                            Categories
                            <FaChevronDown className="text-[10px] transition-transform duration-200 group-hover:rotate-180" />
                        </span>

                        {/* Dropdown box */}
                        <div
                            className="absolute left-0 top-6 hidden group-hover:block
               w-36 bg-white border border-gray-200
               rounded-md shadow-sm py-1 z-50"
                        >
                            <NavLink
                                to="/category/dog"
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50"
                            >
                                <FaDog className="text-green-600 text-sm" />
                                Dog Food
                            </NavLink>

                            <NavLink
                                to="/category/cat"
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50"
                            >
                                <FaCat className="text-green-600 text-sm" />
                                Cat Food
                            </NavLink>

                            <NavLink
                                to="/category/bird"
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50"
                            >
                                <GiBirdHouse className="text-green-600 text-sm" />
                                Bird Food
                            </NavLink>

                            <NavLink
                                to="/category/fish"
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50"
                            >
                                <GiFishBucket className="text-green-600 text-sm" />
                                Fish Food
                            </NavLink>

                            <NavLink
                                to="/category/cattle"
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-green-50"
                            >
                                <GiCow className="text-green-600 text-sm" />
                                Cattle Food
                            </NavLink>
                        </div>
                    </div>

                    <NavLink to="/cart" className="relative">
                        🛒
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                            3
                        </span>
                    </NavLink>
                    <NavLink to="/login" className="hover:bg-gray-100 rounded-4xl "><FaUserCircle size={34} /></NavLink>
                </div>
            </div>
        </nav>
    )
}
