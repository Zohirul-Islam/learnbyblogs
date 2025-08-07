import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import Blogcard from "./Blogcard";
const Bloglist = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${
                menu === item && "px-4 pt-0.5 text-white"
              }`}
            >
              {item}
            </button>
            {menu === item && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-0 right-0 top-0 h-7 bg-blue-600 rounded-full -z-1"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-32">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((blog) => (
            <Blogcard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
