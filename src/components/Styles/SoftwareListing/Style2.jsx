import React, { useEffect, useState } from "react";
import "./Softwares.css";
import Loader from "../../Loader/Loader";
import SoftwarePagination from "../../SoftwarePagination/SoftwarePagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllSoftwaresStyle2 } from "../../../features/actions/category";


const Style2 = () => {
const dispatch = useDispatch()
const {allSoftwareData,isLoading}= useSelector((state)=>state.category)
  const [url, setUrl] = useState(
    `${
      import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
    }/site/softwarestyle2`
  );

useEffect(()=>{
dispatch(getAllSoftwaresStyle2(url))
},[url])
 
  return (
    <>
           {isLoading ? (
        <Loader />
      ) : (
        <SoftwarePagination data={allSoftwareData} setUrl={setUrl}/>
      )}
     
    </>
  );
};

export default Style2;


