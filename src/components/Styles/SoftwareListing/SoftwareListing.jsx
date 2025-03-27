import React from "react";
import Style2 from "./Style2";

const SoftwareListing = ({ data, styleName }) => {
  const componentMap = {
    "Style 2": Style2,
  };

  const Component = componentMap[styleName];

  return <Component data={data} />;
};

export default SoftwareListing;
