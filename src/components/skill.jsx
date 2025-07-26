import React from "react";

// Import semua gambar di assets folder
const logos = import.meta.glob('../assets/*.png', { eager: true });

const importLogo = (name) => {
  // Cari file yang cocok (ignore case)
  const match = Object.entries(logos).find(([path]) =>
    path.toLowerCase().includes(`/${name.toLowerCase()}.png`)
  );
  return match ? match[1].default : null;
};

function Skill() {
  const skills = [
    { name: "Laravel", icon: "Laravel" },
    { name: "PHP", icon: "php" },
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "sql" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Ms. Office", icon: "office" },
    
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition w-[150px]"
    >
      <div className="mb-2">
        {importLogo(skill.icon) ? (
          <img
            src={importLogo(skill.icon)}
            alt={skill.name}
            className="w-10 h-10 object-contain"
          />
        ) : (
          <div className="text-indigo-600 dark:text-indigo-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
          </div>
        )}
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default Skill;
