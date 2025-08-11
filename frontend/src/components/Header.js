import React, { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-warmCream/95 backdrop-blur-sm border-b border-warmTan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-deepBrown bistro-font">
              Le Bistro
            </h1>
            <p className="text-sm text-warmTan">Grisolles</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-deepBrown hover:text-warmBrown transition-colors px-3 py-2 text-sm font-medium"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-deepBrown hover:text-warmBrown transition-colors px-3 py-2 text-sm font-medium"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-deepBrown hover:text-warmBrown transition-colors px-3 py-2 text-sm font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("horaires")}
                className="text-deepBrown hover:text-warmBrown transition-colors px-3 py-2 text-sm font-medium"
              >
                Horaires
              </button>
              <button
                onClick={() => scrollToSection("galerie")}
                className="text-deepBrown hover:text-warmBrown transition-colors px-3 py-2 text-sm font-medium"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-deepBrown hover:text-warmBrown transition-colors px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+33619202555"
              className="inline-flex items-center px-4 py-2 bg-warmBrown text-white rounded-lg hover:bg-deepBrown transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              06 19 20 25 55
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-deepBrown hover:text-warmBrown focus:outline-none focus:text-warmBrown transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-warmCream border-t border-warmTan/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("accueil")}
              className="block px-3 py-2 text-deepBrown hover:text-warmBrown transition-colors text-base font-medium w-full text-left"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-deepBrown hover:text-warmBrown transition-colors text-base font-medium w-full text-left"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block px-3 py-2 text-deepBrown hover:text-warmBrown transition-colors text-base font-medium w-full text-left"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("horaires")}
              className="block px-3 py-2 text-deepBrown hover:text-warmBrown transition-colors text-base font-medium w-full text-left"
            >
              Horaires
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="block px-3 py-2 text-deepBrown hover:text-warmBrown transition-colors text-base font-medium w-full text-left"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-deepBrown hover:text-warmBrown transition-colors text-base font-medium w-full text-left"
            >
              Contact
            </button>
            <a
              href="tel:+33619202555"
              className="block mx-3 my-2 px-4 py-2 bg-warmBrown text-white rounded-lg hover:bg-deepBrown transition-colors duration-300 text-center"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              06 19 20 25 55
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;