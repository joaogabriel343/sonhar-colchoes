import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ProductCard from '@/components/ui/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { products } from '@/lib/data';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection(0);
      } else if (scrollPosition < windowHeight * 1.5) {
        setActiveSection(1);
      } else {
        setActiveSection(2);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Featured products (just get the first 3)
  const featuredProducts = products.slice(0, 3);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Immersive Hero Section with parallax effect */}
      <section className="relative h-screen overflow-hidden">
        <Header />
        
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://i.postimg.cc/TY3DZmcz/11-de-maio.png")',
            transform: `translateY(${activeSection * -5}%)`,
            transition: 'transform 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sonhar-black-900/90 via-sonhar-black-800/70 to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-24">
          <div className="max-w-xl animate-fade-in-left" style={{ animationDelay: '300ms' }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
               <span className="block">Promoção no Mês</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sonhar-red-300 to-sonhar-red-600">
                do dia das mães
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md">
              Cada produto é uma experiência sensorial única, 
              desenhada para transformar seu espaço e elevar seu bem-estar.
            </p>
            
            {/* Innovative Call-to-Action */}
            <div 
              className="inline-flex items-center gap-3 cursor-pointer group"
              onClick={scrollToNextSection}
            >
              <span className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-sonhar-red-400 text-sonhar-red-400 group-hover:bg-sonhar-red-400 group-hover:text-white transition-all duration-300">
                <ChevronDown size={24} className="animate-bounce" />
              </span>
              <span className="text-white text-lg font-medium group-hover:text-sonhar-red-300 transition-colors">
                Explore nossa coleção
              </span>
            </div>
          </div>
        </div>
        
        {/* Floating Elements - Decorative Shapes */}
        <div className="absolute right-10 top-1/4 w-64 h-64 rounded-full bg-sonhar-red-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 rounded-full bg-sonhar-red-300/30 blur-2xl"></div>
      </section>

      {/* Innovative Products Showcase with 3D Perspective */}
      <section className="relative min-h-screen py-24 bg-black">
        <div className="container mx-auto px-4">
          {/* 3D Rotated Heading */}
          <div className="mb-16 transform perspective-1000">
            <AnimatedHeading 
              title="Experiências de Conforto"
              subtitle="Além de produtos, criamos experiências únicas de relaxamento e bem-estar para cada momento da sua vida."
              delay={100}
              className="text-white"
              subtitleClassName="text-white/70"
            />
          </div>
          
          {/* Staggered Product Cards with Spotlight Effect */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
            {/* Spotlight Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-sonhar-red-600/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>
            
            {/* Product Cards */}
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="transform transition-all duration-700"
                style={{ 
                  transform: `perspective(1000px) rotateY(${(index - 1) * 5}deg)`,
                  animationDelay: `${index * 200}ms`,
                  zIndex: index === 1 ? 10 : 0
                }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                  isHighlighted={index === 1}
                />
              </div>
            ))}
          </div>
          
          {/* Innovative Call-to-Action */}
          <div className="mt-20 text-center">
            <Link 
              to="/produtos" 
              className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-sonhar-red-600 to-sonhar-red-700 text-white rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-sonhar-red-600/30"
            >
              <span>Descubra toda nossa coleção</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight size={18} className="text-white" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Interactive Experience Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-sonhar-black-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Interactive Image */}
            <div className="rounded-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Ambiente personalizado" 
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sonhar-black-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Ambientes Personalizados</h3>
                  <p className="text-white/80">Transformamos qualquer espaço em um santuário de conforto e estilo.</p>
                </div>
              </div>
            </div>
            
            {/* Content with Interactive Elements */}
            <div className="text-white space-y-8">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-sonhar-red-300">
                Conforto é uma experiência sensorial completa
              </h2>
              
              <p className="text-white/70 text-lg">
                Na Sonhar, não vendemos apenas colchões e estofados. Criamos experiências 
                completas de conforto que transformam sua casa em um refúgio de bem-estar.
              </p>
              
              {/* Interactive Feature List */}
              <div className="space-y-4">
                {[
                  { title: "Design Exclusivo", desc: "Peças que se destacam por sua originalidade e elegância." },
                  { title: "Materiais Premium", desc: "Selecionados para proporcionar a melhor experiência sensorial." },
                  { title: "Ergonomia Perfeita", desc: "Adaptados ao seu corpo para máximo conforto e suporte." }
                ].map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-sonhar-red-900/30 hover:border-sonhar-red-600/30 transition-all cursor-pointer"
                  >
                    <h4 className="text-xl font-semibold text-sonhar-red-300 mb-1">{feature.title}</h4>
                    <p className="text-white/60">{feature.desc}</p>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/historia" 
                className="inline-flex items-center text-sonhar-red-300 hover:text-sonhar-red-400 transition-colors"
              >
                <span className="mr-2">Conheça nossa história de inovação</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
