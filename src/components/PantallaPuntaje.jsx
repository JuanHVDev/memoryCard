import React from 'react'

const PantallaPuntaje = ({ score, bestScore }) =>
{
    return (
        <div className='flex align-middle items-center'>
            <h2 className='bg-gris rounded w-4/12 text-center py-2 text-3xl text-azul font-semibold m-4'>Currrent Score: {score}</h2>
            <h2 className='bg-gris rounded w-4/12 text-center py-2 text-3xl text-azul font-semibold m-4'>Best Score: {bestScore}</h2>
        </div>
    )
}

export default PantallaPuntaje