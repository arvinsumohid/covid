

const countries = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_COUNTRIES_BEGIN'
        })

        return fetch(`${process.env.REACT_APP_COVID_19_API_COUNTRIES_URL}`, {
            headers: {
                'Content-Type': 'application/json',
              },
        })
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                    dispatch({
                        type: 'FETCH_COUNTRIES_SUCCESS',
                        payload: { ...json }
                    })

                    return json
                })
                .catch(error => {
                    dispatch({
                        type: 'FETCH_COUNTRIES_FAILURE',
                        payload: { error }
                    })
                })
    }
}

// get information for specific country
const country = (country) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_COUNTRY_BEGIN'
        })

        return fetch(`${process.env.REACT_APP_COVID_19_API_COUNTRY_URL}/${country}`, {
            headers: {
                'Content-Type': 'application/json',
              },
        })
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                    dispatch({
                        type: 'FETCH_COUNTRY_SUCCESS',
                        payload: { ...json }
                    })

                    return json
                })
                .catch(error => {
                    dispatch({
                        type: 'FETCH_COUNTRY_FAILURE',
                        payload: { error }
                    })
                })

    }
}

//summary of all countries
const countriesSummary = (country) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_SUMMARY_BEGIN'
        })

        return fetch(`${process.env.REACT_APP_COVID_19_API_SUMMARY_URL}`, {
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: 'FETCH_SUMMARY_SUCCESS',
                payload: { ...json }
            })

            return json
        })
        .catch(error => {
            dispatch({
                type: 'FETCH_SUMMARY_FAILURE',
                payload: { error }
            })
        })
    }
}

function handleErrors(response) {
    if( !response.ok )
        throw Error(response.statusText)

    return response
}

export default {
    countries,
    country,
    countriesSummary
}