
import React, { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  animation?: { delay: number };
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  position, 
  image, 
  bio,
  animation = { delay: 0 }
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="glass-card rounded-lg overflow-hidden hover-scale animate-fade-in"
      style={{ animationDelay: `${animation.delay}ms` }}
    >
      <div className="relative overflow-hidden h-64 md:h-72">
        {/* Blur Loading Placeholder */}
        <div className={`absolute inset-0 bg-sonhar-black-100 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`} />
        
        {/* Image */}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sonhar-black-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-sonhar-black-800 mb-1">{name}</h3>
        <p className="text-sonhar-red-600 font-medium mb-2">{position}</p>
        <p className="text-sonhar-black-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
