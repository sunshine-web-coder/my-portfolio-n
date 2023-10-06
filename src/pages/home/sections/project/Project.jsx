import { Link } from "react-router-dom";
import { projectData } from "../../../../components/data";

export default function Project() {
  return (
    <div id="projects" className="mt-[20px] md:mt-[140px] pt-[100px]">
      <h2 className="text-2xl mb-2 font-thin font-[Arial]">PROJECTS</h2>
      <h3 className="text-4xl">Stuffs I&apos;ve worked on</h3>
      <div className="flex flex-wrap mt-5">
        {projectData.map((item, index) => (
          <div className="max-[767px]:w-full w-[40.3333%] lg:w-[33.3333%] p-4" key={index}>
            <div className="border border-gray-600 w-full shadow-sm rounded-md overflow-hidden">
              <div
                className="h-[200px] md:h-[150px]"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
              </div>
              <div className="p-4">
                <Link to={item.slug} target="_blank" className="text-xl hover:underline">{item.title}</Link>
                <div className="flex justify-between gap-2 mt-4">
                  {item.desc}
                </div>
                <div className="flex justify-between gap-2 mt-4">
                  <Link to={item.slug} target="_blank">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                  {/* <button>
                    Read More
                  </button> */}
                </div>
                <div className="flex border-t border-gray-600 pt-2 flex-wrap gap-2 mt-4">
                  {item.skills && item.skills.length > 0 ? (
                    item.skills.map((skill, skillIndex) => (
                      <div
                        className="border border-gray-600 max-w-max shadow-sm p-2 pb-1 pt-1 rounded"
                        key={skillIndex}
                      >
                        {skill}
                      </div>
                    ))
                  ) : (
                    <p>No skills listed</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
