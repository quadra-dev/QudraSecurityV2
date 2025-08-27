"use client";

import Link from "next/link";

type CardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  gradient: string;
  hoverBorder: string;
};

function InterestedCardItem({
  href,
  label,
  title,
  description,
  gradient,
  hoverBorder,
}: CardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div
        className={`grid grid-rows-[auto_1fr] h-full rounded-xl relative  overflow-hidden transition-all ${gradient}`}
      >
        <div className="flex justify-between p-6 md:px-8 md:py-11">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-5">
              <span className="text-xs md:text-base uppercase">{label}</span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-3 md:mb-6 max-w-[200px]">
              {title}
            </h3>
            <p className="text-sm md:text-base max-w-md">{description}</p>
          </div>
          <svg
            viewBox="0 0 63 63"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black w-10 h-10 md:w-14 md:h-14 opacity-50 group-hover:opacity-100 group-hover:-rotate-45 transition-all ease-out"
          >
            <path d="M32.78 17.64a1.355 1.355 0 10-1.917 1.917L41.126 29.82H13.858a1.36 1.36 0 000 2.718h27.254L30.85 42.801a1.353 1.353 0 00.965 2.31c.36-.001.707-.142.964-.394l12.574-12.573c.256-.256.398-.604.395-.965a1.401 1.401 0 00-.395-.965L32.779 17.641z"></path>
            <path d="M31.53 1.954A29.22 29.22 0 0010.867 51.84c11.411 11.411 29.912 11.411 41.323 0 11.41-11.41 11.41-29.911 0-41.322a29.039 29.039 0 00-20.662-8.564zm0 55.731c-14.613 0-26.507-11.894-26.507-26.506S16.917 4.673 31.53 4.673c14.613 0 26.506 11.894 26.506 26.506S46.142 57.685 31.53 57.685z"></path>
          </svg>
        </div>
        <div
          className={`absolute inset-0 border border-transparent rounded-xl transition-all ${hoverBorder}`}
        />
      </div>
    </Link>
  );
}

export default function InterestedCard() {
  return (
    <section className="bg-gradient-to-b from-[#FAFAFA] to-[#DFDFDF] md:px-30 px-8 relative   text-black">
      <div className="container py-10 md:py-18">
        <h2 className="font-heading font-semibold text-3xl md:text-5xl mb-10 md:mb-14  max-w-2xl">
          You may also be Interested In
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

            <InterestedCardItem
              href="/seo/"
              label="Most Viewed"
              title="Appartments"
              description="Every Property tells a story, make sure yours is one of safety, not full of regrets"
              gradient="bg-[#FFCCE2]"
              hoverBorder="group-hover:border-[#FFD55E]"
            />
 

          <InterestedCardItem
            href="/demand-gen/"
            label="POPULAR"
            title="Retail Solution"
            description="Have a complete view of every corner of your shop with our advanced retail security systems."
            gradient="bg-[#BCF5D7]"
            hoverBorder="group-hover:border-[#19BF65]"
          />

          <InterestedCardItem
            href="/video-services/"
            label="Video"
            title="Stop the scroll"
            description="Create videos that captivate your audience and drive leads—social videos, product explainers, commercials, and more."
            gradient="bg-[#FFE599]"
            hoverBorder="group-hover:border-[#9E1E85]"
          />
        </div>
      </div>
    </section>
  );
}
