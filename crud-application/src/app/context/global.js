import React, { useContext } from "react";
import { useReducer } from 'react';

// This is essentially a way to implement a global state variable for data
// so you do not have to manually pass down data through each component in the structure tree
const GlobalContext = React.createContext();
const baseURL = "https://api.jikan.moe/v4";

//actions
const load = "LOADING";
const search = "SEARCH";
const get_popular_anime = "GET_POPULAR_ANIME";
const get_upcoming_anime = "GET_UPCOMING_ANIME";
const get_airing_anime = "GET_AIRING_ANIME";

const reducer = (state, action) => {

    // state managing system. switch statements to determine what action needs to be done
    switch(action.type){
        case load:
            return{...state, loading: true}
        
        case get_popular_anime:
            return {...state, PopularAnimes: action.payload, loading: false}

        default:
            return state;
    }
}

export const GlobalContextProvider = ({children}) => {

    const initialState = {
        PopularAnimes: [],
        UpcomingAnimes: [],
        AiringAnimes: [],
        Pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // fetch popular animes
    const getPopularAnime = async () => {

        // dispatch is used to send a signal to the state managing system that an action needs to happen
        dispatch({type: load});

        const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
        const data = await response.json();

        dispatch({type: get_popular_anime, payload: data.data});

        console.log(state.PopularAnimes);
    }

    // upon initial render, call this 
    React.useEffect(() => {
        getPopularAnime();
    }, [])

    return(
        <GlobalContext.Provider value={{

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// this function is going to allow us to use the global context
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}