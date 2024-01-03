import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import FinanceList from "./FinanceList";
import GetUsers from "../controller/GetUsers";
import AddPayment from "./AddPayment";

export default function Sidebar() {
  // fetching api USERS
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetUsers({
          /* your params here */
        });
        setUserData(response.data.users);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // fetching api USERS
  // button trigger function
  const [openMenuCollapse, setOpenMenuCollapse] = useState(true);
  const toggleMenuShow = () => {
    setOpenMenuCollapse(false);
  };
  const toggleMenuCollapse = () => {
    setOpenMenuCollapse(true);
  };
  // button trigger function

  const [menuActive, setMenuActive] = useState("Dashboard");
  console.log("menuActive", menuActive);
  const menuNavbar = [
    {
      title: "Dashboard",
      direct: "#/",
      path: "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z",
    },
    {
      title: "Daftar Siswa",
      direct: "#/",
      path: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z",
    },
    {
      title: "Keuangan",
      direct: "#/",
      path: "M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z",
    },
    {
      title: "Logout",
      direct: "#/",
      path: "M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3",
    },
  ];

  const [classes] = useState({
    a: "flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full",
    svg: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
    active: "font-bold bg-gradient-to-r from-gray-200 to-white",
  });
  const { a, svg, active } = classes;

  // show when call
  const MainTitle = () => {
    return (
      <Link
        href="https://flowbite.com/"
        className="flex items-center ps-2.5 mb-5 h-full col-span-2 "
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-6 me-3 sm:h-7"
          alt="Flowbite Logo"
          />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          MAURITANIYYAH
        </span>
      </Link>
    );
  };
  // show when call
  
  return (
    <>
    {openMenuCollapse && <div className="grid grid-cols-3 gap-4 sm:hidden">
    <MainTitle /> 
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        aria-expanded={openMenuCollapse}
        type="button"
        className="inline-flex place-content-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenuShow}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      </div>}

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-full h-screen sm:w-64 transition-transform ${
          openMenuCollapse
            ? "-translate-x-full sm:translate-x-0"
            : "-translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gradient-to-r from-primary via-secondary to-tertiary to-90% dark:bg-primary">
          <div className="grid grid-cols-3 gap-4">
            <MainTitle />
            {!openMenuCollapse && (
              <button className="font-bold h-full sm:hidden" onClick={toggleMenuCollapse}>
                X
              </button>
            )}
          </div>
          <ul className="space-y-2 font-medium">
            {menuNavbar.map((value, index) => {
              return (
                <>
                  {value.title === "Logout" && (
                    <li className="border-b border-gray-600 pt-10" />
                  )}
                  <li
                    key={index}
                    className={
                      value.title === menuActive ? active : "font-normal"
                    }
                  >
                    <button
                      className={a}
                      onClick={() => setMenuActive(value.title)}
                    >
                      <svg
                        className={svg}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          value.title === "Logout" ? "none" : "currentColor"
                        }
                        viewBox={
                          value.title === "Logout" ? "0 0 18 16" : "0 0 22 21"
                        }
                      >
                        <path
                          d={value.path}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={value.title === "Logout" ? "2" : "0"}
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ms-3">{value.title}</span>
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </aside>
      <section className="p-4 sm:ml-64 overflow-x-auto">
        {menuActive === 'Dashboard' && <Dashboard />}
        {menuActive === 'Daftar Siswa' && <UserList userData={userData}/>}
        {menuActive === 'Keuangan' && <FinanceList openActivePage={setMenuActive}/>}
        {menuActive === 'AddPayment' && <AddPayment />}
      </section>
    </>
  );
}
