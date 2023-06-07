import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import Toggle from "./Toggle";
interface Prop {
  onClick: MouseEventHandler<HTMLDivElement>;
  checked: boolean | undefined;
}
export default function Header({ checked, onClick }: Prop) {
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
        <div className="flex justify-center items-center">
          <p className="mr-3 dark:text-white">Sans Serif</p>
          <Image
            height={1000}
            width={1000}
            alt="bottom arrow"
            src={"./images/icon-arrow-down.svg"}
            className="w-3"
          />
        </div>
        <hr className="w-[0.01rem] h-8 my-8 bg-gray-300 dark:bg-white border-0 mx-5"></hr>
        <div>
          {/* <!-- toggle --> */}
          <Toggle onClick={onClick} checked={checked} className="mr-5" />
        </div>
        <Image
          height={1000}
          width={1000}
          alt="bottom arrow"
          src={`${
            checked ? "./images/icon-moon-purple.svg" : "./images/icon-moon.svg"
          }`}
          className="w-5"
        />
      </div>
    </div>
  );
}
