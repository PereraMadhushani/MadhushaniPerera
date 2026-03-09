import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

import Services from "@/app/services/page";
import Work from "@/app/work/page";
import Resume from "@/app/resume/page";
import Contact from "@/app/contact/page";

// Reusable section heading used across the single-page layout
const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-3xl font-bold text-accent uppercase tracking-wide">
      {title}
    </h2>
    <p className="text-white/70 mt-2">{subtitle}</p>
  </div>
);

const Home = () => {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="h-full flex items-center justify-center"
        >
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span>{personalInfo.title}</span>
              <h1 className="h1 mb-6">
                Hello I&apos;m <br />
                <span className="text-accent">{personalInfo.fullName}</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                {personalInfo.tagline}
              </p>

              {/* CTA */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href={personalInfo.cvPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>

                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────────────────── */}
        <Stats />

        {/* ── Services ──────────────────────────────────────────────────── */}
        <section id="services">
          <div data-aos="zoom-in">
            <Services />
          </div>
        </section>

        {/* ── Work ──────────────────────────────────────────────────────── */}
        <section id="work" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
          <SectionHeading title="Work" subtitle="My Recent Projects" />
          <div data-aos="zoom-in">
            <Work />
          </div>
        </section>

        {/* ── Resume ────────────────────────────────────────────────────── */}
        <section id="resume" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
          <SectionHeading title="Resume" subtitle="My Experience & Education" />
          <div data-aos="zoom-in">
            <Resume />
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────────── */}
        <section id="contact" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
          <SectionHeading title="Contact" subtitle="Get In Touch" />
          <div data-aos="zoom-in">
            <Contact />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;