import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

function ThreeBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 800
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 50
      posArray[i + 1] = (Math.random() - 0.5) * 50
      posArray[i + 2] = (Math.random() - 0.5) * 50
      colorArray[i] = 0
      colorArray[i + 1] = Math.random() * 0.5 + 0.5
      colorArray[i + 2] = Math.random() * 0.3 + 0.2
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Wireframe Cubes
    const cubeGroup = new THREE.Group()
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.BoxGeometry(
        Math.random() * 2 + 0.5,
        Math.random() * 2 + 0.5,
        Math.random() * 2 + 0.5
      )
      const edges = new THREE.EdgesGeometry(geometry)
      const material = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x00ff88 : 0x00ccff,
        transparent: true,
        opacity: 0.3
      })
      const cube = new THREE.LineSegments(edges, material)
      cube.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 10
      )
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      cube.userData = {
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      }
      cubeGroup.add(cube)
    }
    scene.add(cubeGroup)

    camera.position.z = 20

    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.y += 0.001
      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += mouseX * 0.005
      particlesMesh.rotation.x += mouseY * 0.005

      cubeGroup.children.forEach(cube => {
        cube.rotation.x += cube.userData.rotSpeed.x
        cube.rotation.y += cube.userData.rotSpeed.y
        cube.rotation.z += cube.userData.rotSpeed.z
      })
      cubeGroup.rotation.y += 0.002

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0
    }} />
  )
}

export default ThreeBackground