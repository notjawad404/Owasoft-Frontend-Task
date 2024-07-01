import '../App.css';

import logo from '../assets/logo.svg';
import socialmedia1 from '../assets/socialmedia1.svg';
import socialmedia2 from '../assets/socialmedia2.svg';
import socialmedia3 from '../assets/socialmedia3.svg';
import socialmedia4 from '../assets/socialmedia4.svg';

const Footer = () => {
  return (
    <footer className="footer_bg text-white py-10 px-20 fontRubik">
      <div className="container mx-auto grid grid-cols-4 gap-10 text-xl font-normal">
        <div>
            <div className='flex flex-row gap-2'>
            <img src={logo} alt="logo" />
            <h2 className=" text-3xl font-bold py-10">Alertify</h2>
            </div>
          <p className="mt-4">
            Sorem ipsum dolor sit amet consectetur. Conse laoresey condimentum sit vitae.
          </p>
          <div className="mt-4 flex space-x-4">
            <img src={socialmedia1} alt="socialmedia1" />
            <img src={socialmedia2} alt="socialmedia2" />
            <img src={socialmedia3} alt="socialmedia3" />
            <img src={socialmedia4} alt="socialmedia4" />
          </div>
        </div>
        <div>
          <h2 className=" text-3xl font-bold py-10">Products</h2>
          <ul className="mt-4 space-y-8">
            <li>Mobile Push Notifications</li>
            <li>Web Push Notifications</li>
            <li>Email Notifications</li>
            <li>Integration Directory</li>
            <li>SMS Notifications</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-3xl font-bold py-10">Developers</h2>
          <ul className="mt-4 space-y-8">
            <li>Documentation</li>
            <li>GitHub</li>
            <li>Code Sample</li>
            <li>Developers Community</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h2 className=" text-3xl font-bold py-10">Company</h2>
          <ul className="mt-4 space-y-8">
            <li>About Us</li>
            <li>Why Alertify</li>
            <li>Contact Sales</li>
            <li>Customer Referral Program</li>
            <li>Newsroom</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
