import React from "react";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deepBrown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bistro-font text-warmCream">
              Le Bistro
            </h3>
            <p className="text-warmCream/80 leading-relaxed">
              Cuisine traditionnelle faite maison dans une ambiance conviviale au cœur de Grisolles.
            </p>
            <div className="flex items-center space-x-2 text-warmCream/60">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Fait avec passion depuis toujours</span>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-warmCream">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-warmCream/60 mt-0.5 flex-shrink-0" />
                <div className="text-warmCream/80">
                  <p>Grisolles 82170</p>
                  <p>Tarn-et-Garonne, France</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-warmCream/60 flex-shrink-0" />
                <a 
                  href="tel:+33619202555"
                  className="text-warmCream hover:text-white transition-colors"
                >
                  +33 6 19 20 25 55
                </a>
              </div>
            </div>
          </div>

          {/* Hours summary */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-warmCream">Horaires</h4>
            <div className="space-y-2 text-warmCream/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-warmCream/60" />
                <span className="text-sm">Lun : 06h30-16h00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-warmCream/60" />
                <span className="text-sm">Mar-Jeu : 06h30-20h00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-warmCream/60" />
                <span className="text-sm">Ven : 06h30-17h00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-warmCream/60" />
                <span className="text-sm">Sam-Dim : 07h00-13h00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-warmCream/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-warmCream/60 text-sm">
              © {currentYear} Le Bistro Grisolles. Tous droits réservés.
            </p>
            <p className="text-warmCream/60 text-sm">
              Cuisine traditionnelle • Fait maison • Ambiance conviviale
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;