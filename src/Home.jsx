import { useNavigate } from "react-router-dom";

const members = [
  {
    name: "M Pasha Al Falaqi",
    nim: "253140701111028",
    class: "T2C",
    domicile: "Kediri, Jawa Timur",
    path: "/pasha-al-falaqi",
    initials: "MP",
    gradient: "from-blue-500 to-cyan-400",
    cardGradient: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-600",
  },
  {
    name: "Krisna Asmara",
    nim: "253140701111027",
    class: "T2C",
    domicile: "Bogor, Jawa Barat",
    path: "/krisna-asmara",
    initials: "KA",
    gradient: "from-violet-500 to-purple-400",
    cardGradient: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    text: "text-violet-600",
    badge: "bg-violet-100 text-violet-600",
  },
  {
    name: "Afifudin Akmal",
    nim: "253140701111025",
    class: "T2C",
    domicile: "Malang, Jawa Timur",
    path: "/afifudin-akmal",
    initials: "AA",
    gradient: "from-orange-500 to-pink-400",
    cardGradient: "from-orange-50 to-pink-50",
    border: "border-orange-100",
    text: "text-orange-600",
    badge: "bg-orange-100 text-orange-600",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }} className="min-h-screen bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500">

      {/* Header */}
      <div className="px-4 pt-16 pb-10 text-center text-white">
        <p className="text-white/70 text-sm mb-2 uppercase tracking-widest">Teknologi Informasi · Kelas T2C</p>
        <h1 className="text-4xl font-bold mb-2">Kelompok 2</h1>
        <p className="text-white/70 text-sm">Mini Project Web Design & Manajemen Project</p>
        <div className="w-12 h-1 bg-white/40 rounded-full mx-auto mt-5" />
      </div>

      {/* Members */}
      <div className="max-w-xl mx-auto px-4 pb-12">
        <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-4 px-1">Anggota Tim</p>

        <div className="space-y-3">
          {members.map((member, i) => (
            <div
              key={i}
              onClick={() => navigate(member.path)}
              className={`bg-gradient-to-r ${member.cardGradient} rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-200 border ${member.border} shadow-sm`}
            >
              {/* Avatar */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-lg font-bold flex-shrink-0 shadow-md`}>
                {member.initials}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className={`font-bold ${member.text}`}>{member.name}</h2>
                <p className="text-gray-400 text-xs mb-1.5">{member.nim}</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className={`${member.badge} text-xs px-2 py-0.5 rounded-full font-medium`}>Kelas {member.class}</span>
                  <span className={`${member.badge} text-xs px-2 py-0.5 rounded-full font-medium`}>📍 {member.domicile}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-sm shadow-sm flex-shrink-0`}>
                ›
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-10">
          © 2026 · Kelompok 2 · Universitas Brawijaya
        </p>
      </div>
    </div>
  );
}
