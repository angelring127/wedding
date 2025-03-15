import { motion } from "framer-motion";

interface LoadingProps {
  onLoadingComplete: () => void;
}

export function Loading({ onLoadingComplete }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={onLoadingComplete}
        className="w-full max-w-md h-1 bg-[#A26249]/20 relative mb-8 overflow-hidden"
      >
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#A26249]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-main text-[#A26249]"
      >
        Loading...
      </motion.p>
    </div>
  );
}
