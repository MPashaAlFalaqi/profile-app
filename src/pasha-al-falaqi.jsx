import { useState } from "react";
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
  social: [
    { icon: "🐙", label: "GitHub", value: "M Pasha Al Falaqi", link: "https://github.com/MPashaAlFalaqi" },
    { icon: "📸", label: "Instagram", value: "@pashaflqi", link: "https://instagram.com/pashaflqi" },
    { icon: "💬", label: "WhatsApp", value: "085843492098", link: "https://wa.me/6285843492098" },
  ],
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }} className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-600 h-32" />

      {/* Profile Card */}
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-md -mt-16 p-6 mb-4">

          {/* Avatar & Name */}
          <div className="flex items-end gap-4 mb-4">
            <img
              src={fotoProfil}
              alt="Foto Profil"
              className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md -mt-12"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">{profile.name}</h1>
              <p className="text-blue-600 text-sm">Mahasiswa Teknologi Informasi</p>
            </div>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">🎓 Kelas {profile.class}</span>
            <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">💻 {profile.major}</span>
            <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">📍 {profile.domicile}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md mb-4 p-1.5 flex gap-1">
          {["about", "skills", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {tab === "about" ? "Tentang" : tab === "skills" ? "Keahlian" : "Kontak"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

          {activeTab === "about" && (
            <div>
              <h2 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Tentang Diri</h2>
              <div className="space-y-3">
                {profile.about.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div>
              <h2 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Keahlian</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-xl border border-blue-100 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h2 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Kontak</h2>
              <div className="space-y-3">
                {profile.social.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-700 font-medium text-sm">{item.value}</p>
                    </div>
                    <span className="ml-auto text-gray-300">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mb-8">© 2026 · {profile.name}</p>
      </div>
    </div>
  );
}
