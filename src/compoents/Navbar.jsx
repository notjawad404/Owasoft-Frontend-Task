import '../App.css'
import appLogo from '../assets/logo.svg'
import dropdownIcon from '../assets/dorpdownIcon.svg'


export default function Navbar() {
  return (
  
<nav className="bg-transparent fixed w-full h-24 z-20 border-b border-white pt-7 pb-2 px-16">
<div className="flex flex-wrap items-center justify-between mx-auto">
<div className="flex flex-row mx-4">
    <img src={appLogo} className="h-8" alt="Logo"/>
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alertify</span>
</div>
<div className="flex md:order-2 space-x-3 mdspace-x-0">
    <button type="button" className="text-white hover:bg-white hover:text-blue-600 rounded-3xl py-3 px-5 border border-white gap-3 mx-5">Login or Signup</button>
    <button className="bg-white text-black hover:bg-black hover:text-white rounded-3xl p-3">Get a Demo</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
  <ul className="flex flex-row ">
    <li>
      <a href="#features" className="text-white hover:border-b-2 fontRubik font-medium text-base leading-5 gap-12 mx-10 py-3">Features</a>
    </li>
    <li>
      <a href="#" className="text-white hover:border-b-2 fontRubik font-medium text-base leading-5 gap-12 mx-10 py-3">Pricing</a>
    </li>
    <li className="relative group">
      <a href="#" className="text-white hover:border-b-2 fontRubik font-medium text-base leading-5 gap-3 mx-10 py-3 flex items-center">
        Resources
        <span className="ml-2 transition-transform duration-200 transform group-hover:rotate-180">
          <img src={dropdownIcon} alt="dropdownIcon"/>
        </span>
      </a>
     
    </li>
  </ul>
</div>
</div>
</nav>

    
  )
}
