import Banner from "./sections/banner/Banner";
import Contact from "./sections/contact/Contact";
import Project from "./sections/project/Project";
import Skills from "./sections/skills/Skills";

export default function Home() {
  return (
    <div className="flex items-center p-4">
      <div className="text-sm font-semibold max-[767px]:max-w-[600px] max-w-[800px] lg:max-w-[1100px] mx-auto w-full">
        <Banner />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
