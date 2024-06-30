

const CompatibilityList = [
  {
    logo: "S",
    name: "Chrome",
    details: "Bolster website retention rate with Windows & Android OS compatible push notifications. Easily send web push notifications on any device.",
  },
  {
    logo: "F",
    name: "Firefox",
    details: "Seamlessly send push notifications on Firefox across Windows, macOS, and Linux operating systems.",
  },
  {
    logo: "E",
    name: "Edge",
    details: "Deliver push notifications on Microsoft Edge to engage users on both Windows and macOS platforms.",
  },
];

const Compatibility = () => {
  return (
    <div className="flex justify-center items-center py-10">
    <h1 className="">Compatibility</h1>
    <h1 className=" font-bold text-4xl">Support for Popular Web Browsers</h1>
      <div className="flex flex-wrap justify-center px-10">
        {CompatibilityList.map((list, index) => (
          <div className="w-1/3" key={index}>
          <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-3xl font-bold mb-2">{list.logo}</h1>
          <h1 className="font-semibold text-xl mb-2">{list.name}</h1>
          <p className="text-gray-700">{list.details}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Compatibility;
