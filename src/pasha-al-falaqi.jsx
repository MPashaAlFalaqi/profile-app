import { useState, useEffect } from "react";
import fotoProfil from "./assets/foto.jpg";

const profile = {
  name: "M Pasha Al Falaqi",
  class: "T2C",
  major: "Teknologi Informasi",
  domicile: "Kediri, Jawa Timur",
  about: `Halo! Nama saya M Pasha Al Falaqi, mahasiswa Teknologi Informasi kelas T2C yang memiliki semangat besar dalam dunia teknologi dan pengembangan perangkat lunak. Saya lahir dan besar di Kota Kediri, Jawa Timur — kota yang dikenal dengan tahu takwa dan semangat warga yang ramah.

Sebagai mahasiswa TI, saya memiliki ketertarikan mendalam pada pengembangan web, khususnya di bidang frontend development. Saya percaya bahwa teknologi bukan sekadar alat, melainkan jembatan yang menghubungkan manusia dengan solusi nyata dalam kehidupan sehari-hari.

Saat ini saya sedang aktif belajar React JS, Tailwind CSS, dan berbagai teknologi web modern. Saya juga senang berkolaborasi dalam tim, berbagi pengetahuan, dan terus berkembang bersama rekan-rekan satu jurusan.

Di luar perkuliahan, saya menikmati eksplorasi proyek-proyek kecil yang bermanfaat, mengikuti perkembangan dunia tech terkini, dan mencari cara-cara baru untuk mengaplikasikan ilmu yang didapat di bangku kuliah ke dunia nyata.`,
  skills: ["React JS", "Tailwind CSS", "JavaScript", "HTML & CSS", "Git & GitHub"],
  social: {
    github: "github.com/pasha-alfalaqi",
    linkedin: "linkedin.com/in/pasha-alfalaqi",
    email: "mpashaalfalaqi@gmail.com",
  },
};

export default function ProfilePage() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-cyan-400 opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-indigo-500 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-t-3xl" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative flex-shrink-0">
                <img
                  src={fotoProfil}
                  alt="Foto Profil"
                  className="w-28 h-28 rounded-2xl object-cover shadow-2xl shadow-blue-500/30"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-950" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-white tracking-tight mb-1">{profile.name}</h1>
                <p className="text-blue-300 font-medium text-lg mb-3">Mahasiswa Teknologi Informasi</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-200 text-sm px-3 py-1 rounded-full border border-blue-500/30">🎓 Kelas {profile.class}</span>
                  <span className="inline-flex items-center gap-1.5 bg-cyan-500/20 text-cyan-200 text-sm px-3 py-1 rounded-full border border-cyan-500/30">💻 {profile.major}</span>
                  <span className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-200 text-sm px-3 py-1 rounded-full border border-indigo-500/30">📍 {profile.domicile}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex gap-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-1.5">
            {["about", "skills", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 capitalize ${activeTab === tab ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
              >
                {tab === "about" ? "Tentang Saya" : tab === "skills" ? "Keahlian" : "Kontak"}
              </button>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {activeTab === "about" && (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-400 rounded-full inline-block" />Tentang Diri
              </h2>
              <div className="space-y-4">
                {profile.about.split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed text-[15px]">{para}</p>
                ))}
              </div>
            </div>
          )}
          {activeTab === "skills" && (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full inline-block" />Keahlian & Teknologi
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {profile.skills.map((skill, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 rounded-2xl p-4 text-center hover:border-blue-400/40 hover:scale-105 transition-all duration-200">
                    <div className="text-2xl mb-2">{["⚛️","🎨","⚡","🌐","🔧"][i]}</div>
                    <p className="text-white font-medium text-sm">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "contact" && (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-indigo-400 rounded-full inline-block" />Hubungi Saya
              </h2>
              <div className="space-y-3">
                {[
                  { icon: "🐙", label: "GitHub", value: profile.social.github },
                  { icon: "💼", label: "LinkedIn", value: profile.social.linkedin },
                  { icon: "📧", label: "Email", value: profile.social.email },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-blue-400/40 transition-all duration-200">
                    <span className="text-2xl w-10 text-center">{item.icon}</span>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-white font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={`text-center mt-8 text-slate-600 text-sm transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p>© 2026 · {profile.name} · Teknologi Informasi {profile.class}</p>
        </div>
      </div>
    </div>
  );
}