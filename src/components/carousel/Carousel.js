import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ photos }) => {
  const [currImg, setCurrImg] = useState(0);
  const timeout = useRef(null);
  const length = photos.length;
  const delay = 7500;

  //cleanup function for useEffect (called every time index of slide changes )
  const resetTimeout = () => {
    if (timeout.current) {
      //console.log(`within if statement: ${timeout.current}`);
      //console.log(timeout);
      clearTimeout(timeout.current);
    }
  };

  /* autoplay for slideshow: 
    every 7.5 seconds, setCurrCard will be called
   */
  useEffect(() => {
    resetTimeout(); // start timer at 0 each time

    timeout.current = setTimeout(
      () => setCurrImg((prevImg) => (prevImg === length - 1 ? 0 : prevImg + 1)),
      delay
    );

    return () => {
      // console.log("timeout.current: " + timeout.current);
      // console.log(`${currImg}/${length}`);
      resetTimeout();
    };
  }, [currImg, length]);

  if (length <= 0) {
    return null;
  }

  return (
    <div className="carousel-holder">
      <Link className="name" to="/">
        Sky Leilani
      </Link>
      <section
        className="carousel"
        style={{ transform: `translate(${-currImg * 100}%, 0, 0)` }}
      >
        {photos.map((img, index) => {
          console.log(img.album);
          return (
            <div
              className={index === currImg ? "slide active" : "slide"}
              key={index}
              //when current card is 0, movec position of slide by 0%
              // when current card is 1 move position -100%
              // when current card is 0 move position -200%, and so on
            >
              {index === currImg && (
                <img
                  src={img.img_url}
                  alt={img.id}
                  key={img.id + 1}
                  className="img"
                />
              )}

              <Link className="title" key={index} to="#">
                {img.name}
              </Link>
              <Link className="album" key={index} to="#">
                {img.album === "undefined" || null
                  ? ""
                  : ` Album: ${img.album}` }
              </Link>
              <Link className="date" key={index} to="#">
                {`Date Created: ${img.date}`}
              </Link>
            </div>
          );
        })}
        <div className="carouselDots">
          {photos.map((
            _,
            img_idx // _ is a placeholder its null bc we dont need that arg
          ) => (
            <div
              key={img_idx}
              className={`carouselDot${currImg === img_idx ? "active" : ""}`}
              onClick={() => {
                setCurrImg(img_idx);
              }}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Carousel;
