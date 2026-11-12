import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";

export default function BranchSelector() {
  const branches = [
    {
      name: "Trunk Road",
      role: "Main Sales & Service",
      desc: "Our primary hub for comprehensive laptop repairs and corporate AMC consultations.",
      color: "bg-blue-600"
    },
    {
      name: "VRC Centre",
      role: "Multi-Brand Spares Hub",
      desc: "Dedicated center for high-demand replacement parts and quick-fix diagnostics.",
      color: "bg-indigo-600"
    },
    {
      name: "Madras Bus Stand",
      role: "Dell Exclusive Store",
      desc: "Experience the latest Dell technology and claim live in-store warranty offers.",
      color: "bg-slate-800"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">3 Strategic Locations</h2>
            <p className="text-gray-500 font-medium">Find the JK Computers branch closest to you in Nellore.</p>
          </div>
          <Link href="/locations" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
            View full maps & hours &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all group">
              <div className={`w-12 h-12 rounded-2xl ${branch.color} text-white flex items-center justify-center mb-6`}>
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{branch.name}</h3>
              <p className="text-sm font-bold text-blue-600 mb-4">{branch.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {branch.desc}
              </p>
              
              <div className="flex items-center gap-3">
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm font-semibold py-2.5 rounded-xl border border-gray-200 transition-colors flex justify-center items-center gap-2">
                  <PhoneCall size={16} /> Call Now
                </button>
                <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-semibold py-2.5 rounded-xl transition-colors flex justify-center items-center gap-2">
                  <MapPin size={16} /> Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}