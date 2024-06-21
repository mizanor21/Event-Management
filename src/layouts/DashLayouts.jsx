import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

const DashLayouts = () => {
  const [user, loading] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar bg-slate-100">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <Link
              to={"/"}
              className="flex-1 px-2 mx-2 text-2xl font-bold font-serif"
            >
              Events
            </Link>
            <div className="flex-none hidden lg:block">
              <div className="navbar-end">
                {loading ? (
                  <span className="loading loading-infinity loading-lg"></span>
                ) : (
                  user && (
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-52 text-white"
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
                  )
                )}
              </div>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-slate-100 flex flex-col justify-between">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/all-events"}>All Events</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/add-event"}>Add Event</NavLink>
              </li>
            </ul>
            <button
              onClick={async () => {
                const success = await signOut();
                if (success) {
                  alert("You are signed out");
                }
              }}
              className="btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayouts;
