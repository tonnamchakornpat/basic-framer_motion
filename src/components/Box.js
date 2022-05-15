import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const Box1 = ({ color }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.div
      animate={{
        x: isAnimating ? "60vw" : 0,
        opacity: isAnimating ? 1 : 0.5,
        // scale: 1,
        rotate: isAnimating ? 360 : 0,
      }}
      initial={{
        opacity: 0.1,
      }}
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 10,
        // duration: 1,
      }}
      className="box"
      style={{
        background: color,
      }}
      onClick={() => setIsAnimating(!isAnimating)}
    ></motion.div>
  );
};

export const Box2 = ({ color }) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      drag
      dragConstraints={{ right: 20, left: -20, top: 5, bottom: 5 }}
      style={{
        background: color,
      }}
    ></motion.div>
  );
};

export const Box3 = ({ color }) => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        delayChildren: 1.2,
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="box"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
      style={{
        background: color,
      }}
    >
      {[1, 2, 3].map((box) => (
        <motion.li className="boxItem" variants={listVariant}></motion.li>
      ))}
    </motion.div>
  );
};

export const Box4 = ({ color }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.3, 0.4, 1.2, 1],
        borderRadius: ["20%", "30%", "20%", "50%", "20%"],
        rotate: [0, 0, 240, 270, 0],
      }}
      transition={{ duration: 3 }}
      className="box"
      style={{ background: color }}
    ></motion.div>
  );
};

export const Box5 = ({ color }) => {
  const control = useAnimation();

  return (
    <span className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 1000,
            transition: { duration: 1 },
          });
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 1 },
          });
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: ["10%", "30%", "60%", "100%"],
            rotate: [60, 120, 240, 0],
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>

      <motion.div
        className="box"
        animate={control}
        style={{ backgroundColor: color }}
      ></motion.div>
    </span>
  );
};
