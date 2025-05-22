import React, { useState, useEffect } from 'react';
import { ChevronRight, ShieldCheck, Clock, Award, ArrowRight, Wallet, PiggyBank, BadgeCheck, TrendingUp, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { useSpring, animated } from '@react-spring/web';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  const glowSpring = useSpring({
    from: { background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.2) 0%, transparent 70%)' },
    to: { background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.4) 0%, transparent 70%)' },
    config: { duration: 2000 },
    loop: true
  });

  const features = [
    { icon: <TrendingUp className="h-5 w-5 text-blue-600" />, text: "Tasa preferencial" },
    { icon: <Clock className="h-5 w-5 text-blue-600" />, text: "Respuesta en 24hs" },
    { icon: <Sparkles className="h-5 w-5 text-blue-600" />, text: "Sin gastos ocultos" }
  ];

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white"
    >
      {/* Enhanced background elements */}
      <animated.div style={glowSpring} className="absolute inset-0 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Enhanced left content */}
          <motion.div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 font-medium text-sm backdrop-blur-sm border border-blue-100/50"
            >
              <motion.span 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mr-2"
              >
                ✨
              </motion.span>
              Préstamos personales sin complicaciones
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            >
              Obtén el{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  crédito
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600/30 rounded-full"
                  animate={{ scaleX: [0, 1], opacity: [0, 1] }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>{' '}
              que necesitas
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 mb-8 max-w-xl"
            >
              Préstamos desde $50.000 hasta $2.500.000 con plazos de hasta 60 meses. 
              Proceso simple, rápido y seguro.
            </motion.p>

            {/* New Features List */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-100"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                >
                  {feature.icon}
                  <span className="ml-2 text-sm text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a 
                href="https://crediar.webcindario.com/index.html"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-xl transition-all duration-300 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar Ahora</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="#calculator" 
                className="px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calcular Cuota
              </motion.a>
            </motion.div>

            {/* Enhanced stats with animations */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mr-3 shadow-lg">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <motion.p 
                    className="text-2xl font-bold text-gray-900"
                    animate={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ duration: 1 }}
                  >
                    +10.000
                  </motion.p>
                  <p className="text-sm text-gray-600">Clientes satisfechos</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mr-3 shadow-lg">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <motion.p 
                    className="text-2xl font-bold text-gray-900"
                    animate={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    +500
                  </motion.p>
                  <p className="text-sm text-gray-600">Préstamos esta semana</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced right content - 3D Card visual */}
          <motion.div 
            className="md:w-1/2"
            variants={itemVariants}
          >
            <Tilt
              className="relative"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
            >
              {/* Enhanced floating card with 3D effect */}
              <motion.div 
                className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 relative z-10"
                animate={floatingAnimation}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-6 w-6 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  variants={itemVariants}
                >
                  Tus sueños, nuestro compromiso
                </motion.h3>
                
                <motion.p 
                  className="text-gray-700 mb-6"
                  variants={itemVariants}
                >
                  Con nuestro servicio, obtendrás acceso a préstamos diseñados para adaptarse a tus necesidades.
                </motion.p>

                {/* New Feature Cards */}
                <motion.div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-inner"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Wallet className="h-6 w-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Cuotas Fijas</h4>
                    <p className="text-sm text-gray-600">Sin sorpresas ni ajustes</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-gradient-to-br from-green-50 to-white p-4 rounded-lg shadow-inner"
                    whileHover={{ scale: 1.05 }}
                  >
                    <PiggyBank className="h-6 w-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Tasa Fija</h4>
                    <p className="text-sm text-gray-600">15% anual</p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-4 mb-4 shadow-inner"
                  variants={itemVariants}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Monto</span>
                    <span className="font-medium text-gray-900">$850.000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Plazo</span>
                    <span className="font-medium text-gray-900">36 meses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cuota mensual</span>
                    <motion.span 
                      className="font-bold text-blue-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      $28.350
                    </motion.span>
                  </div>
                </motion.div>

                {/* New Benefits List */}
                <motion.div 
                  className="mb-6 space-y-3"
                  variants={itemVariants}
                >
                  {['Aprobación en 24 horas', 'Sin gastos ocultos', 'Cancelación anticipada sin costo'].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center text-sm text-gray-700"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <BadgeCheck className="h-5 w-5 text-green-600 mr-2" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.a 
                  href="#calculator" 
                  className="block text-center w-full py-3 bg-gradient-to-r from-blue-600/10 to-blue-600/20 text-blue-700 rounded-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Calcular mi préstamo
                </motion.a>
              </motion.div>

              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute top-10 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-amber-400/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-600/30 to-blue-600/10 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Tilt>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;