import call from "../../assets/images/call.svg";
import location from "../../assets/images/location.svg";
import { IconMail } from "@tabler/icons-react";
import logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto flex flex-row mb-8">
        <div className="basis-4/12 flex flex-col px-2">
          <div className="flex flex-row mb-5">
            <img className="w-10 mr-2" src={logo} alt="logo" />
            <div className="flex flex-col">
              <h1 className="font-semibold text-xl">Bookoe</h1>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            mollitia recusandae quis consequuntur incidunt tenetur eveniet
            voluptas voluptatibus corrupti quae.
          </p>

          <h1 className="font-semibold text-base mt-5 mb-3">Follow Us</h1>
          <div className="flex flex-row gap-2">
            <div className="w-9 h-9 rounded-xl hover:bg-purple-100 border flex items-center justify-center">
              <img className="w-4" src={location} alt="" />
            </div>
            <div className="w-9 h-9 rounded-xl hover:bg-purple-100 border flex items-center justify-center">
              <img className="w-4" src={location} alt="" />
            </div>
            <div className="w-9 h-9 rounded-xl hover:bg-purple-100 border flex items-center justify-center">
              <img className="w-4" src={location} alt="" />
            </div>
            <div className="w-9 h-9 rounded-xl hover:bg-purple-100 border flex items-center justify-center">
              <img className="w-4" src={location} alt="" />
            </div>
            <div className="w-9 h-9 rounded-xl hover:bg-purple-100 border flex items-center justify-center">
              <img className="w-4" src={location} alt="" />
            </div>
          </div>
        </div>
        <div className="basis-3/12 px-2">
          <h1>Books Categories</h1>
          <div className="grid grid-cols-2 gap-2 text-sm mt-4 text-gray-600">
            <div>
              <a href="#">Action</a>
            </div>
            <div>
              <a href="#">Law</a>
            </div>
            <div>
              <a href="#">Advanture</a>
            </div>
            <div>
              <a href="#">Mystery</a>
            </div>
            <div>
              <a href="#">Comedy</a>
            </div>
            <div>
              <a href="#">Professional</a>
            </div>
            <div>
              <a href="#">Crime</a>
            </div>
            <div>
              <a href="#">Romance</a>
            </div>
            <div>
              <a href="#">Drama</a>
            </div>
            <div>
              <a href="#">TV series</a>
            </div>
            <div>
              <a href="#">Fantasy</a>
            </div>
            <div>
              <a href="#" className="text-blue-600">
                View more
              </a>
            </div>
          </div>
        </div>
        <div className="basis-2/12 px-2">
          <h1 className="">Quick Links</h1>
          <div className="text-sm text-gray-600 grid grid-cols-1 gap-2 mt-4">
            <div>
              <a href="#">About us</a>
            </div>
            <div>
              <a href="#">Contact us</a>
            </div>
            <div>
              <a href="#">Products</a>
            </div>
            <div>
              <a href="#">Login</a>
            </div>
            <div>
              <a href="#">Sign Up</a>
            </div>
            <div>
              <a href="#">FAQ</a>
            </div>
            <div>
              <a href="#">Shipment</a>
            </div>
          </div>
        </div>
        <div className="basis-3/12 px-2">
          <h1>Our Store</h1>
          <div className="grid grid-cols-1 text-sm text-gray-600 gap-4 mt-4">
            <div className="">
              <a href="#" className="flex flex-row">
                <img className="w-6" src={location} alt="" />
                <p>
                  Turkmenistan, Ashgabat. 30 mkr, Drejinskiy avenyu (sirkin
                  yany)
                </p>
              </a>
            </div>
            <div className="">
              <a href="#" className="flex flex-row">
                <img className="w-6" src={call} alt="" />
                <p>+99365123456</p>
              </a>
            </div>
            <div className="">
              <a href="#" className="flex flex-row">
                <IconMail className="text-purple-500" />
                <p>Bookoe@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t p-4 flex justify-between text-sm text-gray-600">
        <h1>Bookoe Book Store Website - &copy All Rights Reserved</h1>
        <h1>Made with &#10084; by Edubox</h1>
      </div>
    </footer>
  );
}
