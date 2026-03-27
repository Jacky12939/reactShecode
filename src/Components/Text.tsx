import { useState } from "react";

type InputProps = {
  label: string;
};

const TextInput = ({ label }: InputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto my-4 p-4 bg-pink-100 rounded-lg shadow-md">
      <label className="block mb-2 text-gray-700 font-medium">{label}</label>
      <input
        value={value}
        onChange={handleChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Tapez quelque chose..."
      />
      <p className="text-gray-600">Tu écris : <span className="font-semibold">{value}</span></p>
    </div>
  );
};

export default TextInput;