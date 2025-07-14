import Image from 'next/image';

export default function MissionDT() {
  return (
    <div className="hidden px-4 py-16 md:py-24 sm:px-6 lg:px-8 lg:block bg-primary-950">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col items-center gap-8 p-8 mx-auto bg-white py-14 rounded-3xl lg:flex-row">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="p-6 pr-18 max-w-fit bg-slate-400 rounded-2xl">
              <h1 className="text-4xl font-semibold leading-[35px] text-white md:text-3xl">
                A mission to simplify<br />
                growth for every startup
              </h1>
            </div>

            <div className="space-y-10 text-black">
              <p className="text-xl leading-[35px]">
                Our mission is to bring everything that helps a startup grow into one space, 
                while connecting the right people with the right support at the right time.
              </p>
              <div>
              <p className="text-xl leading-[35px">
                We created this portal to make the startup journey less overwhelming and 
                more focused.
              </p>
                
              <p className=" text-xl leading-[35px">
                Most founders start with big ideas but end up spending most of their time 
                navigating scattered services, chasing investors, and solving problems 
                that shouldn't be this hard in the first place.
              </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
         <div className="flex items-center justify-center flex-1">
  <div className="relative w-[297px] h-[454px] overflow-hidden rounded-[74px] bg-slate-300">
    <Image
      src="https://picsum.photos/400/400?random=1"
      alt="Startup growth illustration"
      fill
      className="object-cover"
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
