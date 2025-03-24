import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ProductCard from '@/components/ui/ProductCard';
import { products, Product } from '@/lib/data';
import { Search, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Available categories
  const categories = ['Colchão', 'Estofado', 'Poltrona', 'Puff'];

  useEffect(() => {
    // Forçar a rolagem para o topo da página
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Filter products based on search term and category
    const results = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className={`min-h-screen bg-background ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sonhar-black-900/90 to-sonhar-black-900/70 z-0"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg mb-4 animate-fade-in">
            Nossos Produtos
          </h1>
          <p className="text-lg text-white/90 text-shadow max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Descubra nossa linha completa de colchões e estofados, desenvolvidos com qualidade premium para seu conforto.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Filters and Search Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white rounded-lg shadow-md p-6 -mt-16 relative z-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-sonhar-black-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-md border border-sonhar-black-200 focus:outline-none focus:ring-2 focus:ring-sonhar-red-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="text-sonhar-black-700 flex items-center">
                <Filter size={18} className="mr-2" />
                <span className="font-medium">Filtrar:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === '' 
                      ? 'bg-sonhar-red-600 text-white' 
                      : 'bg-sonhar-black-100 text-sonhar-black-600 hover:bg-sonhar-red-100 hover:text-sonhar-red-600'
                  }`}
                >
                  Todos
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category 
                        ? 'bg-sonhar-red-600 text-white' 
                        : 'bg-sonhar-black-100 text-sonhar-black-600 hover:bg-sonhar-red-100 hover:text-sonhar-red-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    category={product.category}
                    description={product.description}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-5xl mb-4">😕</div>
              <h3 className="text-xl font-bold mb-2">Nenhum produto encontrado</h3>
              <p className="text-sonhar-black-500">
                Tente ajustar seus filtros ou buscar por outro termo.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="mt-4 button-primary"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
