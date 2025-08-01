import React from 'react';

const Hero = () => {
  return (
    <main className="w-full bg-white">
      <section className="relative flex min-h-screen w-full items-center justify-center p-4">
        <div className="text-center">
          <h1 className="font-normal text-black text-[15vw] leading-[0.8] tracking-[-0.05em] md:text-[9.375vw]">
            Jordan Jenkins
          </h1>
          <h2 className="font-normal text-black text-[4.8vw] leading-[0.9] tracking-[-0.03em] md:text-[2.222vw]">
            Independent Creative Director & Designer
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Hero;