/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import PantallaPuntaje from './components/PantallaPuntaje'
import bandit from './assets/Bandit.webp'
import bingo from './assets/Bingo.webp'
import bluey from './assets/bluey.webp'
import bob from './assets/Bob.webp'
import chilli from './assets/Chilli.webp'
import muffin from './assets/Muffin.webp'
import nana from './assets/Nana.webp'
import socks from './assets/Socks_Heeler.webp'
import stripe from './assets/Stripe.webp'
import trixie from './assets/Trixie.webp'

const data = [{
  nombre: 'Bandit',
  imagen: bandit,
  id: '1'
}, {
  nombre: 'Bingo',
  imagen: bingo,
  id: '2'
}, {
  nombre: 'Bluey',
  imagen: bluey,
  id: '3'
},
{
  nombre: 'Bob',
  imagen: bob,
  id: '4'
},
{ nombre: 'Chilli', imagen: chilli, id: '5' },
{ nombre: 'Muffin', imagen: muffin, id: '6' },
{ nombre: 'Nana', imagen: nana, id: '7' },
{ nombre: 'Socks', imagen: socks, id: '8' },
{
  nombre: 'Stripe', imagen: stripe, id: '9'
},
{ nombre: 'Trixie', imagen: trixie, id: '10' }
]
const cartasAzar = a =>
{
  return [...a].sort(() => Math.random() - 0.5)
}

function App()
{
  const [personajes, setPersonajes] = useState([])
  const [clickPersonajes, setClickPersonajes] = useState([])
  const [bestScore, setBestScore] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() =>
  {
    const cargarCartas = () =>
    {
      setPersonajes(cartasAzar(data))
    }

    cargarCartas()
  }, [])

  const handleClick = e =>
  {
    const nombrePersonaje = e.target.parentNode.lastChild.textContent

    iniciarRonda(nombrePersonaje)

    setPersonajes(cartasAzar(personajes))
  }

  const iniciarRonda = (nombrePersonajes) =>
  {
    if (clickPersonajes.includes(nombrePersonajes)) {
      resetGame()
    } else {
      const nuevoScore = score + 1
      if (nuevoScore > bestScore) setBestScore(nuevoScore)
      setScore(nuevoScore)
      setClickPersonajes(state => [...state, nombrePersonajes])
    }
  }

  const resetGame = () =>
  {
    setClickPersonajes([])
    setScore(0)
  }

  return (
    <div className="bg-amarillo">
      <h1 className="text-8xl text-azul font-bold text-center p-6 title">Memory Card</h1>
      <PantallaPuntaje score={score} bestScore={bestScore} />
      <Cards personajes={personajes} handleClick={handleClick} />
    </div>
  )
}

export default App
