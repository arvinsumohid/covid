import React from 'react'
import { Link } from "react-router-dom";

import Search from '../Search'

import './index.scss'

const Header = () => {
    return (
        <header>
            <Search />
            <div className="homebox">
                <Link to={`/`}>Home</Link>
            </div>
        </header>
    )
}

export default Header