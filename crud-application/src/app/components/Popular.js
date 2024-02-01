import React from 'react';
import { useGlobalContext } from '../context/global';

function Popular() {

    const {popularAnime, isSearch} = useGlobalContext();

    return (
        <div> Popular </div>
    )
}

export default Popular