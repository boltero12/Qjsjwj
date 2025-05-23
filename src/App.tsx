import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Requirements from './components/Requirements';
import About from './components/About';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

function App() {
  // Update page title
  React.useEffect(() => {
    document.title = 'Crediar | Préstamos Personales';
  }, []);

  return (
    <div className="min-h-screen bg-soft-gray-50">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Calculator />
        <Requirements />
        <About />
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
}

export default App;