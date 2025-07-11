import React from 'react';
import HomeStats from '../features/HomeStats';
import SystemDrainSection from '../features/SystemDrainSection'

function WhatMakesDiffrent() {
  return (
    <div className='hidden lg:block'>
      <HomeStats />
      <SystemDrainSection/>
    </div>
  );
}

export default WhatMakesDiffrent;
