
const initialCountriesState = {
    countries: {},
    loading: false,
    error: null,
    selectedCountry: {},
    summary: {}
  };


const country = (state = initialCountriesState, action) => {
    switch( action.type ) {

        //list of countries
        case 'FETCH_COUNTRIES_BEGIN' : {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case 'FETCH_COUNTRIES_SUCCESS' : {
            return {
                ...state,
                loading: false,
                countries: action.payload
            }
        }

        case 'FETCH_COUNTRIES_FAILURE' : {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                countries: {}
            }
        }

        // summary
        case 'FETCH_SUMMARY_BEGIN' : {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case 'FETCH_SUMMARY_SUCCESS' : {
            const {Global, Date} = action.payload
            const {NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered} = {...Global}
            const holder = {
                    summary : [
                        {
                            heading : 'Total',
                            data : [
                                { title : 'Confirmed', value : TotalConfirmed },
                                { title : 'Recovered', value : TotalRecovered },
                                { title : 'Deaths', value : TotalDeaths },
                            ]
                        },
                        { 
                            heading : 'New',
                            data : [
                                { title : 'Confirmed', value : NewConfirmed },
                                { title : 'Recovered', value : NewRecovered },
                                { title : 'Deaths', value : NewDeaths },
                            ]
                        }
                    ],
                    Date
                }
            return {
                ...state,
                loading: false,
                summary: holder
            }
        }

        case 'FETCH_SUMMARY_FAILURE' : {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                summary: {}
            }
        }

        // selected country
        case 'FETCH_COUNTRY_BEGIN' : {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case 'FETCH_COUNTRY_SUCCESS' : {
            return {
                ...state,
                loading: false,
                selectedCountry: action.payload
            }
        }

        case 'FETCH_COUNTRY_FAILURE' : {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                selectedCountry: {}
            }
        }

        default :
            return state
    }
}

export default country