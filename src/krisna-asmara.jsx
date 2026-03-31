import fotoProfil from "./assets/krs.jpg";

const profile = {
  name: "Krisna Asmara",
  class: "T2C",
  major: "Teknologi Informasi",
  domicile: "Bogor, Jawa Barat",
  about: `Halo, perkenalkan saya Krisna Asmara, mahasiswa Teknologi Informasi kelas T2C yang memiliki minat dan komitmen tinggi dalam bidang teknologi digital, khususnya pengembangan perangkat lunak. Saya berasal dari Bogor, Jawa Barat, sebuah kota yang dikenal dengan julukan Kota Hujan serta lingkungan yang mendukung perkembangan kreativitas dan pembelajaran.

Sebagai mahasiswa Teknologi Informasi, saya memiliki ketertarikan yang kuat pada pengembangan web, terutama di bidang frontend development. Saya percaya bahwa teknologi memiliki peran penting dalam menciptakan solusi yang efektif, efisien, dan berdampak bagi kehidupan masyarakat.

Saat ini, saya sedang fokus memperdalam pemahaman terhadap berbagai teknologi modern seperti React JS dan Tailwind CSS, serta terus mengikuti perkembangan tren di dunia teknologi informasi.`,
  skills: ["React JS", "Tailwind CSS", "JavaScript", "HTML & CSS", "Git & GitHub"],
  social: {
    github: "asmrkrisna-cyber",
    whatssapp: "+62-882-9617-1206",
    email: "asmrkrisna@gmail.com",
    instagram: "asmara__k"
  },
};

export default function ProfilKrisna() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-slate-900 text-white px-6 py-12">
      {/* HERO */}
      <div className="text-center mb-16">
  <img
    src={fotoProfil}
    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-purple-500 shadow-[0_0_25px_#a855f7] mb-4"
  />
  <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
    {profile.name}
  </h1>
  <p className="text-purple-300 mt-2">
    Mahasiswa {profile.major} • Kelas {profile.class}
  </p>
  <p className="text-gray-400 text-sm mt-1">
    📍 {profile.domicile}
  </p>
</div>

      <section className="max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl font-semibold mb-4 text-purple-400">
    Tentang Saya
  </h2>
  {profile.about.split("\n\n").map((p, i) => (
    <p key={i} className="text-gray-300 mb-4 leading-relaxed">
      {p}
    </p>
  ))}
</section>

      <section className="max-w-3xl mx-auto mb-16">
  <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
    Keahlian
  </h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    {profile.skills.map((skill, i) => (
      <div
        key={i}
        className="bg-white/5 border border-purple-500/30 p-4 rounded-xl text-center hover:scale-105 hover:shadow-[0_0_15px_#22d3ee] transition"
      >
        {skill}
      </div>
    ))}
  </div>
</section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
    Kontak
  </h2>
  <div className="space-y-3">
    <a href="https://github.com/asmrkrisna-cyber" target="_blank" className="flex-1">
    <p className="bg-white/5 border border-indigo-400/30 p-3 rounded-lg hover:bg-indigo-500/10 transition">
      🐙 {profile.social.github}
    </p>
    </a>

    <a href="https://wa.me/6285977573788" target="_blank" className="flex-1">
    <p className="bg-white/5 border border-indigo-400/30 p-3 rounded-lg hover:bg-indigo-500/10 transition">
      ☎️ {profile.social.whatssapp}
    </p>
    </a>

    <a href="https://asmrkrisna@gmail.com" target="_blank" className="flex-1">
    <p className="bg-white/5 border border-indigo-400/30 p-3 rounded-lg hover:bg-indigo-500/10 transition">
      📧 {profile.social.email}
    </p>
    </a>

    <a href="https://www.instagram.com/asmara__k" target="_blank" className="flex-1">
    <p className="bg-white/5 border border-indigo-400/30 p-3 rounded-lg hover:bg-indigo-500/10 transition">
      📱 {profile.social.instagram}
    </p>
    </a>
  </div>
</section>

      {/* FOOTER */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        © 2026 • {profile.name}
      </div>

    </div>
  );
}