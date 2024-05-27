import logoImg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex flex-row basis-3/12 justify-start w-full gap-x-3 items-center">
          <img className="w-10 md:w-14" src={logoImg} alt="logo" />
          <div className="flex flex-col">
            <Link to="/">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Bookoe
              </h1>
            </Link>
            <p className="text-xs text-gray-500">Book Store Website</p>
          </div>
        </div>
        <div className="border rounded-xl p-2">
          <form className="">
            <select
              id="countries"
              className="block bg-transparent border-none outline-none focus:border-none cursor-pointer"
            >
              <option value="tm">TM</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
