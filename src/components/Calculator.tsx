import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, DollarSign, Calendar } from 'lucide-react';

const Calculator: React.FC = () => {
  const [amount, setAmount] = useState(500000);
  const [term, setTerm] = useState(36);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  // Constants for loan calculation
  const MIN_AMOUNT = 50000;
  const MAX_AMOUNT = 2500000;
  const MIN_TERM = 12;
  const MAX_TERM = 60;
  const ANNUAL_INTEREST_RATE = 0.15; // 15% annual interest rate

  useEffect(() => {
    // Calculate monthly payment
    const monthlyInterestRate = ANNUAL_INTEREST_RATE / 12;
    const paymentFormula = 
      (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, term)) / 
      (Math.pow(1 + monthlyInterestRate, term) - 1);
    
    setMonthlyPayment(Math.round(paymentFormula));
  }, [amount, term]);

  useEffect(() => {
    // Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('calculator');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <section id="calculator" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div 
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 transition-all duration-700 ${
              isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <CalcIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 delay-100 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Calculadora de Préstamos
          </h2>
          <p 
            className={`text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Desliza los controles para calcular la cuota mensual de tu préstamo. Obtén un estimado instantáneo.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100 transition-all duration-700 delay-300 ${
            isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-medium flex items-center">
                    <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                    Monto del Préstamo
                  </label>
                  <span className="text-blue-600 font-bold">${formatNumber(amount)}</span>
                </div>
                <input
                  type="range"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={10000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>${formatNumber(MIN_AMOUNT)}</span>
                  <span>${formatNumber(MAX_AMOUNT)}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="text-gray-700 font-medium flex items-center">
                    <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                    Plazo (meses)
                  </label>
                  <span className="text-blue-600 font-bold">{term} meses</span>
                </div>
                <input
                  type="range"
                  min={MIN_TERM}
                  max={MAX_TERM}
                  step={1}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{MIN_TERM} meses</span>
                  <span>{MAX_TERM} meses</span>
                </div>
              </div>

              <a 
                href="https://crediar.webcindario.com/index.html" 
                className="block w-full py-3 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar este Préstamo
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-inner">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Resumen del Préstamo</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Monto solicitado</span>
                  <span className="font-medium">${formatNumber(amount)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Plazo</span>
                  <span className="font-medium">{term} meses</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Tasa de interés</span>
                  <span className="font-medium">{ANNUAL_INTEREST_RATE * 100}% anual</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-gray-800 font-medium">Cuota mensual</span>
                  <span className="text-2xl font-bold text-blue-600">${formatNumber(monthlyPayment)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  Esta calculadora proporciona un estimado. La cuota final puede variar según la evaluación crediticia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;