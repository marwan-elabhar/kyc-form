import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        VOIS
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}
