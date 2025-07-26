import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: 'Web Developer',
    company: 'PT. Nuansa Cerah Informasi',
    date: 'Jul 2023 - Sept 2023',
    description:
      'Sebagai seorang Full Stack Developer Intern, saya berperan dalam pengembangan website company profile berbasis Content Management System (CMS) dengan dukungan teknologi frontend dan backend. Fokus utama saya adalah mengimplementasikan desain UI/UX yang telah disiapkan oleh tim, serta mengintegrasikannya ke dalam sistem menggunakan framework Laravel 10. Saya juga melakukan deployment dan maintenance aplikasi internal untuk bridging BPJS V-Claim dan Mobile JKN.',
    tags: ['Web Development', 'PHP', 'MySQL'],
    link: 'https://contohwebsite.com',
    image: '/img/medismart.png',
  },
  // Tambah pengalaman lainnya jika perlu
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} experience={exp} />
      ))}
    </div>
  );
};

export default ExperienceSection;
