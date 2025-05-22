import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X, ChevronRight } from 'lucide-react';

type Message = {
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialQuestions = [
    '¿Cómo solicito un préstamo?',
    '¿Cuáles son los requisitos?',
    '¿Cuánto tiempo tarda la aprobación?',
    '¿Puedo cancelar anticipadamente?'
  ];

  // Initial bot message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          {
            sender: 'bot',
            text: '¡Hola! Soy tu asistente virtual de Crediar. ¿En qué puedo ayudarte hoy?',
            options: initialQuestions
          }
        ]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    
    // Bot is typing
    setIsTyping(true);
    
    // Simulate bot response based on user question
    setTimeout(() => {
      let botResponse: Message = { 
        sender: 'bot', 
        text: 'Lo siento, no tengo información sobre eso. ¿Puedo ayudarte con algo más?',
        options: initialQuestions
      };
      
      // Match responses to questions
      if (text.includes('solicito') || text.includes('solicitar')) {
        botResponse = {
          sender: 'bot',
          text: 'Para solicitar un préstamo, simplemente completa el formulario en nuestra página web. Haz clic en "Solicitar Ahora" y sigue los pasos. El proceso es 100% online y muy sencillo.',
          options: ['¿Cuánto tiempo tarda la aprobación?', '¿Necesito presentar documentación?']
        };
      } else if (text.includes('requisitos')) {
        botResponse = {
          sender: 'bot',
          text: 'Los requisitos básicos son: ser mayor de 21 años, contar con DNI y tener una cuenta bancaria a tu nombre. No necesitas demostrar ingresos ni presentar garantías para préstamos menores a $500.000.',
          options: ['¿Qué pasa si no cumplo algún requisito?', '¿Cómo solicito un préstamo?']
        };
      } else if (text.includes('tiempo') || text.includes('tarda') || text.includes('aprobación')) {
        botResponse = {
          sender: 'bot',
          text: 'El proceso de aprobación es muy rápido. Una vez completada la solicitud, recibirás una respuesta en menos de 24 horas. Si es aprobado, el dinero estará en tu cuenta en 1-2 días hábiles.',
          options: ['¿Puedo cancelar anticipadamente?', '¿Cómo solicito un préstamo?']
        };
      } else if (text.includes('cancelar') || text.includes('anticipadamente')) {
        botResponse = {
          sender: 'bot',
          text: 'Sí, puedes cancelar tu préstamo anticipadamente en cualquier momento sin ninguna penalización. Esto te permitirá ahorrar en intereses por el tiempo no utilizado del préstamo.',
          options: ['¿Cuáles son los requisitos?', '¿Cómo solicito un préstamo?']
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div 
        className={`fixed z-40 bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="bg-blue-600 p-4 text-white">
          <h3 className="font-medium">Asistente Virtual</h3>
          <p className="text-sm text-blue-100">Respuestas al instante</p>
        </div>

        {/* Chat messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`rounded-2xl p-3 max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 shadow-md rounded-tl-none'
                }`}
              >
                <p>{msg.text}</p>
                
                {/* Optional response buttons */}
                {msg.options && (
                  <div className="mt-3 space-y-2">
                    {msg.options.map((option, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleSendMessage(option)}
                        className="w-full text-left text-sm p-2 rounded bg-gray-100 text-blue-600 hover:bg-gray-200 transition-colors flex items-center justify-between"
                      >
                        <span>{option}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white rounded-2xl p-3 shadow-md rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message input */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              className="flex-1 rounded-l-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                  handleSendMessage(e.currentTarget.value);
                  e.currentTarget.value = '';
                }
              }}
            />
            <button 
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
              onClick={(e) => {
                const input = e.currentTarget.previousSibling as HTMLInputElement;
                if (input.value.trim()) {
                  handleSendMessage(input.value);
                  input.value = '';
                }
              }}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;