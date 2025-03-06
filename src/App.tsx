import React, { useState, useEffect } from 'react';
import { Heart, Music, Music2, Share2, Camera } from 'lucide-react';
import { calculateDaysInLove } from './utils';
import { FireworksCanvas } from './components/Fireworks';
import { DodgeButton } from './components/DodgeButton';
import { PhotoGallery } from './components/PhotoGallery';
import { CountUpAnimation } from './components/CountUpAnimation';
import music1 from "./public/audio/music1.mp3"

function App() {
  const [showProposal, setShowProposal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const startDate = new Date('2024-07-14'); // Adjust to your actual start date
  const daysInLove = calculateDaysInLove(startDate);

  useEffect(() => {
    const audio = new Audio(music1);
    audio.loop = true;

    if (isPlaying) {
      audio.play().catch(console.error);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ela disse SIM! 💍',
          text: 'Maria Luiza Kubo aceitou meu pedido de casamento!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {accepted && <FireworksCanvas />}
      
      <div className="fixed top-4 right-4 z-50 flex gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-white shadow-lg hover:bg-pink-50 transition-all"
        >
          {isPlaying ? <Music2 className="text-pink-600" /> : <Music className="text-pink-600" />}
        </button>
      </div>

      <main className="container mx-auto px-4 py-8 relative">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 font-serif">
            Maria Luiza Kubo
          </h1>
          
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed">
              Desde o primeiro momento em que nos conhecemos, meu coração soube que você era especial.
              Cada dia ao seu lado tem sido uma aventura incrível, cheia de amor, risos e momentos inesquecíveis.
              Nosso amor cresceu de uma forma tão natural e bonita, que hoje não consigo mais imaginar minha vida sem você.
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="bg-white/90 p-6 rounded-lg shadow-lg">
              <CountUpAnimation end={daysInLove} duration={3} />
              <p className="text-pink-600 font-medium">Dias Apaixonados</p>
            </div>
          </div>

          <PhotoGallery />

          {!showProposal && (
            <button
              onClick={() => setShowProposal(true)}
              className="animate-pulse bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all"
            >
              Clique aqui, meu amor ❤️
            </button>
          )}

          {showProposal && !accepted && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-pink-600 font-serif">
                Quer casar comigo?
              </h2>
              
              <div className="flex justify-center gap-8">
                <button
                  onClick={() => setAccepted(true)}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all"
                >
                  Sim!
                </button>
                
                <DodgeButton text="Não" />
              </div>
            </div>
          )}

          {accepted && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-pink-600 font-serif">
                Ela disse SIM! 💍
              </h2>
              
              <p className="text-2xl text-gray-700">
                Meu coração está explodindo de felicidade! 
                Mal posso esperar para começar nossa vida juntos!
              </p>
              
              <button
                onClick={handleShare}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center gap-2"
              >
                <Share2 size={20} />
                Compartilhar a novidade
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;