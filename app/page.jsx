import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Services from "@/app/services/page.jsx";

import Photo from "@/components/Photo";
import Resume from "./resume/page";
import Contact from "./contact/page.jsx";
import Work from "@/app/work/page.jsx";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <section id="home" className="h-full flex items-center justify-center">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8  xl:pb-24">
            {/*text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span>Full Stack Developer</span>
              <h1 className="h1 mb-6 text-[40px] ">
                Hello I&apos;m <br/> <span className="text-accent ">Kaushalya Madhushani Perera</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/100">
              I excel at crafting elegant digital experiences and I am proficientin various  programming languages and technologies.
              </p>
              {/*button and socials*/}
              <div className="flex flex-col xl:flex-row items-center  gap-8">
                <a href="/Assests/G K M Perera-Software Engineer.pdf" download target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 mb-0">
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

            {/*photo*/}
            <div className="order-1 xl:order-none mb-0 xl:mb-0">
              <Photo/>
            </div>    
          </div>
        </section>

          {/*stats*/}
          <Stats/>
<div className="text-center mb-12" data-aos="zoom-in-up">
  <h2 className="text-3xl font-bold text-accent uppercase tracking-wide">Services</h2>
  <p className="text-white/70 mt-2">What I Offer</p>
</div>

<div data-aos="zoom-in">
  <Services />
</div>

<div className="text-center mb-12" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-accent uppercase tracking-wide">Work</h2>
  <p className="text-white/70 mt-2">My Recent Projects</p>
</div>

<div data-aos="zoom-in">
  <section id="work" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
    <Work />
  </section>
</div>

<div className="text-center mb-12" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-accent uppercase tracking-wide">Resume</h2>
  <p className="text-white/70 mt-2">My Experience & Education</p>
</div>

<div data-aos="zoom-in">
  <section id="resume" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
    <Resume />
  </section>
</div>


       <div className="text-center mb-12" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-accent uppercase tracking-wide">Contact</h2>
  <p className="text-white/70 mt-2">Get In Touch</p>
</div>

<div data-aos="zoom-in">
  <section id="contact" className="pt-12 pb-24 xl:pt-0 xl:pb-0">
    <Contact />
  </section>
</div>

        </div>
    </section>
  );
};

export default Home;