import { motion } from "framer-motion";

export default function GraphAnimation() {
  return (
    <div className="relative w-[500px] h-[500px]">
      <motion.div
        className="absolute top-[100px] left-[250px] w-[40px] h-[40px] bg-blue-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-[300px] left-[150px] w-[40px] h-[40px] bg-green-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="absolute top-[300px] left-[350px] w-[40px] h-[40px] bg-red-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  );
}
