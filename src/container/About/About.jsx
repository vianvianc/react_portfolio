import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
// import "../../../public/images";
// import "./About.json";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { images } from "../../constants";
// import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "abouts"] | order(order asc)';
    const query = "./About.json";
    axios.get(query).then(({ data }) => {
      // console.log(data);
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Enjoying <span>Learning</span> is the Key to <span>Success</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 5 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
// about.json
// imgUrl will be links to image
// just pass about.imgUrl
// put images in public folder if doesnt work from assets
