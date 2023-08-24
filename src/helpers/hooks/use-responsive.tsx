import React from "react";

const useResponsive = () => {
  const [initialRender, setInitialRender] = React.useState<boolean>(true);
  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  React.useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      handleWindowSizeChange();
    }
  }, [initialRender]);

  return {
    isMobile: width < 900,
    isScreenHeightUnder375: height < 300,
    isScreenHeightUnder600: height < 600,
    isScreenWidthUnder600: width < 600,
  };
};

export default useResponsive;
