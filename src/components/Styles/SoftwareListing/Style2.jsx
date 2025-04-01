import React from "react";
import "./Softwares.css";
import ContactModal from "../../SoftwareModal/ContactModal";
import Loader from "../../Loader/Loader";
import SoftwarePagination from "../../SoftwarePagination/SoftwarePagination";


const Style2 = () => {
 
  return (
    <>
           {isLoading ? (
        <Loader />
      ) : (
     <SoftwarePagination/>
      )}
      <ContactModal/>
    </>
  );
};

export default Style2;

export con
