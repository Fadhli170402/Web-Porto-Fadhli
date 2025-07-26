import React, { useEffect, useRef } from 'react';
import "../App.css";
import * as THREE from 'three';
import { TypeAnimation } from 'react-type-animation';
//
import ProfileCard from '/profile-card/Components/ProfileCard/ProfileCard';
import Typing from './name';

function HeroSection() {
      useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.zIndex = '-1';
        renderer.domElement.style.opacity = '0.2';
        renderer.domElement.style.pointerEvents = 'none';
    
        const mount = mountRef.current;
        if (mount) {
          mount.appendChild(renderer.domElement);
        }
    
        const particlesCount = 1000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
    
        for (let i = 0; i < particlesCount * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 10;
          colors[i] = Math.random();
        }
    
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
        const material = new THREE.PointsMaterial({
          size: 0.08,
          sizeAttenuation: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          vertexColors: true
        });
    
        const points = new THREE.Points(geometry, material);
        scene.add(points);
    
        camera.position.z = 2;
    
        const animate = () => {
          requestAnimationFrame(animate);
          points.rotation.y += 0.001;
          renderer.render(scene, camera);
        };
    
        animate();
    
        const onResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
    
        window.addEventListener('resize', onResize);
    
        return () => {
          window.removeEventListener('resize', onResize);
          if (mount && mount.contains(renderer.domElement)) {
            mount.removeChild(renderer.domElement);
          }
        };
      }, []);
      const mountRef = useRef(null);
    return(
         <section id="home" className="pt-24 pb-16 bg-gradient-to-r from-indigo-900 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 min-h-screen flex items-center relative">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Hello, I'm <span className="text-indigo-600 dark:text-indigo-400">Fadhli Adhliana</span>
            </h2> */}
            
            <Typing />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 center md:text-center">
              Saya adalah lulusan Informatika ITENAS dengan ketertarikan pada bidang pengembangan website serta pengembangan infrastruktur jaringan.
            </p>
           
            <div className='flex justify-center space-x-4 text-xl text-indigo-600 dark:text-indigo-400'>
            <a 
                href="https://www.linkedin.com/in/fadhli-adhliana-1477831ab/"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-indigo-400 transition'
            >
            <img src="src\assets\linkedin.png" alt="LinkedIn" className="w-12 h-12 relative z-10" />
            </a>
            <a 
                href="https://www.instagram.com/fadli_adliana17/"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-indigo-400 transition'
            >
            <img src="src\assets\instagram.png" alt="Instagram" className="w-12 h-12 relative z-10" />
            </a>
            <a 
                href="https://github.com/Fadhli170402"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-indigo-400 transition'
            >
            <img src="src\assets\social.png" alt="GitHub" className="w-12 h-12 relative z-10" />
            </a>

          </div>
          
          </div>
           
          {/* <div className="md:w-1/2 flex justify-center">
          
            <img
              src="src\assets\Foto.jpg" // Ganti dengan path ke foto kamu
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover border-4 border-indigo-300 dark:border-indigo-700 shadow-lg transform transition duration-500 hover:scale-105 relative z-10"
            />
          </div> */}
         <ProfileCard  className="dark:border-indigo-700 shadow-lg transform transition duration-500 hover:scale-105 relative z-10"
            name="Fadhli Adhliana"
            title="Web Developer"
            handle="Fadhli"
            status="Online"
            contactText="Contact Me"
            avatarUrl="src\assets\Foto.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            // onContactClick={() => console.log('Contact clicked')}
/>
        </div>

        {/* Three.js Background */}
            <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0"></div>

      </section>
    )
}
export default HeroSection;