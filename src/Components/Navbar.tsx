
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
type NavItem = {
  name: string;
  path: string;
};

type NavbarProps = {
  links: NavItem[];
};

export const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="bg-pink-200 flex justify-center shadow-md p-4">
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }: NavLinkRenderProps) =>
                `px-3 py-2 rounded transition font-medium ${
                  isActive
                    ? "bg-blue-500 text-white shadow-sm" 
                    : "text-gray-700 hover:bg-pink-300"  
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};





