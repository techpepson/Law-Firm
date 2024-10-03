import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";

export function FlipWordsDemo() {
  const words = ["dedicated", "educated", "understanding", "client-centered"];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main animated sentence with FlipWords */}
      <motion.div
        variants={textVariant}
        className="text-center text-4xl font-semibold text-gray-700 dark:text-gray-300"
      >
        <span className="text-orange-400">
          We have a/an <FlipWords words={words} /> team of attorneys to support
          you and your business's legal needs.
        </span>
      </motion.div>

      {/* Additional paragraph */}
      <motion.span
        variants={textVariant}
        className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-4xl text-center"
      >
        At Fortuna Legal Services, our strength lies in the dedication and
        expertise of our team. We are a group of passionate attorneys and legal
        professionals who not only bring a deep understanding of the law but
        also a commitment to helping our clients navigate their legal challenges
        with confidence. Each member of our team is driven by a shared goal: to
        provide personalized, actionable legal solutions that empower our
        clients to make informed decisions.
      </motion.span>
    </motion.div>
  );
}
