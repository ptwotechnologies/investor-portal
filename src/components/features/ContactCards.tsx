import React from 'react';

interface OptionCardProps {
  title: string;
  description: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
}

const ContactCards: React.FC<OptionCardProps> = ({
  title,
  description,
  value,
  selected,
  onChange,
}) => {
  return (
    <div
      className={`flex items-center justify-between border p-3 rounded cursor-pointer transition ${
        selected ? 'bg-primary-100 border-primary-300' : 'border-gray-200'
      }`}
      onClick={() => onChange(value)}
    >
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="flex items-center justify-center h-5 w-5 border-2 border-gray-600 bg-white rounded-full">
        {selected && (
          <div className="h-2.5 w-2.5 bg-primary-950 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default ContactCards;
