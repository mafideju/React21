import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';

function Instructions () {
    return (
        <>
            <h1 className="title">Instruções</h1>
            <ol className='repos__card'>
                <li className='repos__items'>
                    <h3>Usuários Git</h3>
                    <FaUserFriends color='rgb(255, 191, 116)' size={140} />
                </li>
                <li className='repos__items'>
                    <h3>Batalha</h3>
                    <FaFighterJet color='#727272' size={140} />
                </li>
                <li className='repos__items'>
                    <h3 >Resultados</h3>
                    <FaTrophy color='rgb(255, 215, 0)' size={140} />
                </li>
            </ol>
        </>
    )
}

export default Instructions;