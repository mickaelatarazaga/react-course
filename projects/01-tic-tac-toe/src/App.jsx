import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
};

const board = Array(9).fill(null);


const Square = ({ children, updateBoard, index }) => {
  return (
    <div className='square'>
      <span>{children}</span>
    </div>
  )
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index}>
                {index}              
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
