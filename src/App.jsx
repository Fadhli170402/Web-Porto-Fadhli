
import React, { useState, useEffect} from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import Skill from './components/skill';
import Experience from './components/experience';
import * as THREE from 'three';
// import Animation from './components/animation';
import Education from './components/education';
import Projects from './components/project';
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Cek preferensi dark mode
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  
  return (
    // <ScrollFloat
    //   animationDuration={1}
    //   ease='back.inOut(2)'
    //   scrollStart='center bottom+=50%'
    //   scrollEnd='bottom bottom-=40%'
    //   stagger={0.03}
    // >
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-100 dark:text-gray-100 min-h-screen transition-colors duration-300">
       
        <Navbar/>
        <HeroSection/>
     
      {/* About Section with Flip Card */}
      

      {/* Skills Section */}
      <Skill/>

      {/* Experience Section */}
      <Experience/>

      {/* Education Section */}
      
     <Education/>


      {/* Projects Section */}
      <Projects/>

      {/* Footer */}
      {/* <section id="projects" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Proyek</h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Deteksi Serangan DDoS pada Jaringan SDN",
                description: "Menggunakan algoritma Random Forest untuk klasifikasi serangan dan Particle Swarm Optimization untuk seleksi fitur.",
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <input type="text" placeholder="Nama Anda" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              <input type="email" placeholder="Email Anda" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              <textarea rows="5" placeholder="Pesan Anda" className="w-full px-4 py-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-6 border-t dark:border-gray-700">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Fadhli Adhliana. All rights reserved.</p>
        </div>
      </footer>
    </div>
    // </ScrollFloat>
  );
}