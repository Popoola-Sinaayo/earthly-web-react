import React, { useRef } from "react";
import "./main.css";
import { motion } from "framer-motion";

function Main() {
  const ref = useRef(null);
  return (
    <div>
      <div className="header">
        <img
          src="https://static.wixstatic.com/media/ead566_2c378f27d33a419d8c532250cf2f0d51~mv2.png/v1/fill/w_79,h_75,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Earthly%20Logo_edited.png"
          alt="earth"
        />
        <div className="p">
          <p>earthly</p>
          <p>Sustainable Products at afordable rate</p>
        </div>
        <img
          src="https://static.wixstatic.com/media/a3c153_313e78e612ad43f993d87370745c5540~mv2.png/v1/fill/w_59,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_313e78e612ad43f993d87370745c5540~mv2.png"
          alt="rubik"
          ref={ref}
          className="rubik"
          onMouseOver={() => {
            console.log("gogo");
            ref.current.src =
              "https://static.wixstatic.com/media/a3c153_313e78e612ad43f993d87370745c5540~mv2.png/v1/fill/w_59,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a3c153_313e78e612ad43f993d87370745c5540~mv2.png";
          }}
        />
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <motion.div
          className="item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ rotate: 0 }}
          transition={{
            default: {
              duration: 1.3,
              ease: [0, 0.5, 0.2, 0.8],
            },
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_be12cf35ae454264874d19841803bf17~mv2.jpg"
              alt="alternative"
              className="image"
            />
            <div className="image-text">
              <p>Quick Overview</p>
            </div>
          </div>
          <div className="item-text">
            <p>Plant Resusable</p>
            <p>$2.33</p>
          </div>
          <div className="item-link">
            <a href="/">Add to Cart</a>
          </div>
        </motion.div>
        <motion.div
          className="item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ rotate: 0 }}
          transition={{
            default: {
              duration: 1.3,
              ease: [0, 0.5, 0.2, 0.9],
            },
            delay: 0.5,
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg"
              alt="alternative"
              className="image"
            />
            <div className="image-text">
              <p>Quick Overview</p>
            </div>
          </div>
          <div className="item-text">
            <p>Sustainability Starter Kit</p>
            <p>$10.43</p>
          </div>
          <div className="item-link">
            <a href="/">Add to Cart</a>
          </div>
        </motion.div>
        <motion.div
          className="item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, animationDelay: 0.3 }}
          style={{ rotate: 0 }}
          transition={{
            default: {
              duration: 1.3,
              ease: [0, 0.5, 0.2, 0.9],
            },
            delay: 0.8,
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_f00cb71f38d7415eacd2c60085f51907~mv2.jpg"
              alt="alternative"
              className="image"
            />
            <div className="image-text">
              <p>Quick Overview</p>
            </div>
          </div>
          <div className="item-text">
            <p>Reusable Bamboo Straws</p>
            <p>$1.33</p>
          </div>
          <div className="item-link">
            <a href="/">Add to Cart</a>
          </div>
        </motion.div>
      </div>
      <div className="main">
        <motion.div
          className="item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, animationDelay: 0.3 }}
          style={{ rotate: 0 }}
          transition={{
            default: {
              duration: 1.3,
              ease: [0, 0.5, 0.2, 0.9],
            },
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_bb684fa9db814a0783631430b46f33bb~mv2.jpg"
              alt="alternative"
              className="image"
            />
            <div className="image-text">
              <p>Quick Overview</p>
            </div>
          </div>
          <div className="item-text">
            <p>Natural Bamboo Loofah</p>
            <p>$3.33</p>
          </div>
          <div className="item-link">
            <a href="/">Add to Cart</a>
          </div>
        </motion.div>
        <motion.div
          className="item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, animationDelay: 0.3 }}
          style={{ rotate: 0 }}
          transition={{
            default: {
              duration: 1.3,
              ease: [0, 0.5, 0.2, 0.9],
            },
            delay: 0.5,
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg"
              alt="alternative"
              className="image"
            />
            <div className="image-text">
              <p>Quick Overview</p>
            </div>
          </div>
          <div className="item-text">
            <p>Bamboo Toothbrush (set of 2)</p>
            <p>$4.93</p>
          </div>
          <div className="item-link">
            <a href="/">Add to Cart</a>
          </div>
        </motion.div>
        <motion.div
          className="item"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, animationDelay: 0.3 }}
          style={{ rotate: 0 }}
          transition={{
            default: {
              duration: 1.3,
              ease: [0, 0.5, 0.2, 0.9],
            },
            delay: 0.8,
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg/v1/fill/w_306,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ead566_accfe36a331741fb81daacaa4d00c94d~mv2.jpg"
              alt="alternative"
              className="image"
            />
            <div className="image-text">
              <p>Quick Overview</p>
            </div>
          </div>
          <div className="item-text">
            <p>Plant Based Reusable Containers</p>
            <p>$10.33</p>
          </div>
          <div className="item-link">
            <a href="/">Add to Cart</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
