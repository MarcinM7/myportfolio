import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Animation3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scena, kamera i renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const mount = mountRef.current;
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Przezroczyste tło
    mount.appendChild(renderer.domElement);

    // Światła
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Obiekty
    const shapes = [];
    const colors = [0x4285F4, 0x34A853, 0xFBBC05, 0xEA4335, 0x8334eb];
    
    // Tworzenie różnych kształtów
    for (let i = 0; i < 15; i++) {
      let geometry;
      const randomShape = Math.floor(Math.random() * 3);
      
      switch (randomShape) {
        case 0:
          geometry = new THREE.BoxGeometry(1, 1, 1);
          break;
        case 1:
          geometry = new THREE.SphereGeometry(0.6, 24, 24);
          break;
        case 2:
          geometry = new THREE.TorusGeometry(0.5, 0.2, 16, 32);
          break;
        default:
          geometry = new THREE.TetrahedronGeometry(0.8);
      }
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 100,
        transparent: true,
        opacity: 0.8
      });
      
      const shape = new THREE.Mesh(geometry, material);
      
      // Losowe pozycje w przestrzeni
      shape.position.x = (Math.random() - 0.5) * 15;
      shape.position.y = (Math.random() - 0.5) * 15;
      shape.position.z = (Math.random() - 0.5) * 10 - 5;
      
      // Losowe rotacje
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      
      // Zapisujemy informacje do animacji
      shape.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        movementSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01
        }
      };
      
      scene.add(shape);
      shapes.push(shape);
    }

    // Pozycja kamery
    camera.position.z = 15;

    // Resize handler
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animacja
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Animacja kształtów
      shapes.forEach(shape => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Delikatny ruch w przestrzeni
        shape.position.x += shape.userData.movementSpeed.x;
        shape.position.y += shape.userData.movementSpeed.y;
        
        // Zawracanie przy krawędziach
        if (Math.abs(shape.position.x) > 10) {
          shape.userData.movementSpeed.x *= -1;
        }
        if (Math.abs(shape.position.y) > 10) {
          shape.userData.movementSpeed.y *= -1;
        }
      });
      
      // Efekt poruszającej się kamery
      const time = Date.now() * 0.0005;
      camera.position.x = Math.sin(time) * 3;
      camera.position.y = Math.cos(time) * 2;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Czyszczenie
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      
      // Czyszczenie geometrii i materiałów
      shapes.forEach(shape => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="animation-container" />;
}

export default Animation3D;