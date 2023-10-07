import { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import cvFile from "../../file/Ezekiel-Fajuyagbe.pdf"

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  
  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <div>
      <div className="flex fixed w-full bg-[#333333] shadow-sm border-b border-white/20 sm:items-center p-4 min-h-[72px]">
        <div className="text-sm font-semibold max-[767px]:max-w-[600px] max-w-[800px] lg:max-w-[1100px] mx-auto flex items-start sm:items-center justify-between w-full">
          <Link to="/" className="text-2xl">
            <TypeAnimation
              sequence={['SunshineWebCoder', 500,]}
              speed={15}
              repeat={Infinity}
            />
          </Link>
          <nav className="hidden sm:block">
            <ul className="flex uppercase items-start sm:items-center gap-5">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">WORKS</a>
              </li>
              <li>
                <a href={cvFile} rel="noreferrer" target="_blank">VIEW RESUME</a>
              </li>
              <li>
                <a href="#contact">HIRE ME</a>
              </li>
            </ul>
          </nav>
          <div className="block sm:hidden">
            <i className="fa-solid text-2xl fa-bars" onClick={toggleMenu}></i>
          </div>
        </div>
      </div>
      {/* mobile_navMenu */}
      <nav className={`block fixed w-full z-50 top-[70px] bg-zinc-800 pt-5 pb-5  sm:hidden ${openMenu ? "block" : "hidden"}`}>
        <ul className="text-center uppercase flex flex-col">
          <li>
            <a className="block border-white/10 border-b border-t p-3" href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a className="block border-white/10 border-b border-t p-3" href="#projects" onClick={closeMenu}>WORK</a>
          </li>
          <li>
            <a className="block border-white/10 border-b p-3" href="" onClick={closeMenu}>VIEW RESUME</a>
          </li>
          <li>
            <a className="block border-white/10 border-b p-3" href="#contact" onClick={closeMenu}>HIRE ME</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
