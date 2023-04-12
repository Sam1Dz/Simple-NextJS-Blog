import { useMediaQuery, useTheme } from "@mui/material";

function useResponsive() {
  const theme = useTheme();

  const isScreenWidthUnder600 = useMediaQuery(theme.breakpoints.up("sm"));
  const isScreenHeightUnder600 = useMediaQuery("(min-height:600px)");
  const isHeightUnder375 = useMediaQuery("(min-height:300px)");

  return {
    isScreenWidthUnder600,
    isScreenHeightUnder600,
    isHeightUnder375,
  };
}

export default useResponsive;
