
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  price?: string;
  isHighlighted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  category,
  description,
  price,
  isHighlighted = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-card rounded-lg overflow-hidden transition-all duration-500 ${
        isHighlighted ? 'scale-105 shadow-xl z-10' : 'hover-scale group'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-60">
        {/* Blur Loading Placeholder */}
        <div className={`absolute inset-0 bg-sonhar-black-100 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        
        {/* Image */}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="chip">
            {category}
          </span>
        </div>
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-sonhar-black-900/80 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-sonhar-black-800 mb-2 truncate">{name}</h3>
        <p className="text-sonhar-black-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          {price && (
            <span className="font-semibold text-sonhar-red-600">{price}</span>
          )}
          <Link 
            to={`/produtos/${id}`} 
            className="flex items-center text-sonhar-black-700 hover:text-sonhar-red-600 transition-colors duration-300"
          >
            <span className="mr-1 font-medium">Detalhes</span>
            <ArrowRight size={16} className={`transform transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
