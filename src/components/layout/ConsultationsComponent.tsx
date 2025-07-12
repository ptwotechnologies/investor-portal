import React from 'react';

interface Consultation {
  id: number;
  title: string;
}

const ConsultationsComponent: React.FC = () => {
  const consultations: Consultation[] = [
    {
      id: 1,
      title: 'Legal paperwork,<br/> compliances, agreements',
    },
    {
      id: 2,
      title: 'Building an MVP or scaling <br/> tech without wasting months',
    },
    {
      id: 3,
      title: 'Branding that earns trust, not <br/> just looks good',
    },
    {
      id: 4,
      title: 'Marketing that brings in real <br/> users, not just traffic',
    },
    {
      id: 5,
      title:
        'Fundraising prep — how to talk to <br/> investors like you know your stuff',
    },
    {
      id: 6,
      title: "Understanding where your money's <br/> going (and why it matters)",
    },
  ];

  // Function to remove <br/> tags for desktop display
  const cleanTitleForDesktop = (title: string) => {
    return title.replace(/<br\/>/g, ' '); // Replace <br/> with a space
  };

  return (
    <div className="bg-[#828282] text-white p-8 md:p-12 lg:p-16 min-h-min">
      <div className="max-w-[1440px] mx-auto"> {/* Updated this line */}
        <h1 className="mb-12 text-3xl font-normal text-left md:text-4xl">
          Consultations that move you forward
        </h1>

        <div className="hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {consultations.map((item) => (
            <div key={item.id} className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#a7a7a7] opacity-60"></div>

              <div className="space-y-4">
                <div className="text-6xl font-light text-white opacity-80">
                  {item.id}
                </div>
                <p className="text-base leading-relaxed text-gray-100">
                  {cleanTitleForDesktop(item.title)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 md:hidden">
          {consultations.map((item) => (
            <div key={item.id} className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white opacity-60"></div>

              <div className="space-y-3">
                <div className="text-5xl font-light text-white opacity-80">
                  {item.id}
                </div>
                <p
                  className="text-base leading-relaxed text-gray-100"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationsComponent;