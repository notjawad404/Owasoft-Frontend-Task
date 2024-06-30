import PropTypes from 'prop-types';

const testimonialsList = [
  {
    "name": "Sergio Marquina",
    "title": "Businessman",
    "testimonial": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "rating": 5
  },
  {
    "name": "Sergio Marquina",
    "title": "Businessman",
    "testimonial": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "rating": 5
  },
  {
    "name": "Sergio Marquina",
    "title": "Businessman",
    "testimonial": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "rating": 5
  },
  {
    "name": "Sergio Marquina",
    "title": "Businessman",
    "testimonial": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "rating": 5
  },
  
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
          <img src="https://via.placeholder.com/40" alt={testimonial.name} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{testimonial.testimonial}</p>
      <div className="flex">
        {Array(testimonial.rating).fill().map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.528 4.688a1 1 0 00.95.69h4.928c.969 0 1.371 1.24.588 1.81l-3.976 2.887a1 1 0 00-.364 1.118l1.528 4.688c.3.921-.755 1.688-1.54 1.118l-3.976-2.887a1 1 0 00-1.175 0l-3.976 2.887c-.784.57-1.84-.197-1.54-1.118l1.528-4.688a1 1 0 00-.364-1.118L2.534 10.11c-.783-.57-.381-1.81.588-1.81h4.928a1 1 0 00.95-.69l1.528-4.688z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};


function Testinomals() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-white text-3xl mb-8">What Peoples Are Saying</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonialsList.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testinomals;
