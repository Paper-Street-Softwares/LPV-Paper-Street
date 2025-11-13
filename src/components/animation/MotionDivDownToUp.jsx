import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";
import PropTypes from "prop-types";

export default function MotionDivDownToUp({ children, className }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const childrenArray = Children.toArray(children);

  MotionDivDownToUp.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  };

  return (
    <motion.div
      ref={ref}
      layout={false} // não deixa recalcular o layoult
      initial={{ opacity: 0, y: 40 }} //mantenho um deslocamento menor
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 40,
      }}
      transition={{
        duration: 0.8,
        delay: 0.1, // aqui eu boto um atraso para estabilizar o layoult antes
        ease: "easeOut",
      }}
      className={`${className || ""} will-change-transform will-change-opacity`}
      style={{
        backfaceVisibility: "hidden",
      }}
    >
      {childrenArray}
    </motion.div>
  );
}
