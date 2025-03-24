
import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

// Create our own team data since it's not exported from data.ts
const teamData = [
  {
    id: 1,
    name: "Wilson",
    position: "CEO & Fundador",
    bio: "Com mais de 10 anos de experiência no setor de colchões, Wilson junto com Andrea fundou a Sonhar com a visão de revolucionar o sono dos brasileiros através de tecnologia e inovação.",
    image: "https://i.postimg.cc/NGWR4c94/outro.png"
  },
  {
    id: 2,
    name: "Andrea",
    position: "CEO & Fundador",
    bio: "Andrea, junto com o Wilson fundou a Sonhar Colchões, garantindo o máximo conforto e durabilidade.",
    image: "https://i.postimg.cc/tTG8GfYG/Andrea-removebg-preview-1-1.jpg"
  },
  {
    id: 3,
    name: "Eliane",
    position: "Consultora de Venda",
    bio: "A nossa vendedora está atuando à anos no mercado das vendas, uma ótima Profissional!",
    image: "https://i.postimg.cc/MHPsHrKT/eliane.png"
  },
  {
    id: 4,
    name: "Vanessa",
    position: "Consultora de Venda",
    bio: "Uma ótima vendedora da sonhar colchões e estofados, trabalhando na parte da tarde no shopping Via Café Garden!",
    image: "https://i.postimg.cc/C10rQqQF/vanessa-removebg-preview.png"
  },
  {
    id: 5,
    name: "Natália",
    position: "Consultora de Venda",
    bio: "Uma excelente funcionaária da Sonhar colchões e estofados, trabalhando na parte da manhã no shopping Via Café Garden! ",
    image: "#"
  }
];

const Team = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`min-h-screen bg-background ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2684&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sonhar-black-900/90 to-sonhar-black-900/70 z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-4 animate-fade-in">
            Nossa Equipe
          </h1>
          <p className="text-lg text-white/90 text-shadow max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Conheça os profissionais dedicados que estão por trás da qualidade e inovação da Sonhar Colchões.
          </p>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            title="Liderança"
            subtitle="Uma equipe experiente e apaixonada por proporcionar o melhor descanso para você."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                image={member.image}
                name={member.name}
                position={member.position}
                bio={member.bio}
                animation={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-sonhar-black-100">
        <div className="container mx-auto px-4">
          <AnimatedHeading 
            title="Nossos Valores"
            subtitle="Princípios que guiam cada decisão e produto da Sonhar Colchões."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sonhar-red-100 text-sonhar-red-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="text-sonhar-black-600">Utilizamos os melhores materiais e processos para garantir produtos duráveis e confortáveis.</p>
            </div>
            
            <div className="glass-card p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sonhar-red-100 text-sonhar-red-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inovação</h3>
              <p className="text-sonhar-black-600">Constantemente pesquisamos e implementamos novas tecnologias para melhorar o sono.</p>
            </div>
            
            <div className="glass-card p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sonhar-red-100 text-sonhar-red-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cliente em Primeiro Lugar</h3>
              <p className="text-sonhar-black-600">Todas as nossas decisões são tomadas pensando no bem-estar e satisfação dos clientes.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
