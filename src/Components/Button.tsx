type ButtonProps = {
  message: string;
};

const Button = ({ message }: ButtonProps) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button
      onClick={handleClick}
      className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Vous avez des questions?
    </button>
  );
};

export default Button;