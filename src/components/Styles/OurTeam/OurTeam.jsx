import React, { useEffect } from "react";
import Style1 from "./Style1";
import Style2 from "./Style2";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "../../../features/actions/team";

const OurTeam = ({ data, styleName }) => {
  const dispatch = useDispatch();
  const { teamData } = useSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);

  const componentMap = {
    "Style 1": Style1,
    "Style 2": Style2,
  };

  const Component = componentMap[styleName];

  return <Component data={data} teamData={teamData} />;
};

export default OurTeam;
