import React from "react";
import { MapPin, Phone, Car, CreditCard, Wifi, AirVent } from "lucide-react";

const PracticalInfo = () => {
  return (
    <section id="infos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBrown bistro-font mb-6">
            Infos Pratiques
          </h2>
          <div className="w-24 h-1 bg-warmBrown mx-auto mb-8"></div>
          <p className="text-xl text-deepBrown/80 max-w-3xl mx-auto leading-relaxed">
            Toutes les informations pour nous rendre visite
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-deepBrown bistro-font mb-8">
              Nous Contacter
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-warmBrown/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-warmBrown" />
                </div>
                <div>
                  <h4 className="font-bold text-deepBrown mb-1">Adresse</h4>
                  <p className="text-deepBrown/80 leading-relaxed">
                    Le Bistro<br />
                    Grisolles 82170<br />
                    Tarn-et-Garonne, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-warmBrown/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-warmBrown" />
                </div>
                <div>
                  <h4 className="font-bold text-deepBrown mb-1">Téléphone</h4>
                  <a 
                    href="tel:+33619202555"
                    className="text-warmBrown hover:text-deepBrown font-medium text-lg transition-colors"
                  >
                    +33 6 19 20 25 55
                  </a>
                  <p className="text-sm text-deepBrown/70 mt-1">
                    Cliquez pour appeler directement
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mt-8">
              <h4 className="font-bold text-deepBrown mb-4">Services disponibles</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <AirVent className="w-5 h-5 text-warmBrown" />
                  <span className="text-deepBrown/80">Climatisation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-warmBrown" />
                  <span className="text-deepBrown/80">Parking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-warmBrown" />
                  <span className="text-deepBrown/80">Cartes acceptées</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="w-5 h-5 text-warmBrown" />
                  <span className="text-deepBrown/80">Wi-Fi gratuit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-deepBrown bistro-font mb-8">
              Nous Trouver
            </h3>
            
            <div className="bg-lightTan/10 rounded-2xl p-6">
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4!2d1.2969!3d43.8225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ5JzIxLjAiTiAxwrAxNyc0OC44IkU!5e0!3m2!1sfr!2sfr!4v1642000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localisation Le Bistro Grisolles"
                ></iframe>
              </div>
              
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/search/Le+Bistro+Grisolles+82170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-warmBrown text-white rounded-lg hover:bg-deepBrown transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reservation notice */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-warmBrown/5 to-lightTan/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-deepBrown bistro-font mb-4">
              Réservation
            </h3>
            <p className="text-lg text-deepBrown/80 mb-6">
              Pour réserver une table ou pour toute information, contactez-nous directement par téléphone.
              Notre équipe se fera un plaisir de vous accueillir !
            </p>
            <a
              href="tel:+33619202555"
              className="inline-flex items-center px-8 py-4 bg-warmBrown text-white rounded-xl hover:bg-deepBrown transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-3" />
              <span className="text-lg font-medium">Appeler pour réserver</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;