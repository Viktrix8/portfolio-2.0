import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {experience.companyImage && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={urlFor(experience.companyImage).url()}
          className="w-32 h-32 rounded-full xl:w[200px] xl:h[200px] object-center object-contain"
          alt=""
        />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.companyName}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        {experience.dateStarted && experience.dateEnded && (
          <p className="uppercase py-5 text-gray-300">
            Started work {experience.dateStarted} - Ended {experience.dateEnded}
          </p>
        )}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
