import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Header from '../Header'

import allActions from '../../store/actions';


const Main = ({classname = '', children, ...rest}) => {
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(allActions.countries())
        dispatch(allActions.countriesSummary())
    }, [dispatch])


    return (
        <main className={`${classname}`} {...rest}>
            <Header />
            {children}
        </main>
    )
}

export default Main
