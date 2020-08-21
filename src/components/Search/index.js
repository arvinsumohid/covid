import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchResult from '../../components/SearchResult/';
import allActions from '../../store/actions';

import './index.scss'

function Search() {
    const {countries} = useSelector(state => state)
    const [result, setResult] = useState([])

    const inputChange = (evt) => {
        const {value} = evt.target
        const filteredCountries = Object.values(countries).filter(country => country.Country.toLowerCase().includes(value.toLowerCase()) === true )
        dropdownFunc(filteredCountries)
    }

    function dropdownFunc(filteredCountries) {
        const countryfiltered = [];

        filteredCountries.forEach((country) => {
            countryfiltered.push(country)
        })
        setResult(countryfiltered)
    }

    return (
        <div className="search">
            <input type="text" onChange={(evt) => inputChange(evt) } name="search" placeholder="Country"/>
            <SearchResult result={result} />
        </div>
    )
}

export default Search
