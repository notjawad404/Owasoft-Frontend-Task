import testimonialIcon from "../assets/testinomalIcon.svg";
import invertedcommasIcon from "../assets/invertedcommasIcon.svg";

const testimonials = [
  {
    name: "Sergio Marquina",
    image: testimonialIcon,
    role: "Businessman",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    name: "Sergio Marquina",
    image: testimonialIcon,
    role: "Businessman",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    name: "Sergio Marquina",
    image: testimonialIcon,
    role: "Businessman",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    name: "Sergio Marquina",
    image: testimonialIcon,
    role: "Businessman",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    name: "Sergio Marquina",
    image: testimonialIcon,
    role: "Businessman",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
  {
    name: "Sergio Marquina",
    image: testimonialIcon,
    role: "Businessman",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
  },
];

const Testimonials = () => {
  return (
    <div className="p-40">
      <div className="bg-gray-900 text-white py-12 px-10 rounded-3xl">
        <div className="container mx-auto">
          <p className="text-center text-lg font-normal">Out Testimonials</p>
          <h2 className="text-center text-3xl font-bold pb-8">
            What Peoples Are Saying
          </h2>
          <div className="grid SSgrid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="">
                <div className="bg-white bg-opacity-10 p-6 rounded-xl flex flex-col">
                  <p className="text-2xl font-normal text-yellow-400">★★★★★</p>
                  <p className="text-lg font-normal py-4">{testimonial.text}</p>
                  <div className="flex justify-end">
                    <img
                      className="items-end"
                      src={invertedcommasIcon}
                      alt="invertedcommasIcon"
                    />
                  </div>
                </div>

                <div className="flex flex-row p-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-xl font-medium">{testimonial.name}</p>
                    <p className=" text-base font-normal">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
