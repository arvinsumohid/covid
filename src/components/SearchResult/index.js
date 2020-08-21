import React from 'react'
import { Link } from "react-router-dom";

import './index.scss'

const SearchResult = ({result}) => {
    // console.log(result)
    return (
        <ul className="search-result">
            {result.map((country, index) => {

                return (
                    <li key={index}>
                        <Link to={`/${country.Slug}`}>{country.Country}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SearchResult
