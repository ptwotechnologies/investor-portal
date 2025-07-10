export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Service Professionals',
    },
    {
      number: '150',
      label: 'Startups',
    },
    {
      number: '25',
      label: 'Investors',
    },
    {
      number: '5',
      label: 'Venture Firms',
    },
  ];

  return (
    <div className="hidden bg-gray-100 py-12 px-6 lg:block">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-around md:justify-between items-center divide-x divide-gray-300">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-6 py-4 flex-1 min-w-[150px] md:min-w-0"
            >
              <div className="text-5xl md:text-6xl font-normal text-primary-950 mb-2">
                {stat.number}
              </div>
              <div className="text-base md:text-lg text-primary-950 font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
