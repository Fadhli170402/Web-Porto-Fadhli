import AnimatedContent from "./experienceComponen";

function Projects(){
return (
   
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
      Project
    </h2>
    <AnimatedContent>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 justify-center">
        {[
          {
            id: 'experience-1',
            image: 'src/assets/4.png',
          title: "Penerapan Bisnis Intelejen Dalam Melakukan Visualisasi Data Penyakit Anak Di Daerah Jawa Barat",
        //   company: "PT. Nuansa Cerah Informasi",
        //   date: "Jul 2023 - Sept 2023",
        //   description:
        //     "Sebagai seorang Full Stack Developer Intern, saya berperan dalam pengembangan website company profile berbasis Content Management System (CMS) dengan dukungan teknologi frontend dan backend. Fokus utama saya adalah mengimplementasikan desain UI/UX yang telah disiapkan oleh tim, serta mengintegrasikannya ke dalam sistem menggunakan framework Laravel 10.",
          tags: ["Google Looker Studio"],
          link: "https://drive.google.com/file/d/1ru1xtyO2sYudA6qqioRPsSPB8jSN0o5A/view?usp=drive_link"
        },
        // {
        //   id: 'experience-2',
        //   image: 'src/assets/Itenas.png',
        //   title: "Asisten Laboratorium IoT",
        //   company: "Institut Teknologi Nasional (ITENAS)",
        //   date: "Sept 2024 - Jan 2025",
        //   description:
        //     "Sebagai Asisten Laboratorium Pemrograman IoT, saya berperan aktif dalam mendukung proses pembelajaran mahasiswa terkait pengembangan sistem berbasis Internet of Things. Dalam peran ini, saya membantu mahasiswa memahami konsep, merancang, dan mengimplementasikan berbagai proyek IoT.",
        //   tags: ["IoT", "Laboratorium", "Pembelajaran"],
        //   link: null
        // },
        // {
        //   id: 'experience-3',
        //   image: 'src/assets/Itenas.png',
        //   title: "Asisten Laboratorium Multimedia",
        //   company: "ITENAS",
        //   date: "Sept 2023 - Jan 2024",
        //   description:
        //     "Sebagai Asisten Laboratorium Multimedia, saya bertugas mendampingi mahasiswa dalam proses pembuatan dan pengolahan video menggunakan Adobe Premiere Pro dan Adobe Animate. Peran ini memberikan saya pengalaman berharga dalam dunia multimedia serta keterampilan komunikasi dan teknis yang kuat.",
        //   tags: ["Machine Learning", "SDN", "Cybersecurity"],
        // }
      ].map((exp, index, array) => {
        // Untuk menangani jika jumlah data ganjil, dan item terakhir
        const isLastOdd = array.length % 2 === 1 && index === array.length - 1;

        return (
          <div
            key={index}
            className={`bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
              isLastOdd ? "sm:col-span-2 justify-self-center max-w-xl" : ""
            }`}
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-100 object-cover "
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">{exp.date}</p>
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              {exp.link && (
                <div className="flex justify-center ">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Lihat Website
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </AnimatedContent>
  </div>
</section>

)
}

export default Projects;