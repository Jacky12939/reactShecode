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
    <div>
      <button onClick={toggle}>
        {visible ? "Cacher" : "Afficher"}
      </button>

      {visible && <p>{text}</p>}
    </div>
  );
};

export default Toggle;