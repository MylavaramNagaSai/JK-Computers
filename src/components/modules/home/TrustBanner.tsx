export default function TrustBanner() {
  const metrics = [
    { value: "14+", label: "Years of Trust" },
    { value: "3", label: "Strategic Branches" },
    { value: "10k+", label: "Devices Repaired" },
    { value: "100%", label: "Genuine Spares" },
  ];

  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-black text-blue-900 mb-1 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}