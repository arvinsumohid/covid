

const countries = () => {
    return dispatch => {
        dispatch({
            type: 'FETCH_COUNTRIES_BEGIN'
        })

        return fetch('https://api.covid19api.com/countries')
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

        return fetch(`https://api.covid19api.com/total/country/${country}`)
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

        return fetch('https://api.covid19api.com/summary')
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