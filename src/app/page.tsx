"use client";
import Header from "@/components/Header";
import Search from "@/components/Search";
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

  return (
    <div className="mx-5 sm:mx-20 lg:mx-32 xl:mx-96 sm:mt-5 lg:mt-10">
      <Header checked={checked} onClick={clickHandler} />
      <Search />
    </div>
  );
}
