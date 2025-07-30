import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext.js";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    return setThemeMode("dark");
  };

  const lightMode = () => {
    return setThemeMode("light");
  };

  // change theme

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-all">
        <h1 className="text-black dark:text-white text-3xl">
          Theme: {themeMode}
        </h1>
      </div>

      <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
        <div className="p-4">
          <p className="text-black dark:text-amber-400">
            This text should be black in light mode and white in dark mode.
          </p>
        </div>

        <label className="inline-flex items-center cursor-pointer" />
        <input
          type="checkbox"
          className="sr-only peer"
          checked={themeMode === "dark"}
          onChange={(e) => setThemeMode(e.target.checked ? "dark" : "light")}
        />

        <h1 className="text-black dark:text-amber-400 text-2xl">
          Hii I am Your Buddy you use this theme :- {themeMode}
        </h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
