import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'


import allActions from '../../store/actions';


const Main = ({classname = '', children, ...rest}) => {
    const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(allActions.countries())
        dispatch(allActions.countriesSummary())
    }, [dispatch])


    return (
        <main className={`${classname}`} {...rest}>
            {children}
        </main>
    )
}

export default Main
