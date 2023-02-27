import React, { useMemo, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { BufferGeometry, BufferAttribute } from 'three'

const Cube: React.FC = () => {
  const cubeRef = useRef<THREE.Points>()

  const points = useMemo(() => {
    const positions: number[] = []
    const colors: number[] = []

    for (let i = 0; i < 1000; i++) {
      // Generate random position and color values for each point
      const x = (Math.random() - 0.5) * 2
      const y = (Math.random() - 0.5) * 2
      const z = (Math.random() - 0.5) * 2
      positions.push(x, y, z)

      const r = Math.random()
      const g = Math.random()
      const b = Math.random()
      colors.push(r, g, b)
    }

    // Create a buffer geometry with the positions and colors
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3))
    geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3))

    return geometry
  }, [])

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01
      cubeRef.current.rotation.y += 0.01
    }
  })

  return (
    <points 
    // here utilize cubeRef to translate the cube
    geometry={points} scale={[2,2,2]}>
      <pointsMaterial vertexColors={true} size={0.15} />
    </points>
  )
}

export default Cube