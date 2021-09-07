import { useHeaderColors } from "contexts/HeaderColorProvider";
import { NavLink } from "react-router-dom";
import { routes } from "types/types";

const NavMenu = () => {
  const { textColor } = useHeaderColors();
  const linkStyles = {
    className: `uppercase ${textColor}`,
    activeClassName: "font-bold",
  };

  return (
    <ul
      className={`${textColor} justify-self-end flex font-body text-base mr-3`}
    >
      <li className="mr-4">
        <NavLink to={routes.tca} {...linkStyles}>
          Donate Now
        </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={routes.dashboard} {...linkStyles}>
          Charities
        </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to={routes.about_unsdgs} {...linkStyles}>
          UNSDGs
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.registration} {...linkStyles}>
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
