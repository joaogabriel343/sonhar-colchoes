import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/lib/data'; // Verifique se está correto
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ProductDetail = () => {
  const { id } = useParams(); // Captura o id do produto da URL
  const [product, setProduct] = useState<any>(null); // Estado para armazenar o produto
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [activeImage, setActiveImage] = useState(0); // Estado da imagem ativa

  useEffect(() => {
    // Encontrar o produto pelo ID
    const foundProduct = products.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.name} - Sonhar Colchões e Estofados`;
    }
    
    setLoading(false);
  }, [id]);

  // Exibição enquanto carrega
  if (loading) {
    return (
      <div className="min-h-screen bg-sonhar-black-900 flex items-center justify-center">
        <div className="animate-pulse text-sonhar-red-400">Carregando...</div>
      </div>
    );
  }

  // Se o produto não for encontrado
  if (!product) {
    return (
      <div className="min-h-screen bg-sonhar-black-900">
        <Header />
        <div className="container mx-auto py-24 px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Produto não encontrado</h1>
          <p className="text-white/70 mb-8">O produto que você está procurando não existe ou foi removido.</p>
          <Link 
            to="/produtos" 
            className="inline-flex items-center text-sonhar-red-400 hover:text-sonhar-red-300"
          >
            <ArrowLeft size={16} className="mr-2" />
            Voltar para todos os produtos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sonhar-black-900">
      <Header />
      
      <div className="container mx-auto py-12 px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-sm text-sonhar-black-300 hover:text-sonhar-red-300">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <Link to="/produtos" className="text-sm text-sonhar-black-300 hover:text-sonhar-red-300">
                    Produtos
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-sm text-sonhar-red-300">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="glass-card rounded-lg overflow-hidden h-96">
              <img 
                src={product.images[activeImage]}  // Verifique se 'product.images' está sendo carregado corretamente
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`glass-card rounded-md overflow-hidden h-20 w-20 transition-all ${activeImage === index ? 'ring-2 ring-sonhar-red-500' : 'opacity-70 hover:opacity-100'}`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="text-white space-y-6">
            <div>
              <span className="chip">{product.category}</span>
              <h1 className="text-4xl font-bold mt-2 mb-2">{product.name}</h1>
              {product.price && (
                <span className="text-xl text-sonhar-red-400 font-semibold">{product.price}</span>
              )}
            </div>
            
            <div className="border-t border-sonhar-black-700 pt-6">
              <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
              <p className="text-sonhar-black-300">{product.description}</p>
            </div>
            
            <div className="border-t border-sonhar-black-700 pt-6">
              <h2 className="text-2xl font-semibold mb-4">Especificações</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sonhar-black-300 text-sm">Dimensões</h3>
                  <p className="text-white">{product.specifications.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sonhar-black-300 text-sm">Detalhes</h3>
                  <p className="text-white">{product.specifications.materials}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-sonhar-black-700 pt-6">
              <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
              <ul className="text-sonhar-black-300">
                {product.customization.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-6">
              <Link 
                to="https://wa.me/5535999759936?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20Produto%20seu!" 
                className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-sonhar-red-600 to-sonhar-red-700 text-white rounded-full text-lg font-semibold transition-all hover:shadow-lg hover:shadow-sonhar-red-600/30"
              >
                <span>Solicitar orçamento</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowLeft size={18} className="text-white transform rotate-180" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
