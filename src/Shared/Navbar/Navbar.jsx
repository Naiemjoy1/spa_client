import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/Images/logo/logo.png";

const Navbar = () => {
  const currentPath = window.location.pathname;

  const navLink = (
    <>
      {["Home", "Service", "Booking", "Blog", "Shop"].map((item) => {
        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
        return (
          <li
            className="relative w-20 flex justify-center items-center"
            key={item}
          >
            <a
              href={path}
              className={`inline-block text-center w-full py-2 hover:text-blue-500 
                after:absolute after:left-0 after:bottom-0 after:w-full 
                after:h-0.5 after:bg-blue-500 after:transition-transform 
                after:duration-300 ${
                  currentPath === path
                    ? "after:scale-x-100 text-blue-500"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }`}
            >
              {item}
            </a>
          </li>
        );
      })}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-1/4">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </div>
        <div className="w-9/12 flex justify-end">
          <ul className="menu menu-horizontal space-x-6 font-medium">
            {navLink}
          </ul>
          <div className="flex items-center gap-6 text-lg">
            <FaSearch />
            <IoCartOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
