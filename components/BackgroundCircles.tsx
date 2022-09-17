import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-[#333] rounded-full w-[200px] aspect-square mt-52 animate-ping absolute" />
      <div className="border border-[#333] rounded-full w-[300px] aspect-square mt-52 animate-ping absolute" />
      <div className="border border-[#333] rounded-full w-[500px] aspect-square mt-52 animate-ping absolute" />
      <div className="border border-[#f7ab0a] opacity-20 rounded-full w-[650px] aspect-square mt-52 animate-pulse absolute" />
      <div className="border border-[#333] rounded-full w-[800px] aspect-square mt-52 animate-ping absolute" />
    </motion.div>
  );
}
