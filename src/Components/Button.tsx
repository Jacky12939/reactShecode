type ButtonProps = {
  message: string;
};

const Button = ({ message }: ButtonProps) => {
  const handleClick = () => {
    alert(message);
  };

  return (
    <div className=" bg-gray-800 flex items-start justify-center min-h-screen ">
      <button
      onClick={handleClick}
      className="text-center bg-blue-500 text-white px-4 py-2 mt-10 rounded hover:bg-blue-600 transition"
    >
      Vous avez des questions?
    </button>
    </div>
  );
};

export default Button;