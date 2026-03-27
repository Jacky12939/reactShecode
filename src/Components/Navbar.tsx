import { useState } from "react";

type NavbarProps = {
  links: string[];
  onLinkClick: (link: string) => void; // callback pour changer la "page"
};

export const Navbar = ({ links, onLinkClick }: NavbarProps) => {
  const [activeLink, setActiveLink] = useState<string>("Accueil");

  const handleClick = (link: string) => {
    setActiveLink(link);
    onLinkClick(link); // met à jour le composant affiché
  };

  return (
    <nav className="bg-pink-200 flex justify-center shadow-md p-4">
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => handleClick(link)}
              className={`px-3 py-2 rounded ${
                activeLink === link
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              } transition`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};