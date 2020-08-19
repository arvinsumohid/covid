import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import Routing from './Routing';
import Main from "../../components/Main"

import allActions from '../../store/actions';

import './index.scss';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(allActions.countries())
      dispatch(allActions.countriesSummary())
  }, [dispatch])

  return (
    <Main>
      <Routing />
    </Main>
    )

}

export default App;
