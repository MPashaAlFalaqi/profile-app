import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const members = [
  {
    name: "M Pasha Al Falaqi",
    nim: "253140701111028",
    role: "Frontend Developer",
    domicile: "Kediri, Jawa Timur",
    path: "/pasha-al-falaqi",
    initials: "MP",
    accent: "#3B82F6",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Krisna Asmara",
    nim: "253140701111027",
    role: "Frontend Developer",
    domicile: "Bogor, Jawa Barat",
    path: "/krisna-asmara",
    initials: "KA",
    accent: "#8B5CF6",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Afifudin Akmal",
    nim: "253140701111025",
    role: "Frontend Developer",
    domicile: "Malang, Jawa Timur",
    path: "/afifudin-akmal",
    initials: "AA",
    accent: "#F97316",
    gradient: "from-orange-500 to-pink-500",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Segoe UI', sans-serif" }}
      className="min-h-screen bg-gray-950 text-white"
    >
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

      <div className="max-w-lg mx-auto px-5 py-12">

        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-lg font-bold shadow-lg">
              2
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Kelompok 2</h1>
              <p className="text-gray-500 text-xs">Teknologi Informasi · T2C</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Mini Project Web Design & Manajemen Project — Universitas Brawijaya
          </p>
          <div className="h-px bg-gray-800 mt-6" />
        </div>

        {/* Members */}
        <div className={`transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Anggota Tim</p>

          <div className="space-y-3">
            {members.map((member, i) => (
              <div
                key={i}
                onClick={() => navigate(member.path)}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:border-gray-600 hover:bg-gray-800 transition-all duration-200"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Avatar */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-lg`}>
                  {member.initials}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-white text-base truncate">{member.name}</h2>
                  <p className="text-gray-500 text-xs mb-2">{member.nim}</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full border border-gray-700">
                      TI · T2C
                    </span>
                    <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full border border-gray-700">
                      📍 {member.domicile}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-gray-500 flex items-center justify-center text-gray-500 group-hover:text-white transition-all flex-shrink-0">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="h-px bg-gray-800 mb-6" />
          <p className="text-gray-700 text-xs">© 2026 · Kelompok 2 · Universitas Brawijaya</p>
        </div>
      </div>
    </div>
  );
}
