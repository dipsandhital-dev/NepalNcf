import React from "react";
import { Globe, BookOpen, Briefcase } from "lucide-react";

const objectivesData = [
  {
    title: "Cultural Exchange",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    points: [
      "Organize cultural events, art exhibitions, and traditional performances showcasing Nepalese and Chinese heritage.",
      "Promote the exchange of traditional knowledge, crafts, and festivals.",
      "Host Chinese Food Festivals, Film Festivals, and Acrobatics performances.",
    ],
  },
  {
    title: "Educational Collaboration",
    icon: <BookOpen className="w-6 h-6 text-green-600" />,
    points: [
      "Establish partnerships with Chinese universities and educational institutions.",
      "Offer language and cultural training programs for students and professionals.",
      "Develop scholarship and internship programs for Nepalese and Chinese students.",
      "Promote Chinese language learning through centers across Nepal’s seven provinces.",
    ],
  },
  {
    title: "Business Cooperation",
    icon: <Briefcase className="w-6 h-6 text-yellow-600" />,
    points: [
      "Conduct trade expos, business expos, and networking events to promote Nepalese and Chinese products and services.",
      "Facilitate knowledge sharing on business practices, technology, and entrepreneurship.",
    ],
  },
];

const Objective = () => {
  return (
    <section id="objective" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Organization Objectives
        </h2>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {objectivesData.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                {obj.icon}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {obj.title}
                </h3>
              </div>

              {/* Points List */}
              <ul className="space-y-3 text-gray-700">
                {obj.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objective;
