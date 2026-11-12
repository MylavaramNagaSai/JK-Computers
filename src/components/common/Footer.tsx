import Link from "next/link";
import { BRANCHES } from "@/constants/branches";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-12 pb-8 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h4 className="text-blue-700 text-lg font-bold mb-4">JK Computers</h4>
          <p className="text-sm leading-relaxed">
            Nellore's premier sales and repair center for laptops, desktops, and printers with 14+ years of trusted service.
          </p>
        </div>

        <div>
          <h4 className="text-gray-900 text-lg font-bold mb-4">Our Branches</h4>
          <ul className="space-y-3 text-sm">
            {BRANCHES.map((b) => (
              <li key={b.id}>
                <span className="font-bold text-gray-900">{b.name}:</span><br />
                {b.address}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 text-lg font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <Link href="/services/laptop-repair" className="hover:text-blue-700 transition-colors">A-to-Z Laptop Repair</Link>
            <Link href="/custom-pc" className="hover:text-blue-700 transition-colors">Custom PC Builder</Link>
            <Link href="/dell-exclusive" className="hover:text-blue-700 transition-colors">Dell Exclusive Store</Link>
            <Link href="/track-repair" className="hover:text-blue-700 transition-colors">Online Repair Tracker</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-6">
        &copy; {new Date().getFullYear()} JK Computers, Nellore. All rights reserved.
      </div>
    </footer>
  );
}
