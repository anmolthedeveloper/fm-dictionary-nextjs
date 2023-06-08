import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import Toggle from "./Toggle";
import FontText from "./FontText";
import { Inter, Inconsolata, Lora } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
interface Prop {
  onClick: MouseEventHandler<HTMLDivElement>;
  checked: boolean | undefined;
  fontIndex: number;
  fontIndexChangeHandler: Function;
  isMenuOpened: boolean;
  fontChangeHandler: MouseEventHandler<HTMLDivElement>;
}
export default function Header({
  checked,
  onClick,
  fontIndex,
  fontIndexChangeHandler,
  isMenuOpened,
  fontChangeHandler,
}: Prop) {
  return (
    <div className="flex justify-between text-black items-center">
      <div>
        <Image
          height={1000}
          width={1000}
          alt="dictionary icon"
          src={"./images/logo.svg"}
          className="w-8"
        />
      </div>
      <div className="flex justify-center items-center">
        <div
          className="flex justify-end items-center relative w-36"
          onClick={fontChangeHandler}
        >
          <p className="mr-3 dark:text-white">{`${
            fontIndex == 1 ? "Sans Serif" : fontIndex == 2 ? "Serif" : "Mono"
          }`}</p>
          <Image
            height={1000}
            width={1000}
            alt="bottom arrow"
            src={"./images/icon-arrow-down.svg"}
            className="w-3"
          />
          <div
            className={`
              absolute rounded-xl bottom-[-8.5rem] left-0 z-20 p-3 w-36  bg-white dark:bg-darkBlackCustom shadow-lg dark:shadow-purpleCustom ${
                isMenuOpened ? "" : "hidden"
              }
            `}
          >
            <FontText
              className={`p-1 dark:text-white ${inter.className}`}
              index={1}
              fontName={"Sans Serif"}
              active={fontIndex == 1}
              onClick={fontIndexChangeHandler}
            />

            <FontText
              className={`p-1 dark:text-white ${lora.className}`}
              index={2}
              fontName={"Serif"}
              active={fontIndex == 2}
              onClick={fontIndexChangeHandler}
            />

            <FontText
              className={`p-1 dark:text-white ${inconsolata.className}`}
              index={3}
              fontName={"Mono"}
              active={fontIndex == 3}
              onClick={fontIndexChangeHandler}
            />
          </div>
        </div>
        <hr className="w-[0.01rem] h-8 my-8 bg-gray-300 dark:bg-white border-0 mx-5"></hr>
        <div>
          {/* <!-- toggle --> */}
          <Toggle onClick={onClick} checked={checked} className="mr-5" />
        </div>
        <Image
          height={1000}
          width={1000}
          alt="dark light mode switch icon"
          src={`${
            checked ? "./images/icon-moon-purple.svg" : "./images/icon-moon.svg"
          }`}
          className="w-5"
        />
      </div>
    </div>
  );
}
