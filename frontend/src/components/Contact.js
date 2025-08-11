import React from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-lightTan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBrown bistro-font mb-6">
            Nous Contacter
          </h2>
          <div className="w-24 h-1 bg-warmBrown mx-auto mb-8"></div>
          <p className="text-xl text-deepBrown/80 max-w-3xl mx-auto leading-relaxed">
            N'hésitez pas à nous appeler pour toute question ou réservation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main contact card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              <div className="bg-warmBrown/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-warmBrown" />
              </div>
              <h3 className="text-3xl font-bold text-deepBrown bistro-font mb-4">
                Appelez-nous !
              </h3>
              <p className="text-lg text-deepBrown/80 mb-8">
                Notre équipe est à votre disposition pour répondre à vos questions et prendre vos réservations
              </p>
              
              <a
                href="tel:+33619202555"
                className="inline-flex items-center px-10 py-5 bg-warmBrown text-white rounded-2xl hover:bg-deepBrown transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xl font-medium"
              >
                <Phone className="w-6 h-6 mr-4" />
                +33 6 19 20 25 55
              </a>
            </div>

            {/* Contact info grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-lightTan/30">
              <div className="text-center">
                <div className="bg-lightTan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-warmBrown" />
                </div>
                <h4 className="font-bold text-deepBrown mb-2">Adresse</h4>
                <p className="text-deepBrown/80">
                  Grisolles 82170<br />
                  Tarn-et-Garonne
                </p>
              </div>

              <div className="text-center">
                <div className="bg-lightTan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-warmBrown" />
                </div>
                <h4 className="font-bold text-deepBrown mb-2">Horaires</h4>
                <p className="text-deepBrown/80">
                  Lun-Ven : 06h30-20h00<br />
                  Sam-Dim : 07h00-13h00
                </p>
              </div>

              <div className="text-center">
                <div className="bg-lightTan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-warmBrown" />
                </div>
                <h4 className="font-bold text-deepBrown mb-2">Contact</h4>
                <p className="text-deepBrown/80">
                  Réservations par téléphone<br />
                  uniquement
                </p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-deepBrown mb-3">Réservation table</h4>
              <p className="text-deepBrown/70 mb-4 text-sm">
                Recommandée pour les groupes et le weekend
              </p>
              <a
                href="tel:+33619202555"
                className="inline-flex items-center px-4 py-2 bg-warmBrown/10 text-warmBrown rounded-lg hover:bg-warmBrown/20 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Réserver
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-deepBrown mb-3">Informations</h4>
              <p className="text-deepBrown/70 mb-4 text-sm">
                Menu du jour, disponibilité, événements spéciaux
              </p>
              <a
                href="tel:+33619202555"
                className="inline-flex items-center px-4 py-2 bg-warmBrown/10 text-warmBrown rounded-lg hover:bg-warmBrown/20 transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                S'informer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;