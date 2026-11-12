import Link from "next/link";
import { ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  {
    title: "Repair Hub",
    href: "/services/laptop-repair",
    dropdown: [
      { name: "A-to-Z Laptop Repair", href: "/services/laptop-repair" },
      { name: "Printer & LaserJet Service", href: "/services/printer-repair" },
      { name: "Cartridge Refilling", href: "/services/cartridge-refilling" },
      { name: "Brand Coverage Matrix", href: "/services/brands" },
      { name: "Online Repair Tracker", href: "/track-repair" },
    ],
  },
  {
    title: "Dell Exclusive",
    href: "/dell-exclusive",
    dropdown: [
      { name: "Dell & Alienware Showcase", href: "/dell-exclusive" },
      { name: "Latest Laptops & Desktops", href: "/dell-exclusive/models" },
      { name: "Genuine OEM Accessories", href: "/dell-exclusive/accessories" },
      { name: "In-Store Offers", href: "/dell-exclusive/offers" },
      { name: "Madras Bus Stand Outlet", href: "/locations" },
    ],
  },
  {
    title: "Business & AMC",
    href: "/services/it-amc",
    dropdown: [
      { name: "Corporate AMC Tiers", href: "/services/it-amc" },
      { name: "Networking Solutions", href: "/services/networking" },
      { name: "CCTV Infrastructure", href: "/services/cctv" },
      { name: "Bulk Service Booking", href: "/services/bulk-booking" },
      { name: "IT Hardware Sales", href: "/services/b2b-sales" },
    ],
  },
  {
    title: "Custom PCs",
    href: "/custom-pc",
    dropdown: [
      { name: "Build a Custom PC", href: "/custom-pc" },
      { name: "Gaming & Creator Builds", href: "/custom-pc/pre-builds" },
      { name: "Hardware Upgrades", href: "/services/upgrades" },
      { name: "Multi-Brand Spares (VRC)", href: "/locations" },
    ],
  },
  {
    title: "Our Branches",
    href: "/locations",
    dropdown: [
      { name: "Trunk Road (Main)", href: "/locations#trunk-road" },
      { name: "VRC Centre (Spares)", href: "/locations#vrc-centre" },
      { name: "Madras Bus Stand (Dell)", href: "/locations#dell-exclusive" },
      { name: "Live Hours & Maps", href: "/locations" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    dropdown: [
      { name: "Smart WhatsApp Support", href: "/contact#whatsapp" },
      { name: "Sales Inquiries", href: "/contact#sales" },
      { name: "Repair Support", href: "/contact#repair" },
      { name: "General Contact Form", href: "/contact#email" },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Temporary Typography Logo */}
          <Link href="/" className="flex flex-col justify-center group shrink-0">
            <span className="font-black text-2xl tracking-tighter text-blue-900 group-hover:text-blue-700 transition-colors duration-300">
              JK COMPUTERS
            </span>
            <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase mt-0.5 opacity-80">
              Nellore • Estd. 2012
            </span>
          </Link>

          {/* Center Navigation - Apple Style Physics Dropdowns */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {NAV_ITEMS.map((item) => (
              <div key={item.title} className="relative group py-6">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-[14px] font-semibold text-gray-700 hover:text-blue-700 transition-colors duration-200"
                >
                  {item.title}
                  <ChevronDown 
                    size={14} 
                    strokeWidth={2.5} 
                    className="opacity-50 group-hover:rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
                  />
                </Link>

                {/* Solid Background Dropdown Panel */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[-4px] w-64 rounded-2xl bg-white border border-gray-200 shadow-xl 
                  opacity-0 invisible translate-y-6 scale-95 
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 
                  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] p-2.5 origin-top"
                >
                  <div className="flex flex-col space-y-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-gray-600 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}