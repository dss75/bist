import React from "react";
import { Chef, Heart, Users, Utensils } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBrown bistro-font mb-6">
            Notre Ambiance
          </h2>
          <div className="w-24 h-1 bg-warmBrown mx-auto mb-8"></div>
          <p className="text-xl text-deepBrown/80 max-w-3xl mx-auto leading-relaxed">
            Cuisine traditionnelle faite maison, ambiance conviviale avec salle climatisée et terrasse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center group">
            <div className="bg-lightTan/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warmBrown/20 transition-colors duration-300">
              <Chef className="w-10 h-10 text-warmBrown" />
            </div>
            <h3 className="text-xl font-bold text-deepBrown mb-3">
              Fait Maison
            </h3>
            <p className="text-deepBrown/70 leading-relaxed">
              Tous nos plats sont préparés sur place avec des ingrédients frais et de qualité
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center group">
            <div className="bg-lightTan/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warmBrown/20 transition-colors duration-300">
              <Heart className="w-10 h-10 text-warmBrown" />
            </div>
            <h3 className="text-xl font-bold text-deepBrown mb-3">
              Tradition
            </h3>
            <p className="text-deepBrown/70 leading-relaxed">
              Une cuisine traditionnelle française qui respecte les recettes authentiques
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center group">
            <div className="bg-lightTan/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warmBrown/20 transition-colors duration-300">
              <Users className="w-10 h-10 text-warmBrown" />
            </div>
            <h3 className="text-xl font-bold text-deepBrown mb-3">
              Convivialité
            </h3>
            <p className="text-deepBrown/70 leading-relaxed">
              Un accueil chaleureux dans une atmosphère détendue et familiale
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center group">
            <div className="bg-lightTan/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warmBrown/20 transition-colors duration-300">
              <Utensils className="w-10 h-10 text-warmBrown" />
            </div>
            <h3 className="text-xl font-bold text-deepBrown mb-3">
              Confort
            </h3>
            <p className="text-deepBrown/70 leading-relaxed">
              Salle climatisée et terrasse pour profiter selon vos envies
            </p>
          </div>
        </div>

        {/* Story section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-lightTan/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-deepBrown bistro-font mb-6 text-center">
              L'art de bien recevoir
            </h3>
            <p className="text-lg text-deepBrown/80 leading-relaxed text-center">
              Au cœur de Grisolles, Le Bistro vous accueille dans un cadre authentique où se mélangent 
              tradition culinaire française et modernité. Notre équipe met tout en œuvre pour vous offrir 
              une expérience gastronomique mémorable, que ce soit pour un déjeuner d'affaires, 
              un repas en famille ou entre amis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;