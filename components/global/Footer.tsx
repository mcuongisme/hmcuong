import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full px-8 py-14 border-t border-fun-pink-darker bg-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center text-center">
        {footer.columns.map((col, index) => (
          <div key={index} className="flex flex-col items-center">
            <h4 className="uppercase text-fun-gray text-base font-bold mb-6">
              {col.title}
            </h4>
            {col.title === "Social" ? (
              <div className="flex justify-center space-x-6">
                {col.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Image
                      src={link.icon}
                      width={40}
                      height={40}
                      alt={`${link.name} icon`}
                    />
                  </a>
                ))}
              </div>
            ) : (
              <ul className="space-y-4">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.link}>
                      <span className="text-[15px] hover:text-fun-pink transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto mt-14 border-t border-fun-pink-dark pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="flex items-center text-sm font-semibold uppercase tracking-wider text-fun-gray">
          Made with
          <span className="ml-3 flex items-center space-x-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="28" alt="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="42" className="invert" alt="NextJS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="28" alt="TailwindCSS" />
          </span>
        </p>

        <a
          className="inline-flex items-center text-sm font-bold border border-fun-pink px-5 py-2 rounded-xl text-fun-pink hover:bg-fun-pink hover:text-bg transition-colors"
          href="https://github.com/manhcuong2004/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={18}
            height={18}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code</span>
        </a>
      </div>
    </footer>
  );
}


export default Footer;
