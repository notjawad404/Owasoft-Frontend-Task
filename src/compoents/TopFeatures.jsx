import PropTypes from "prop-types";

import featuretop from "../assets/Features/featurebg.svg";
import arrowIcon from "../assets/Features/arrowIcon.svg";

import servicesIcon1 from "../assets/Features/servicesIcon1.svg";
import servicesIcon2 from "../assets/Features/servicesIcon2.svg";
import servicesIcon3 from "../assets/Features/servicesIcon3.svg";
import servicesIcon4 from "../assets/Features/servicesIcon4.svg";
import servicesIcon5 from "../assets/Features/servicesIcon5.svg";
import servicesIcon6 from "../assets/Features/servicesIcon6.svg";

const FeatureCard = ({ title, description, icon, middle }) => {
  const cardClasses = middle
    ? "transform translate-y-[-20%] md:translate-y-[20%] shadow-lg"
    : "shadow-md";

  return (
    <div className={`w-1/3 p-4 ${middle ? "mt-8" : ""}`}>
      <div className={`bg-white rounded-lg overflow-hidden ${cardClasses} group`}>
        <div className="pt-8 pb-10 px-5">
          <img src={icon} alt="ServicesIcon" className="py-5 transition-transform transform group-hover:-translate-y-2" />
          <h1 className="text-2xl font-medium py-5">{title}</h1>
          <p className=" font-normal text-lg py-5">{description}</p>
          <div className=" font-medium text-xl transition-transform transform hover:translate-x-4 py-5 flex flex-row">
            <p>Read More </p>
            <img src={arrowIcon} alt="ArrowIcon" className=" px-2 pt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function TopFeatures() {
  const featureCards = [
    {
      title: "Scheduled Publishing",
      description:
        "Allow users to schedule the publication of alert messages at specific dates and times, enhancing timely communication.",
      icon: servicesIcon1,
      middle: false,
    },
    {
      title: "Customizable Embed Codes",
      description:
        "Empower users with the ability to customize embed codes, tailoring the appearance of alert messages on their websites.",
      icon: servicesIcon2,
      middle: true,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Provide a comprehensive analytics dashboard, offering insights into user engagement and performance metrics for alert messages.",
      icon: servicesIcon3,
      middle: false,
    },
    {
      title: "Multi-Website Support",
      description:
        "Enable users to manage and create customized alert messages for multiple websites within a single account and publish on multiple websites.",
      icon: servicesIcon4,
      middle: false,
    },
    {
      title: "Responsive Interface",
      description:
        "Design a responsive and user-friendly interface, ensuring a seamless experience across various devices and screen sizes.",
      icon: servicesIcon5,
      middle: true,
    },
    {
      title: "Rolebased User Management",
      description:
        "Implement role-based user management, allowing different authorization levels such as admin and user for enhanced security.",
      icon: servicesIcon6,
      middle: false,
    },
  ];

  FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    middle: PropTypes.bool,
  };

  return (
    <div className="">
      <img src={featuretop} alt="featuretop" className="w-full bg-white" />
      <div className="custom_bg pb-10">
      

      <div className="flex flex-wrap justify-center px-20">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
      </div>
    </div>
  );
}
