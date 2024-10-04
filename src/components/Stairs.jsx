import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative "
          />
        );
      })}
    </>
  );
};

export default Stairs;

// import { motion } from "framer-motion";

// const pageTransition = {
//   initial: { opacity: 0 }, // Starts with invisible page
//   animate: { opacity: 1 }, // Fades in
//   exit: { opacity: 0 }, // Fades out when exiting
// };

// const PageTransition = ({ children }) => {
//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={pageTransition}
//       transition={{ duration: 0.4 }} // Transition duration
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageTransition;
