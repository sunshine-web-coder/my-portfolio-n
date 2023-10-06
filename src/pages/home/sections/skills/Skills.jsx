import { skillsData } from "../../../../components/data";

export default function Skills() {
  return (
    <div className="mt-[90px]">
      <h2 className="text-2xl mb-2 font-thin font-[Arial]">SKILLS</h2>
      <h3 className="text-4xl">What i can use</h3>
      <div className="flex flex-wrap mt-3">
        {skillsData.map((item, index) => (
          <div className="w-[200px] p-2" key={index}>
            <div className="border flex flex-col justify-between border-gray-600 bg-[#534C4C] p-4 pt-6 pb-6 w-full min-h-[150px] shadow-sm rounded-md overflow-hidden">
              <div className="flex items-center justify-center">
                <div className="">
                  <div className="w-10">{item.svg}</div>
                  {item.img && <img className="w-16" src={item.img} alt="" />}
                </div>
              </div>
              <p className="text-center text-lg mt-4">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
