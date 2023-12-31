import avatar from "../../../../assets/photo.png";
import cvFile from "../../../../file/Ezekiel-Fajuyagbe.pdf"

export default function Banner() {
  return (
    <div id="home" className="flex flex-col lg:flex-row gap-[50px] pt-[100px] lg:pt-[150px]">
      <div className="w-full lg:pt-0">
        <div className="max-[450px]:w-[200px] bg-yellow-500 max-[450px]:h-[200px] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="w-full pt-[0px] lg:pt-[80px]">
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
        <div className="mt-[40px]">
          <a href={cvFile} rel="noreferrer" target="_blank" className="bg-yellow-400 hover:bg-yellow-400/90 rounded p-3 pl-6 pr-6 text-[#333333] font-bold">VIEW RESUME</a>
        </div>
      </div>
    </div>
  );
}
