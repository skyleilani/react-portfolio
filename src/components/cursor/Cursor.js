import React, { useState, useEffect } from "react";

const Cursor = () => {
  /* handle( x, y ) position tracking */
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /* handle cursor leaving the document */
  const [hidden, setHidden] = useState(false);

  /* handle cursor during click event */
  const [click, setClick] = useState(false);

  /* handle hovering links and buttons */
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove); // handling positioning

      document.addEventListener("mouseenter", mEnter); // handling mouse enter event
      document.addEventListener("mouseleave", mLeave); // handling mouse leaving page

      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove); // removing positioning tracking listener

      document.removeEventListener("mouseenter", mEnter); // removing mosue enter listener
      document.removeEventListener("mouseleave", mLeave); // removing mouse leave listener

      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY }); // setting positioning
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });

      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);

  /*
    Below : 
    - left and top are handling x, y positioning 
    - class c--hidden is added to cursor div and will be connected to hidden state

    */

  return (
    <div
      className={
        "cursor" +
        (hidden ? "c--hidden" : "") +
        (click ? "c--click" : "") +
        (linkHover ? "c--hover" : "")
      }
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      {console.log(linkHover)};{" "}
    </div>
  );
};

export default Cursor;
