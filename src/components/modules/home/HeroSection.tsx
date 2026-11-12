import Link from "next/link";
import { ArrowRight, MonitorPlay } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-8 border border-blue-200/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          14+ Years of Trusted IT Service in Nellore
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-tight">
          Nellore's Premier <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
            Tech & Repair Hub
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          From chip-level laptop repairs and corporate IT AMCs to building high-performance custom PCs. Experience enterprise-grade service.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/locations" className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
            Find a Branch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/custom-pc" className="group flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5">
            <MonitorPlay size={18} className="text-blue-600" />
            Build a Custom PC
          </Link>
        </div>
      </div>
    </section>
  );
}