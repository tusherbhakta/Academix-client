import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // Using Lucide Icons (You can replace them)

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {theme === "light" ? <Moon className="w-6 h-6 text-gray-800" /> : <Sun className="w-6 h-6 text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;
