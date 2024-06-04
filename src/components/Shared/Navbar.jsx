import { NavLink } from "react-router-dom";
import auth from "../../../firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/events"}>Events</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    const scrollY = window.scrollY;

    if (scrollY > window.innerHeight * 0.3) {
      navbar.classList.add(
        "bg-gradient-to-r",
        "from-orange-400",
        "to-orange-600",
        "text-white"
      );
    } else {
      navbar.classList.remove(
        "bg-gradient-to-r",
        "from-orange-400",
        "to-orange-600"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array to run the effect only once
  return (
    <div className="sticky top-0 z-50  font-bold font-serif">
      <div
        className="navbar container mx-auto sm:rounded-xl"
        onScroll={handleScroll}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="Avatar" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button
                    onClick={async () => {
                      const success = await signOut();
                      if (success) {
                        alert("You are signed out");
                      }
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <label htmlFor="signin_modal" className="btn">
              Sign in
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
