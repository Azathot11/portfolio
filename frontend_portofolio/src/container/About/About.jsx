import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

import { images } from '../../constants';

const abouts = [
  {title:'Web dev',description:'I am a good web dev',imgUrl:images.about01},
  {title:'Frondend Development',description:'I am a good web dev',imgUrl:images.about03},
  {title:'Backend Development',description:'I am a good web dev',imgUrl:images.about04},
  {title:'Web designe',description:'I am a good web dev',imgUrl:images.about02},
]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      // console.log(data,'exec')
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.reverse().map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
           
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(About, 'about');

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   'app__whitebg',
// );