import React from 'react';

function AccordionEnd() {
  return (
    <>
      {/* Small and md */}
      <div className=" md:hidden bg-white sm:bg-white lg:bg-[#6D8D7F] p-6 md:p-8 lg:p-12 flex justify-center">
        <h3 className="w-full max-w-2xl text-xs  md:text-base lg:text-lg bg-[#6D8D7F] text-white lg:bg-white lg:text-primary-950 rounded-full font-semibold py-3 px-4 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-24 text-center tracking-tight sm:tracking-normal whitespace-nowrap overflow-hidden text-ellipsis">
          Simply, a one stop solution for startups & founders!
        </h3>
      </div>
      {/* Desktop */}
      <div className="hidden  bg-[#6D8D7F] justify-center p-6">
        <h3 className="w-full py-5 text-3xl font-light italic px-24 text-center text-white tracking-wide">
          Simply, a one stop solution for startups & founders!
        </h3>
      </div>
    </>
  );
}

export default AccordionEnd;
