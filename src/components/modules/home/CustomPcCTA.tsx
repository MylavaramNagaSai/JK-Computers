import Link from "next/link";
import { Settings2 } from "lucide-react";

export default function CustomPcCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-10 md:p-16 text-center border border-blue-100 shadow-sm relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full opacity-50 blur-2xl"></div>
          
          <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
            <Settings2 className="text-white" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Build Your Dream Machine
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Use our interactive Custom PC Builder. Select your use-case, choose between Intel or AMD, set your budget, and get a live quote sent directly to your WhatsApp.
          </p>
          
          <Link href="/custom-pc" className="inline-flex bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1">
            Start PC Builder Now
          </Link>
        </div>
      </div>
    </section>
  );
}