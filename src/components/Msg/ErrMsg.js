import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { motion } from "framer-motion";

const ErrMsg = ({ errMsg }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      className={`${
        errMsg
          ? "border-b-red-500 text-red-500"
          : "border-b-green-500 text-green-500"
      } absolute shadow-todoShodow font-titleFont tracking-wide font-medium text-sm md:text-lg top-2 left-5 md:left-44 mdl:left-60 lgl:left-[30%] xl:left-[40%] bg-bodyColor px-10 py-4 rounded-sm border-b-[6px]`}
    >
      <p className="flex items-center gap-4">
        <span className="text-xl animate-spin">
          <ImSpinner9 />
        </span>
        {errMsg}
      </p>
    </motion.div>
  );
};

export default ErrMsg;
