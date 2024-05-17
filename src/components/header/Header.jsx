// import { useState } from "react";
import logoImg from "../../assets/images/logo.svg";
import // IconHeart,
// IconShoppingCart,
// IconCategory,
// IconSearch,
"@tabler/icons-react";
// import cat from "../../assets/images/cat.jpeg";
import { Link } from "react-router-dom";

export default function Header() {
  // let [open, setOpen] = useState(true);
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
      {/* <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
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
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <p>=</p> : <p>x</p>}
        </div>
        <ul
          className={`md:flex border-b-2 sm:border-0 md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "hidden" : "block"
          } md:opacity-100 `}
        >
          <div className="flex md:flex-row basis-9/12 justify-start w-full gap-3 items-center">
            <div className="border rounded-xl flex flex-row">
              <div className="flex flex-row border-r p-2 cursor-pointer">
                <IconCategory stroke={2} /> Menu
              </div>
              <div className="p-2 w-20 md:w-32 lg:w-64">
                <input className="outline-none w-full" type="search" />
              </div>
              <div className="p-2 border-l cursor-pointer">
                <IconSearch stroke={2} />
              </div>
            </div>

            <div className="border rounded-xl p-2 cursor-pointer">
              <IconHeart />
            </div>
            <div className="border rounded-xl p-2 cursor-pointer">
              <IconShoppingCart />
            </div>
            <div className="rounded-xl w-10 h-10 cursor-pointer">
              <img src={cat} className="w-full h-full rounded-xl" alt="cat" />
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
        </ul>
      </div> */}
    </div>
  );
}

// export default function Header() {
//   return (
//     <div style={{display: "flex", flexDirection: "row"}}>
//       <Link to="/">Home</Link>
//       <Link to="/news">News</Link>
//     </div>
//   )
// }
