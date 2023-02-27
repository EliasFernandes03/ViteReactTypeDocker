import React from 'react'
import { Canvas } from 'react-three-fiber'
import Cube from './Component/Cube'

const App: React.FC = () => {
  return (
    <Canvas>
      <Cube  />
    </Canvas>
  )
}

export default App
