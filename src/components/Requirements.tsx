import React, { useState, useEffect } from 'react';
import { UserCheck, CreditCard, Calendar, CheckCircle2 } from 'lucide-react';

const Requirements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('requirements');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const requirements = [
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: "Documento Nacional de Identidad (DNI)",
      description: "Es necesario presentar tu DNI para verificar tu identidad y datos personales.",
      delay: 100
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Mayor de 21 años",
      description: "Debes ser mayor de 21 años para poder solicitar nuestros préstamos personales.",
      delay: 200
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Cuenta Bancaria",
      description: "Contar con una cuenta bancaria a tu nombre para recibir el monto del préstamo.",
      delay: 300
    }
  ];

  const benefits = [
    "Aprobación rápida en 24 horas",
    "Sin comisiones ocultas",
    "Proceso 100% online",
    "Cuotas fijas en pesos",
    "Atención personalizada",
    "Pago anticipado sin penalización"
  ];

  return (
    <section id="requirements" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-60 h-60 bg-amber-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Requisitos Simples
          </h2>
          <p 
            className={`text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Obtener tu préstamo es más fácil de lo que imaginas. Solo necesitas cumplir con estos requisitos básicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {requirements.map((req, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-700 ${
                isVisible 
                  ? `opacity-100 translate-y-0 delay-${req.delay}` 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {req.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{req.title}</h3>
              <p className="text-gray-700">{req.description}</p>
            </div>
          ))}
        </div>

        <div 
          className={`bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/40 max-w-4xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Beneficios Adicionales</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://crediar.webcindario.com/index.html" 
              className="inline-block py-3 px-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar mi Préstamo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;