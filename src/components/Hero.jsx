/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 */

// Components
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-2">
            <figure className="img-box w-10 h-10 rounded-full">
              <a
                href="https://www.amherst.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/avatar-1.png"
                  width={50}
                  height={50}
                  alt="Amherst College"
                  className="img-cover"
                />
              </a>
            </figure>

            <div className="flex items-center gap-1.5 text-sm font-bold tracking-wide">
              <span className="flex relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Graduating in May 2025
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Using Technology For Good
          </h2>

          <div className="flex items-center gap-3 flex-wrap">
            <ButtonPrimary
              label="Freelance Services"
              icon="handshake"
              href="/freelance"
            />

            <ButtonPrimary
              label="Resume"
              icon="description"
              href=".//other//resume.pdf"
              download="Admire Madyira Resume.pdf"
            />

            <ButtonPrimary
              label="GitHub"
              icon="code"
              href={"https://github.com/Mireinstein"}
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="keyboard_double_arrow_down"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25%
                         via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
          >
            <img
              src="./images/hero-banner.jpg"
              width={656}
              height={800}
              alt="Admire Madyira"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
