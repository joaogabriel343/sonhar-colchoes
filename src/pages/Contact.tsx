
import React, { useState, useEffect } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { toast } from "sonner";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
  };

  return (
    <div className={`min-h-screen bg-background ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sonhar-black-900/90 to-sonhar-black-900/70 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-4 animate-fade-in">
            Entre em Contato
          </h1>
          <p className="text-lg text-white/90 text-shadow max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Estamos aqui para ajudar. Tire suas dúvidas ou solicite um orçamento personalizado.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-sonhar-red-100">
                      <MapPin className="text-sonhar-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                      <p className="text-sonhar-black-600">R. Humberto Pizo, 999 <br />Jardim Petropolis, Varginha - MG<br />CEP: 37026-540</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-sonhar-red-100">
                      <Phone className="text-sonhar-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                      <p className="text-sonhar-black-600">(35) 99975-9936</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-sonhar-red-100">
                      <Clock className="text-sonhar-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Horário de Funcionamento</h3>
                      <p className="text-sonhar-black-600">Segunda a Sexta: 10h às 22h</p>
                      <p className="text-sonhar-black-600">Sábado: 10h às 22h</p>
                      <p className="text-sonhar-black-600">Domingo: 13h às 19h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    
                    <a href="https://www.instagram.com/sonharcolchoesvga/" className="w-10 h-10 flex items-center justify-center rounded-full bg-sonhar-red-600 text-white hover:bg-sonhar-red-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
           
           {/* Contact Section */}
           <div className="lg:col-span-3">
              <div className="glass-card p-8 rounded-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
                
                <p className="text-sm font-medium text-sonhar-black-700 mb-4">
                  Se você tem alguma dúvida, sugestão ou gostaria de conversar conosco, não hesite em nos enviar uma mensagem. Estamos à disposição!
                </p>
                
                <p className="text-sm font-medium text-sonhar-black-700 mb-4">
                  Para entrar em contato diretamente pelo WhatsApp, clique no link abaixo:
                </p>
                
                <a 
                  href="https://wa.me/5535999759936?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20alguns%20Produtos!%F0%9F%98%8A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sonhar-red-600 hover:text-sonhar-red-700 transition-colors"
                >
                  <span className="font-semibold">Clique aqui para conversar no WhatsApp</span>
                </a>
                
                <div className="mt-6">
                  <img src="https://images.tcdn.com.br/img/img_prod/631328/cama_de_casal_100_mdf_monaco_cinamomo_off_white_fenix_5141_1_257e3282705d1729fcf3db44e5a401ed.jpg" alt="Imagem de contato" className="w- rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-sonhar-black-100">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            title="Nossa Localização"
            subtitle="Visite nossa loja e confira pessoalmente nossa linha de produtos."
          />
          
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3747740427284!2d-45.45230800321049!3d-21.571289399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca937514066ec3%3A0x84f8d66ee3565204!2sSONHAR%20COLCH%C3%95ES%20E%20ESTOFADOS%20-%20SHOPPING!5e0!3m2!1spt-BR!2sbr!4v1742767397649!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
