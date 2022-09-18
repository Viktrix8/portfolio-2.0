import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill as ISkill } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: ISkill;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-contain w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out xl:w-32 xl:h-32 z-0 group-hover:bg-white h-24 w-24 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
