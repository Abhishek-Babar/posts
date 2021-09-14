import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./app.css"
const SearchBar = ({sendData}) => {
    const search = useRef("");
    const searchHandler = () => {
        sendData(search.current.value)
    }
    return (
        <nav className="navbar py-3 flex justify-center items-center">
            <Link to="/"><b>All Posts</b></Link>
        <div className="w-3/6 flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input onChange={searchHandler}  ref={search} id="search" type="text" name="name" placeholder="Search Posts"
                className="w-5/6 py-2 border-b-2 border-yellow-400 outline-none focus:border-green-400" />
        </div>
        </nav>
    )
}
export default SearchBar;