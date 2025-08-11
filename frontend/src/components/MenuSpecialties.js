import React from "react";
import { Coffee, UtensilsCrossed, Sandwich, Clock } from "lucide-react";

const MenuSpecialties = () => {
  const specialties = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Menu du jour",
      description: "Un menu complet qui change quotidiennement avec des produits frais de saison",
      time: "Midi uniquement"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Brasserie",
      description: "Plats traditionnels de brasserie française disponibles tous les midis",
      time: "Lundi à Samedi"
    },
    {
      icon: <Sandwich className="w-8 h-8" />,
      title: "Spécial Burger",
      description: "Nos burgers artisanaux avec frites maison, une spécialité du mercredi",
      time: "Mercredi"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-lightTan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBrown bistro-font mb-6">
            Menu & Spécialités
          </h2>
          <div className="w-24 h-1 bg-warmBrown mx-auto mb-8"></div>
          <p className="text-xl text-deepBrown/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre cuisine française traditionnelle faite maison
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specialties.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-warmBrown/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warmBrown/20 transition-colors duration-300">
                <div className="text-warmBrown">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-deepBrown mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-deepBrown/70 leading-relaxed text-center mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-center space-x-2 text-warmBrown">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Special highlight */}
        <div className="bg-gradient-to-r from-warmBrown/5 to-lightTan/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-deepBrown bistro-font mb-6">
            Notre Engagement Qualité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-warmBrown">100%</div>
              <div className="text-deepBrown font-medium">Fait Maison</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-warmBrown">Frais</div>
              <div className="text-deepBrown font-medium">Produits du jour</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-warmBrown">Local</div>
              <div className="text-deepBrown font-medium">Producteurs région</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSpecialties;