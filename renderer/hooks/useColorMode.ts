import { useEffect, useState } from "react";

type ColorMode = "light" | "dark";
export const themeKey = "panda-theme-pref";

export const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null);

  useEffect(() => {
    setColorMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const setter = (c: ColorMode) => {
    setColorMode(c);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(c);

    try {
      localStorage.setItem(themeKey, c);
    } catch (e) {
      throw new Error("localStorage is not available");
    }
  };

  const toggle = () => {
    if (colorMode === "dark") {
      setter("light");
    } else {
      setter("dark");
    }
  };

  return {
    colorMode,
    toggle,
  };
};
