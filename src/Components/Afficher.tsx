import { useState } from "react";

type ToggleProps = {
  text: string;
};

const Toggle = ({ text }: ToggleProps) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
   <div className="bg-gray-800 min-h-screen flex items-start justify-center">
     <div className="max-w-sm mx-auto my-4 p-4 bg-gray-100 rounded-lg shadow-md text-center">
      <button
        onClick={toggle}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
      >
        {visible ? "Cacher" : "Afficher"}
      </button>

      {visible && (
        <p className="mt-4 text-gray-700 font-medium">
          {text}
        </p>
      )}
    </div>
   </div>
  );
};

export default Toggle;