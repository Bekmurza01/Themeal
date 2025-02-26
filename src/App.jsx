import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter4 } from './router'

function App() {
  

  return (
    <div>
      <RouterProvider router={myRouter4}/>
    </div>
  )
}

export default App
