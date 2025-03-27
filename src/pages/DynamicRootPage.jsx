import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getRouteDataBySlug } from "../features/actions/dynamicRootPage";
import { useParams } from "react-router-dom";
import { getHomeData } from "../features/actions/home";
import HeroSection from "../components/Styles/HeroSection/HeroSection";
import Testimonial from "../components/Styles/Testimonial/Testimonial";
import CallToAction from "../components/Styles/CallToAction/CallToAction";
import TabStyle from "../components/Styles/TabStyle/TabStyle";
import ServicesStyle from "../components/Styles/ServicesStyle/ServicesStyle";
import WorkProcessStyle from "../components/Styles/WorkProcessStyle/WorkProcessStyle";
import PricingStyle from "../components/Styles/PricingStyle/PricingStyle";
import Accordions from "../components/Styles/Accordions/Accordions";
import Features from "../components/Styles/Features/Features";
import IntegrationStyle from "../components/Styles/IntegrationStyle/IntegrationStyle";
import ContactUs from "../components/Styles/ContactUs/ContactUs";
import Portfolio from "../components/Styles/Portfolio/Portfolio";
import OurTeam from "../components/Styles/OurTeam/OurTeam";
import HelpCenter from "../components/Styles/HelpCenter/HelpCenter";
import BlogStyle from "../components/Styles/BlogStyle/BlogStyle";
import PrivacyAndTerms from "../components/Styles/PrivacyAndTerms/PrivacyAndTerms";
import Style1 from "../components/Styles/Category/Style1";

const DynamicRootPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { page_data, data } = useSelector(
    (state) => state.dynamicRootPage.routeData
  );
  const { isLoading: isDynamicLoading } = useSelector(
    (state) => state.dynamicRootPage
  );

  const { homeData, isLoading: isHomeLoading } = useSelector(
    (state) => state.home
  );

  const isLoading = isDynamicLoading || isHomeLoading;

  // Adding meta and scripts
  const mainData = slug ? data : homeData?.page_section_data;

  const metaTitle = slug
    ? page_data?.page_data?.meta_title
    : homeData?.page_data?.page_data?.meta_title;

  const metaDescription = slug
    ? page_data?.page_data?.meta_description
    : homeData?.page_data?.page_data?.meta_description;

  const pageHeadScripts = slug
    ? page_data?.page_data?.page_head_script
    : homeData?.page_data?.page_data?.page_head_script;

  const pageBodyScripts = slug
    ? page_data?.page_data?.page_body_script
    : homeData?.page_data?.page_data?.page_body_script;

  const componentMap = {
    Hero: HeroSection,
    Testimonial: Testimonial,
    "Call To Action": CallToAction,
    Tab: TabStyle,
    Service: ServicesStyle,
    "Work Process": WorkProcessStyle,
    Pricing: PricingStyle,
    Faq: Accordions,
    Feature: Features,
    Integration: IntegrationStyle,
    "Our Team": OurTeam,
    Blog: BlogStyle,
    Contact: ContactUs,
    "Help Center": HelpCenter,
    Portfolio: Portfolio,
    "Privacy & Terms": PrivacyAndTerms,
  };

  useEffect(() => {
    if (slug) {
      dispatch(getRouteDataBySlug(slug));
    } else {
      dispatch(getHomeData());
    }
  }, [slug, dispatch]);

  useEffect(() => {
    let bodyScriptWrapper;

    if (pageBodyScripts) {
      bodyScriptWrapper = document.createElement("div");
      bodyScriptWrapper.innerHTML = pageBodyScripts;
      bodyScriptWrapper.setAttribute("data-script", "body-script"); // For cleanup
      document.body.prepend(bodyScriptWrapper);
    }

    return () => {
      if (bodyScriptWrapper) document.body.removeChild(bodyScriptWrapper);
    };
  }, [pageBodyScripts]);

  console.log(mainData);

  return (
    <>
      <Helmet>
        <title>{metaTitle || "Babvip"}</title>
        <meta
          name="description"
          content={metaDescription || "Babvip Description"}
        />
        {/* ✅ Inject head script safely */}
        {pageHeadScripts && (
          <script dangerouslySetInnerHTML={{ __html: pageHeadScripts }} />
        )}
      </Helmet>

      {/* {isLoading ? (
        <Loader />
      ) : Array.isArray(mainData) && mainData.length > 0 ? (
        mainData.map((item, idx) => {
          const Component = componentMap[item?.section_name];

          if (!Component) {
            console.warn(
              `Component for section "${item?.section_name}" not found.`
            );
            return null; // Prevents React from crashing
          }

          return (
            <Component
              key={idx}
              data={item?.page_section_data}
              styleName={item?.section_style_name}
            />
          );
        })
      ) : ( */}
      {/* // <p className="text-center text-primary fw-bold fs-5 mt-5 mx-5">
        //   Sorry, no content available on this page right now.
        // </p> */}
      <Style1 />
      {/* // )} */}
    </>
  );
};

export default DynamicRootPage;
