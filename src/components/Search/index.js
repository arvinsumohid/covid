import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'

import allActions from '../../store/actions';

function Search() {
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(allActions.countries())
    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}

export default Search
