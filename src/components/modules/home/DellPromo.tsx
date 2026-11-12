import Link from "next/link";
import { Laptop, Cpu, Mouse } from "lucide-react";

export default function DellPromo() {
  return (
    <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
              Madras Bus Stand Branch
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
              Experience the <span className="text-blue-400">Dell Exclusive</span> Difference.
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Step into our dedicated Dell Exclusive Store. Test the latest Inspiron laptops, powerful Alienware rigs, and pick up genuine OEM accessories with live in-store warranty offers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
                <Laptop className="text-blue-400 mb-3" size={24} />
                <span className="text-sm font-semibold text-slate-200">Latest Models</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
                <Cpu className="text-blue-400 mb-3" size={24} />
                <span className="text-sm font-semibold text-slate-200">Alienware</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 flex flex-col items-center text-center">
                <Mouse className="text-blue-400 mb-3" size={24} />
                <span className="text-sm font-semibold text-slate-200">OEM Gear</span>
              </div>
            </div>

            <Link href="/dell-exclusive" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              View Dell Catalog &rarr;
            </Link>
          </div>
          
          {/* Abstract Placeholder for Dell Laptops Image */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-600/50 shadow-2xl flex items-center justify-center relative">
              <div className="absolute inset-4 rounded-full border border-slate-500/30 border-dashed animate-[spin_60s_linear_infinite]"></div>
              <Laptop size={120} className="text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}