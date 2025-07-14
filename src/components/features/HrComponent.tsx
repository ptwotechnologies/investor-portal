import React from 'react';

interface HrComponentProps {
  color?: string;
}

function HrComponent({ color = '#192847' }: HrComponentProps) {
  return (
    <hr className="w-full border-t-2" style={{ borderColor: color }} />
  );
}

export default HrComponent;
