"use client";
import Header from "@/components/Header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [checked, setChecked] = useState(
    currentTheme === "dark" ? true : false
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const clickHandler = () => {
    setChecked(!checked);
    setTheme(!checked ? "dark" : "light");
  };

  console.log("CURRENT THEME: " + currentTheme);
  return (
    <div className="mx-64 ">
      <Header checked={checked} onClick={clickHandler} />
    </div>
  );
}
