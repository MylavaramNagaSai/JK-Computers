import Link from "next/link";
import { Wrench, Monitor, ShieldCheck, Printer } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "A-to-Z Laptop Repair",
      desc: "Chip-level diagnostics, liquid damage recovery, and original screen replacements.",
      icon: <Wrench className="text-blue-600" size={28} />,
      link: "/services/laptop-repair"
    },
    {
      title: "Custom PC Builder",
      desc: "Tailor-made rigs for gamers, creators, and office workstations with live quoting.",
      icon: <Monitor className="text-blue-600" size={28} />,
      link: "/custom-pc"
    },
    {
      title: "Printer & InkTank Service",
      desc: "Commercial printer servicing, cartridge refilling, and network setups.",
      icon: <Printer className="text-blue-600" size={28} />,
      link: "/services/printer-repair"
    },
    {
      title: "Corporate IT AMC",
      desc: "Reliable annual maintenance contracts, CCTV networking, and bulk servicing.",
      icon: <ShieldCheck className="text-blue-600" size={28} />,
      link: "/services/it-amc"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">Enterprise-Grade Solutions</h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">Comprehensive IT support tailored for both individual consumers and local businesses.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => (
            <Link key={idx} href={srv.link} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{srv.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">
                {srv.desc}
              </p>
              <div className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span className="text-lg leading-none">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}