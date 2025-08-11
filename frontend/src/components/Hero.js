import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warmCream via-lightTan to-warmTan"></div>
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-deepBrown bistro-font tracking-tight">
              Le Bistro
            </h1>
            <div className="flex items-center justify-center space-x-2 text-warmBrown">
              <MapPin className="w-5 h-5" />
              <p className="text-xl md:text-2xl font-medium">Grisolles</p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-deepBrown/80 max-w-2xl mx-auto leading-relaxed">
            Cuisine traditionnelle faite maison dans une ambiance conviviale
          </p>

          {/* Key highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-deepBrown">
              <Clock className="w-5 h-5 text-warmBrown" />
              <span className="font-medium">Ouvert 6 jours/7</span>
            </div>
            <div className="flex items-center space-x-2 text-deepBrown">
              <span className="w-2 h-2 bg-warmBrown rounded-full"></span>
              <span className="font-medium">Salle climatisée</span>
            </div>
            <div className="flex items-center space-x-2 text-deepBrown">
              <span className="w-2 h-2 bg-warmBrown rounded-full"></span>
              <span className="font-medium">Terrasse</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <a
              href="tel:+33619202555"
              className="inline-flex items-center px-8 py-4 bg-warmBrown text-white rounded-xl hover:bg-deepBrown transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-3" />
              <span className="text-lg font-medium">06 19 20 25 55</span>
            </a>
            <button
              onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-warmBrown text-warmBrown rounded-xl hover:bg-warmBrown hover:text-white transition-all duration-300"
            >
              <span className="text-lg font-medium">Voir le menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-warmBrown/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-warmBrown/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;