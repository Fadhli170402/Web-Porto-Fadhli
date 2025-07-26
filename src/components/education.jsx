

function Education() {
    return (
        <section id="education" className="py-16 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4 max-w-md relative">
             <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>

              {/* Vertical Line */}
              <div className="absolute left-1/2 top-[130px] bottom-0 w-1 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 z-0"></div>

             <div className="flex flex-col gap-12 relative z-10">
              {[
        {
          degree: "Sarjana Informatika",
          school: "Institut Teknologi Nasional Bandung (ITENAS)",
          date: "Sep 2020 - Apr 2025",
          gpa: "IPK: 3.37/4.00"
        },
        {
          degree: "Teknik Komputer dan Jaringan",
          school: "SMK Permata 1 Bogor",
          date: "2017 - 2020"
        }
      ].map((edu, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mx-auto w-full max-w-lg">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
          <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.date}</p>
          {edu.gpa && <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.gpa}</p>}
        </div>
      ))}
    </div>
  </div>
</section>
    )
}
export default Education;