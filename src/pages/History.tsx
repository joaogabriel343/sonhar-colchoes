import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import { historicalMilestones } from '@/lib/data';

const History = () => {
  const timelineRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    // Garantir que o scroll comece no topo
    window.scrollTo(0, 0);
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background page-wrapper">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3027&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sonhar-black-900/90 to-sonhar-black-900/70 z-0"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-4 animate-fade-in">
            Nossa História
          </h1>
          <p className="text-lg text-white/90 text-shadow max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Uma jornada de dedicação e paixão por proporcionar conforto e qualidade.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedHeading 
              title="Uma Trajetória de Sucesso"
              subtitle="A Sonhar Colchões e Estofados começou como um pequeno sonho e hoje é referência no setor, sempre mantendo seus valores de qualidade e atendimento personalizado."
            />
            
            <div className="mt-8 text-sonhar-black-700 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <p className="mb-4">
              Wilson e Andrea fundaram a Sonhar Colchões e Estofados com o propósito de oferecer conforto e qualidade aos lares. Desde a inauguração da primeira loja em Minas Gerais, o casal se dedicou a proporcionar um atendimento diferenciado e produtos de excelência. Com trabalho e visão estratégica, a marca se expandiu para outras cidades, consolidando-se no mercado de colchões e estofados.o setor de colchões e estofados. O compromisso com a qualidade e a satisfação dos clientes rapidamente impulsionou a expansão da marca para outras cidades do estado.
              </p>
              <p>
                Ao longo dos anos, a empresa diversificou seu catálogo, firmou parcerias estratégicas e inaugurou uma unidade em shopping, ampliando sua presença. Além do crescimento comercial, Wilson e Andrea investiram em projetos sociais, reforçando seu compromisso com a comunidade. Hoje, com duas lojas e uma fábrica própria, a Sonhar Colchões continua evoluindo, mantendo sua missão de transformar sonhos em conforto.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-sonhar-black-100">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            title="Nossa Linha do Tempo"
            subtitle="Os principais marcos na história da Sonhar Colchões e Estofados."
          />
          
          <div className="relative mt-20">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-sonhar-red-300 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Timeline Items */}
            {historicalMilestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                ref={el => timelineRefs.current[index] = el}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 opacity-0 translate-y-10 transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 md:w-1/2 flex items-center justify-center md:justify-end pb-8 md:pb-0">
                  <div className={`relative ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-sonhar-red-600 text-white font-bold text-xl py-3 px-6 rounded-lg shadow-lg">
                      {milestone.year}
                    </div>
                    {/* Circle on timeline */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 hidden md:block">
                      <div className={`w-5 h-5 rounded-full border-4 border-sonhar-red-600 bg-white ${index % 2 === 0 ? 'right-8' : 'left-8'}`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="flex-shrink-0 md:w-1/2">
                  <div className={`glass-card overflow-hidden rounded-lg shadow-lg ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                    {milestone.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-sonhar-black-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vision for the Future */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedHeading 
              title="Visão para o Futuro"
              subtitle="Continuamos comprometidos com a inovação e excelência, buscando sempre novas formas de proporcionar o melhor para nossos clientes."
            />
            
            <div className="mt-8 text-sonhar-black-700 animate-fade-in">
              <p className="mb-4">
                Olhando para o futuro, a Sonhar Colchões e Estofados continua investindo em tecnologia, design e sustentabilidade. Nosso objetivo é manter-nos na vanguarda do setor, trazendo soluções inovadoras que melhorem a qualidade de vida das pessoas.
              </p>
              <p>
                Acreditamos que o conforto é essencial para uma vida plena e saudável, e é com essa convicção que seguimos trabalhando todos os dias, prontos para escrever novos capítulos nesta história de sucesso.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default History;
