import React from 'react';

const PlaygroundIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="black"
    />
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      fill="black"
    />
  </svg>
);

const Playground = () => {
  return (
    <section className="w-full">
      <div className="inline-flex items-center gap-x-2 self-start rounded-full border border-[hsl(0,0%,93%)] bg-white px-3 py-2 shadow-sm">
        <PlaygroundIcon className="h-[18px] w-[18px]" />
        <span className="text-sm font-medium leading-none text-black">Playground</span>
      </div>
      {/* Masonry grid of projects would be rendered here */}
    </section>
  );
};

export default Playground;
