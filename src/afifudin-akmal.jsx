import fotoProfil from "./assets/akmal.jpg";

const profile = {
  name: "Afifudin akmal",
  class: "T2C",
  major: "Teknologi Informasi",
  domicile: "Malang, Jawa Timur",
  about: `Halo, perkenalkan saya Afifudin Akmal, mahasiswa Teknologi Informasi kelas T2C yang memiliki minat dan komitmen tinggi dalam bidang teknologi digital, khususnya pengembangan perangkat lunak. Saya berasal dari Malang, Jawa Timur.

Sebagai mahasiswa Teknologi Informasi, saya memiliki ketertarikan yang kuat pada pengembangan web, terutama di bidang frontend development. Saya percaya bahwa teknologi memiliki peran penting dalam menciptakan solusi yang efektif dan bermanfaat.

Saat ini, saya sedang fokus memperdalam pemahaman terhadap React JS, Tailwind CSS, serta berbagai teknologi modern lainnya. Saya juga aktif mengembangkan diri melalui proyek-proyek kecil dan kolaborasi tim.`,
  skills: ["React JS", "Tailwind CSS", "JavaScript", "HTML & CSS", "GitHub"],
  social: {
    email: "akmalafifudin2@gmail.com",
    github: "github.com/akmalafifudin2-lang",
    linkedin: "linkedin.com/in/Akmal",
  },
};

export default function ProfilAkmal() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <img
          src={fotoProfil}
          className="w-28 h-28 rounded-full mx-auto object-cover mb-4"
        />
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-gray-400">
          Mahasiswa {profile.major} • {profile.class}
        </p>
        <p className="text-gray-500 text-sm">
          📍 {profile.domicile}
        </p>
      </div>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-700 pb-1">
          Tentang Saya
        </h2>
        {profile.about.split("\n\n").map((p, i) => (
          <p key={i} className="text-gray-300 mb-3 leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      {/* SKILLS */}
      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-700 pb-1">
          Keahlian
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-800 px-3 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-3 border-b border-gray-700 pb-1">
          Kontak
        </h2>
        <div className="text-gray-300 space-y-2">
          <p>📧 {profile.social.email}</p>
          <p>🐙 {profile.social.github}</p>
          <p>💼 {profile.social.linkedin}</p>
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center text-gray-600 text-sm mt-10">
        © 2026 • {profile.name}
      </div>

    </div>
  );
}