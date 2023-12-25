"use client";

import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const changeTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    theme === "dark" ? setIsSelected(true) : setIsSelected(false);
  }, [theme]);

  return (
    <Switch
      isSelected={isSelected}
      size="sm"
      onValueChange={changeTheme}
      endContent={<Moon />}
      startContent={<Sun />}
    />
  );
};
