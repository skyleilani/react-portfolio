import { useState, useEffect } from "react";

export const useCancelOffButton = (listener, isActive) => {
  const [activeState, setActiveState] = useState(isActive);

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (listener.current !== null && !listener.current.contains(e.target)) {
        setActiveState(!activeState);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (activeState) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [activeState, listener]);

  return [activeState, setActiveState];
};
