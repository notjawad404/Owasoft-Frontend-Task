import PropTypes from 'prop-types';


const FeatureCard = ({ title, description, icon, middle }) => {

  const cardClasses = middle
    ? 'transform translate-y-[-20%] md:translate-y-[20%] shadow-lg'
    : 'shadow-md';

  return (
    <div className={`w-full md:w-1/3 p-4 ${middle ? 'md:mt-8' : ''}`}>
      <div className={`bg-white rounded-lg overflow-hidden ${cardClasses}`}>
        <div className="p-4 flex items-center justify-center">
          <span className="text-4xl">{icon}</span>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function TopFeatures() {
  const featureCards = [
    {
      title: "Scheduled Publishing",
      description: "Allow users to schedule the publication of alert messages at specific dates and times, enhancing timely communication.",
      icon: "🕑",
      middle: false
    },
    {
      title: "Customizable Embed Codes",
      description: "Empower users with the ability to customize embed codes, tailoring the appearance of alert messages on their websites.",
      icon: "💻",
      middle: true
    },
    {
      title: "Analytics Dashboard",
      description: "Provide a comprehensive analytics dashboard, offering insights into user engagement and performance metrics for alert messages.",
      icon: "📊",
      middle: false
    },
    {
      title: "Multi-Website Support",
      description: "Enable users to manage and create customized alert messages for multiple websites within a single account and publish on multiple websites.",
      icon: "🌐",
      middle: false
    },
    {
      title: "Responsive Interface",
      description: "Design a responsive and user-friendly interface, ensuring a seamless experience across various devices and screen sizes.",
      icon: "📱",
      middle: true
    },
    {
      title: "Rolebased User Management",
      description: "Implement role-based user management, allowing different authorization levels such as admin and user for enhanced security.",
      icon: "🛡️",
      middle: false
    }
  ];

  FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    middle: PropTypes.bool
  };


  return (
    <div className="flex flex-wrap justify-center">
      {featureCards.map((card, index) => (
        <FeatureCard key={index} {...card} />
      ))}
    </div>
  );
}
