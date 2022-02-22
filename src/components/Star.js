import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Star({ children }) {
  return (
    <p>
      <StarOutlineIcon />
      <span>{children}</span>
    </p>
  );
}

export default Star;
