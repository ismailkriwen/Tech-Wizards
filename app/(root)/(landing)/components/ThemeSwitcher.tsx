"use client";

import { Switch } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const changeTheme = () =>
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");

  useEffect(() => {
    resolvedTheme === "dark" ? setIsSelected(true) : setIsSelected(false);
  }, [resolvedTheme]);

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
