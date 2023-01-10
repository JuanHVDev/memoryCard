import React from 'react'
import logo from '../assets/logo.jpeg'
const Cards = ({ personajes, handleClick }) =>
{
    return (
        <div className='grid grid-cols-5 gap-2'>
            {personajes.map(personaje => (
                <div className='border-2 grid grid-rows-2 h-80 text-center items-center place-content-center bg-azul rounded-2xl pt-4 shadow-2xl animacion' onClick={handleClick}>
                    <div>
                        <img className='w-3/6 m-auto p-2' src={personaje.imagen} alt="" />
                    </div>
                    <div>
                        <h3 className='text-amarillo font-bold text-2xl'>{personaje.nombre}</h3>
                    </div>
                    <div className='w-3/12'>
                        <img src={logo} alt="" />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Cards