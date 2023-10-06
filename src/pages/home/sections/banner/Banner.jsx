import heroImg from "../../../../assets/hero-img.12da278e.png";

export default function Banner() {
  return (
    <div id="home" className="flex flex-col lg:flex-row gap-[50px] pt-[150px]">
      <div className="w-full">
        <img src={heroImg} alt="hero-img" />
      </div>
      <div className="w-full">
        <h1 className="text-xl mb-5 mt-1">HI THERE I&apos;m</h1>
        <h3 className="text-3xl md:text-5xl mb-6 md:mb-9 mt-1 uppercase">Fajuyagbe Ezekiel</h3>
        <h4 className="text-yellow-400 dh mb-5 font-['Prosto_One'] text-xl md:text-2xl">
          FRONTEND DEVELOPER
        </h4>
        <p className="text-[16px] leading-7">
          Dedicated Frontend developer with 3 years&apos; experience in creating
          responsive and userfriendly web applications with clean code.
          Proficient in JavaScript, React Js, HTML, CSS, and modern frontend
          libraries and frameworks.
        </p>
      </div>
    </div>
  );
}
