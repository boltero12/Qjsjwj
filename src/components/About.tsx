import React, { useState, useEffect } from 'react';
import { Shield, Clock, ThumbsUp, User, Users } from 'lucide-react';

const About: React.FC = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const features = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Seguridad Garantizada",
      description: "Tus datos personales y financieros están protegidos con los más altos estándares de seguridad."
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "Proceso Rápido",
      description: "Evaluación y aprobación en menos de 24 horas. El dinero en tu cuenta en tiempo récord."
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-blue-600" />,
      title: "Sin Comisiones Ocultas",
      description: "Transparencia total en nuestros servicios. Conoce exactamente lo que pagas desde el principio."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Por Qué Elegirnos
          </h2>
          <p 
            className={`text-gray-700 text-lg transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            En Crediar nos especializamos en préstamos personales adaptados a tus necesidades. 
            Con más de 10.000 clientes satisfechos, somos tu mejor opción para financiar tus proyectos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-700 ${
                isVisible 
                  ? `opacity-100 translate-y-0 delay-${index * 100}` 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-xl transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-xl transform -translate-x-20 translate-y-20"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Nuestras Cifras</h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold mb-1">+10.000</p>
                  <p className="text-sm text-blue-100">Clientes satisfechos</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mx-auto mb-3">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold mb-1">+500</p>
                  <p className="text-sm text-blue-100">Préstamos esta semana</p>
                </div>
                <div className="text-center col-span-2">
                  <p className="text-4xl font-bold mb-1">$250M+</p>
                  <p className="text-sm text-blue-100">En préstamos otorgados</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Estamos para Ayudarte</h3>
            <p className="text-gray-700 mb-6">
              En Crediar, entendemos que cada persona tiene necesidades financieras únicas. Por eso, ofrecemos préstamos personales flexibles que se adaptan a tu situación.
            </p>
            <p className="text-gray-700 mb-6">
              Nuestro equipo de expertos está disponible para asesorarte y encontrar la mejor solución para tus proyectos. Con un proceso 100% digital, puedes solicitar tu préstamo desde la comodidad de tu hogar.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
              <p className="text-gray-800 font-medium mb-3">
                "Crediar me ayudó a financiar la renovación de mi hogar con un proceso rápido y transparente. ¡Totalmente recomendado!"
              </p>
              <p className="text-gray-600 text-sm">— María L., cliente desde 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;