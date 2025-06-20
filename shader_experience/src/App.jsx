import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import './App.css'

function Scene() {
  const materialRef = useRef()

  const vertexShader = `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      float alpha = sin(uTime);
      gl_FragColor = vec4( uMouse.x , uMouse.y, 0.0, 1.0);
    }
  `

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
      materialRef.current.uniforms.uMouse.value.set(state.pointer.x, state.pointer.y)
    }
  })

  return (
    <mesh>
      <planeGeometry args={[7.5, 7.5]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0.0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
        }}
        transparent = {true}
        blending= {THREE.NormalBlending}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}
