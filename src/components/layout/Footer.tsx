import {type FC } from "react";

interface FooterCTAProps {
  logoWhite: string;
  logoDark: string;
  fbSvg: string;
  igSvg: string;
  linkedinSvg: string;
  tiktokSvg: string;
}

const FooterCTA: FC<FooterCTAProps> = ({
  logoWhite,
  logoDark,
  fbSvg,
  igSvg,
  linkedinSvg,
  tiktokSvg,
}) => {
  const linkClass = "text-gray-400 hover:text-white text-sm transition";
  const socialClass =
    "w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition";

  return (
    <footer className="px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Box utama */}
        <div
          className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 
                        rounded-2xl p-6 md:p-10 border"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white leading-tight">
              LET'S DISCUSS
              <br />
              YOUR IDEAS
            </h3>

            {/* Logo 2 versi */}
            <img
              src={logoDark}
              alt="Logo"
              className="h-7 md:h-8 block dark:hidden"
            />
            <img
              src={logoWhite}
              alt="Logo"
              className="h-7 md:h-8 hidden dark:block"
            />
          </div>

          {/* Garis pemisah */}
          <div className="border-t border-gray-200 dark:border-neutral-800 mb-6"></div>

          {/* Baris bawah: Link + Sosmed */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Link kiri */}
            <div className="flex flex-wrap gap-4 md:gap-8 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700">
              <a href="#about" className={linkClass}>
                About
              </a>
              <a href="#service" className={linkClass}>
                Service
              </a>
              <a href="#projects" className={linkClass}>
                Projects
              </a>
              <a href="#testimonials" className={linkClass}>
                Testimonials
              </a>
              <a href="#faq" className={linkClass}>
                FAQ
              </a>
            </div>

            {/* Sosmed kanan */}
            <div className="flex gap-3">
              <a href="#" className={socialClass}>
                <img
                  src={fbSvg}
                  alt="Facebook"
                  className="w-4 h-4 filter invert-0"
                />
              </a>
              <a href="#" className={socialClass}>
                <img
                  src={igSvg}
                  alt="Instagram"
                  className="w-4 h-4 filter invert-0"
                />
              </a>
              <a href="#" className={socialClass}>
                <img
                  src={linkedinSvg}
                  alt="LinkedIn"
                  className="w-4 h-4 filter invert-0"
                />
              </a>
              <a href="#" className={socialClass}>
                <img
                  src={tiktokSvg}
                  alt="TikTok"
                  className="w-4 h-4 filter invert-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
