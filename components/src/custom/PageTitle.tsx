import React from "react";
import MuiTypography from "../typography/Typograph";

const PageTitle: React.FC<ILayout> = ({ children }) => {
  return (
    <MuiTypography variant="h5" fontWeight={600}>
      {children}
    </MuiTypography>
  );
};

export default PageTitle;
