import React from 'react';
import { Camera } from 'lucide-react';
import imagem_1 from "../public/images/foto1.jpg"
import imagem_2 from "../public/images/foto2.jpg"
import imagem_3 from "../public/images/foto3.jpg"

export const PhotoGallery: React.FC = () => {
  const photos = [
    imagem_1,
    imagem_2,
    imagem_3,
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-serif text-pink-600 mb-4 flex items-center justify-center gap-2">
        <Camera />
        Nossos Momentos Especiais
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={photo}
              alt={`Momento especial ${index + 1}`}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm">Momento especial {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};