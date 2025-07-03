import React from 'react';

interface Consultation {
  id: number;
  title: string;
}

const ConsultationsComponent: React.FC = () => {
  const consultations: Consultation[] = [
    {
      id: 1,
      title: 'Legal paperwork, compliances, agreements',
    },
    {
      id: 2,
      title: 'Building an MVP or scaling tech without wasting months',
    },
    {
      id: 3,
      title: 'Branding that earns trust, not just looks good',
    },
    {
      id: 4,
      title: 'Marketing that brings in real users, not just traffic',
    },
    {
      id: 5,
      title:
        'Fundraising prep — how to talk to investors like you know your stuff',
    },
    {
      id: 6,
      title: "Understanding where your money's going (and why it matters)",
    },
  ];

  return (
    <div className="bg-[#828282] text-white p-8 md:p-12 lg:p-16 min-h-min">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-normal mb-12 text-left">
          Consultations that move you forward
        </h1>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultations.map((item) => (
            <div key={item.id} className="relative pl-6">
              {/* Left border line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#a7a7a7] opacity-60"></div>

              <div className="space-y-4">
                <div className="text-6xl font-light text-white opacity-80">
                  {item.id}
                </div>
                <p className="text-base leading-relaxed text-gray-100">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stack Layout */}
        <div className="md:hidden space-y-8">
          {consultations.map((item) => (
            <div key={item.id} className="relative pl-6">
              {/* Left border line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white opacity-60"></div>

              <div className="space-y-3">
                <div className="text-5xl font-light text-white opacity-80">
                  {item.id}
                </div>
                <p className="text-base leading-relaxed text-gray-100">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationsComponent;
