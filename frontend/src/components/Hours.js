import React from "react";
import { Clock, Calendar } from "lucide-react";

const Hours = () => {
  const schedule = [
    { day: "Lundi", hours: "06h30 – 16h00", isToday: false },
    { day: "Mardi", hours: "06h30 – 20h00", isToday: false },
    { day: "Mercredi", hours: "06h30 – 20h00", isToday: false },
    { day: "Jeudi", hours: "06h30 – 20h00", isToday: false },
    { day: "Vendredi", hours: "06h30 – 20h00", isToday: false },
    { day: "Samedi", hours: "07h00 – 13h00", isToday: false },
    { day: "Dimanche", hours: "07h00 – 13h00", isToday: false }
  ];

  // Get current day to highlight it
  const currentDay = new Date().getDay();
  const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
  const todayName = dayNames[currentDay];

  // Mark today
  schedule.forEach(item => {
    item.isToday = item.day === todayName;
  });

  return (
    <section id="horaires" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBrown bistro-font mb-6">
            Nos Horaires
          </h2>
          <div className="w-24 h-1 bg-warmBrown mx-auto mb-8"></div>
          <p className="text-xl text-deepBrown/80 max-w-3xl mx-auto leading-relaxed">
            Nous vous accueillons 7 jours sur 7 pour vos pauses et repas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-lightTan/10 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-warmBrown/10 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-8 h-8 text-warmBrown" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deepBrown">Ouvert 7j/7</h3>
                <p className="text-deepBrown/70">Du lundi au dimanche</p>
              </div>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    item.isToday
                      ? "bg-warmBrown text-white shadow-lg"
                      : "bg-white hover:bg-warmBrown/5"
                  }`}
                >
                  <div className="flex items-center">
                    {item.isToday && <Calendar className="w-5 h-5 mr-3" />}
                    <span className={`font-medium text-lg ${item.isToday ? "text-white" : "text-deepBrown"}`}>
                      {item.day}
                      {item.isToday && <span className="ml-2 text-sm opacity-90">(Aujourd'hui)</span>}
                    </span>
                  </div>
                  <span className={`font-mono text-lg ${item.isToday ? "text-white" : "text-deepBrown/80"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-warmBrown">
              <h4 className="font-bold text-deepBrown mb-2">Informations importantes :</h4>
              <ul className="space-y-1 text-deepBrown/80">
                <li>• Ouvert 7 jours sur 7</li>
                <li>• Réservation recommandée pour les groupes</li>
                <li>• Fermeture exceptionnelle les jours fériés (nous appeler)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;