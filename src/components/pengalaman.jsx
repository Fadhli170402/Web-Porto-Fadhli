import { useState } from 'react';

const ExperienceCard = ({ experience }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="w-full sm:w-[300px] md:w-[350px] bg-slate-800 rounded-xl overflow-hidden shadow-md">
      <img
        src={experience.image}
        alt={experience.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-6">
        <h4 className="text-xl font-semibold text-white">
          {experience.title}
        </h4>
        <p className="text-sm text-gray-300">{experience.company}</p>
        <p className="text-sm text-gray-400 mb-2">{experience.date}</p>

        {/* Deskripsi */}
        <div
          className={`text-gray-200 text-sm transition-all duration-300 ${
            showFull ? '' : 'max-h-24 overflow-hidden'
          }`}
        >
          {experience.description}
        </div>

        {/* Toggle button */}
        {experience.description.length > 150 && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="mt-2 text-indigo-400 text-sm hover:underline focus:outline-none"
          >
            {showFull ? 'Sembunyikan' : 'Lihat Semua'}
          </button>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Website button */}
        {experience.link && (
          <div className="text-center mt-4">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
            >
              Lihat Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
