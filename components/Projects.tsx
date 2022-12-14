import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 group px-2"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20 scrollbar-none md:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 mt-24 md:mt-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="h-52 w-screen relative max-h-[275px] md:max-h-[400px]"
            >
              <Image
                src={urlFor(project.image).url()}
                objectFit="contain"
                layout="fill"
                alt="project image"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center group-hover:animate-pulse">
                <a href={project.linkToBuild} target="_blank" rel="noreferrer">
                  {" "}
                  <span className="underline decoration-[#f7ab0a]/50">
                    {project.title}
                  </span>
                </a>
              </h4>

              <div className="flex space-x-8 justify-center">
                {project.technologies.map((technology) => (
                  <Image
                    className="rounded-full"
                    src={urlFor(technology.image).url()}
                    alt=""
                    key={technology._id}
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left w-[32ch] md:w-fit">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
