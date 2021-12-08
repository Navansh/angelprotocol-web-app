import { NavLink } from "react-router-dom";
import { app, site, web } from "types/routes";
import { useRouteMatch } from "react-router-dom";
import { createRef, useState } from "react";
import { createPopper } from "@popperjs/core/lib/createPopper";

export default function WebMenu() {
  const { url } = useRouteMatch();
  const linkStyles = {
    className: `text-angel-blue hover:text-opacity-75 uppercase inline-flex items-center`,
    activeClassName: "font-bold",
  };
  const govButtonRef = createRef<any>();
  const govDropdownRef = createRef<any>();
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdwonPopover = () => {
    console.log("open ", showDropdown);
    createPopper(govButtonRef.current, govDropdownRef.current, {
      placement: "bottom-start",
    });
    setShowDropdown(true);
  };

  const closeDropdown = () => setShowDropdown(false);

  return (
    <ul
      className={`hidden md:flex justify-self-end items-center font-body text-sm lg:text-base`}
    >
      <li className="mr-4">
        <NavLink to={`${url}${web.charities}`} {...linkStyles}>
          For Charities
        </NavLink>
      </li>
      <li className="mr-4 relative">
        <button
          {...linkStyles}
          type="button"
          id="governanceDropdown"
          data-dropdown-toggle="gDropdown"
          ref={govButtonRef}
          onClick={() =>
            showDropdown ? closeDropdown() : openDropdwonPopover()
          }
        >
          Governance
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id="gDropdown"
          ref={govDropdownRef}
          className={`${
            showDropdown ? "block" : "hidden"
          } absolute top-10 left-0 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`}
        >
          <ul className="py-1" aria-labelledby="governanceDropdown">
            <li>
              <NavLink
                to={`${url}${app.auction}`}
                href="##"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Staking (Gov page)
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}${app.auction}`}
                href="##"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                HALO Swap (AMM page)
              </NavLink>
            </li>
          </ul>
        </div>
      </li>
      <li className="mr-4">
        <NavLink
          to={`${site.app}${app.index}`}
          className={`${linkStyles.className} border py-2 px-4 border-angel-blue rounded-full hover:bg-angel-blue hover:text-white active:bg-angel-blue active:text-white`}
        >
          Launch App
        </NavLink>
      </li>
    </ul>
  );
}
