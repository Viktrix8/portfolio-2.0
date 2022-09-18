import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center items-center md:text-left min-h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative h-52 w-52 md:w-64 md:h-64 xl:w-[500px] xl:h-[500px] -mb-20 md:mb-0 flex-shrink-0 mt-32 md:mt-0 "
      >
        <Image
          src={urlFor(pageInfo.profilePic).url()}
          className="rounded-full object-cover md:rounded-lg"
          alt="profile picture"
          layout="fill"
        />
      </motion.div>

      <div className="space-y-2 md:space-y-10 px-0 md:px-10 md:mt-0 mt-24">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
