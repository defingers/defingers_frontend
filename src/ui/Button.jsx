
const colorClasses = {
  orange: "bg-orange-400 hover:bg-orange-600 text-white p-4",
  yellow: "bg-yellow-400 hover:bg-yellow-500 text-black",
  gray: "bg-gray-200 hover:bg-gray-300 text-black",
  light: "bg-yellow-300 hover:bg-yellow-400 text-white",
  default: "bg-gray-100 hover:bg-gray-200 text-black",
  white: "bg-white hover:bg-gray-100 text-black",
};

export default function Button({
  children,
  color = "default",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-6 py-2 rounded-lg cursor-pointer font-semibold shadow-md transition ${
        colorClasses[color] || colorClasses.default
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
