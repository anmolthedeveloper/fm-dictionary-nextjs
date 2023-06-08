"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Meanings from "./Meanings";
export default function Search() {
  // https://api.dictionaryapi.dev/api/v2/entries/en/keyboard
  const inputElement = useRef<HTMLInputElement>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [isAudioHovered, setIsAudioHovered] = useState(false);

  const handleAudioEnterHover = () => {
    setIsAudioHovered(true);
  };

  const handleAudioLeaveHover = () => {
    setIsAudioHovered(false);
  };

  var audio: any | null;

  const handleButtonClick = (searchTerm: any) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
      .then((response) => {
        const json: any = response.json();
        if (response.status == 404) {
          setError(true);
          return json;
        }
        setError(false);

        return json;
      })
      .then((json) => {
        setResult(json);
      })
      .catch((err) => {
        setResult(err);
      });
  };

  useEffect(() => {
    const element = inputElement.current;
    if (!element) return;

    element.addEventListener("focusout", (event) => {
      setIsEmpty(false);
    });
    element.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        setResult(null);
        setError(false);
        if ((event.target as HTMLInputElement).value === "") setIsEmpty(true);
        else {
          (event.target as HTMLInputElement).blur();
          setIsEmpty(false);
          if (!(event.target as HTMLInputElement).value.trim()) {
            setIsEmpty(true);
            (event.target as HTMLInputElement).value = "";
          } else {
            handleButtonClick((event.target as HTMLInputElement).value);
          }
        }
      }
    });
  }, []);

  // Below condition is good for setting setError to false but the setResult null not working!
  if (searchTxt == "" && result) {
    setResult(null);
  }
  if (searchTxt == "" && error) {
    setError(false);
  }

  return (
    <div>
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="relative w-full">
          <input
            type="text"
            className={`bg-lightGrayCustom bg-opacity-50 text-gray-900 text-lg rounded-lg ${
              isEmpty ? "ring-red-500" : "focus:ring-purpleCustom"
            }  focus:outline-none focus:ring-1 block w-full p-5  dark:bg-darkBlackCustom dark:placeholder-gray-400 dark:text-white caret-purpleCustom font-bold`}
            placeholder="Search for any word..."
            ref={inputElement}
            onChange={(e) => {
              setIsEmpty(false);
              setSearchTxt(e.target!.value);
            }}
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Image
              alt="search icon"
              width={1000}
              height={1000}
              src={"./images/icon-search.svg"}
              className="w-5 h-5 select-none z-100"
            />
          </div>
        </div>
      </form>
      <p className={`text-red-500 ${isEmpty ? "block" : "hidden"}`}>
        Whoops, can’t be empty…
      </p>
      {/* <p>ERROR: {error ? "true" : "false"}</p>
      <p>RESULT: {result ? "true" : "false"}</p> */}
      {error ? (
        <div className="flex flex-col justify-center items-center mt-28">
          <Image
            alt="search icon"
            width={1000}
            height={1000}
            src={"./images/sad-face.png"}
            className="w-20 h-20 select-none"
          />
          <p className="mt-10 text-lg font-bold">{result?.title}</p>
          <p className="mt-10 text-grayCustom text-center">
            {result?.message} {result?.resolution}
          </p>
        </div>
      ) : result && !error ? (
        <div className="mb-10">
          <div className="flex mt-10 justify-between items-center">
            <div className="flex flex-col">
              <p className="text-6xl font-bold">{result[0].word}</p>
              <p className="text-purpleCustom text-xl mt-4">
                {result[0].phonetic}
              </p>
            </div>
            <Image
              alt="Play sound"
              onMouseEnter={handleAudioEnterHover}
              onMouseLeave={handleAudioLeaveHover}
              onClick={async () => {
                let audioUrl = result[0].phonetics.filter((phonetic: any) => {
                  if (phonetic.audio && phonetic.audio.length > 0) {
                    return phonetic.audio;
                  }
                });
                if (audioUrl[0]?.audio) {
                  let audio = new Audio(audioUrl[0].audio);
                  if (audio) {
                    audio.play();
                    setIsAudioHovered(true);
                    audio.addEventListener("ended", () => {
                      setIsAudioHovered(false);
                    });
                  }
                }
              }}
              width={1000}
              height={1000}
              src={
                isAudioHovered
                  ? "./images/icon-play-hover.svg"
                  : "./images/icon-play.svg"
              }
              className="w-20 h-20 select-none"
            />
          </div>
          <div>
            <Meanings meanings={result[0].meanings} />
            <div className="flex flex-col w-inherit">
              <hr className="w-full border-line my-5 dark:border-darkGrayCustom" />
              <a href={result[0].sourceUrls} target="_blank">
                <div className="flex items-center">
                  <p className="text-grayCustom">
                    Source
                    <span className="ml-3 sm:ml-10 dark:text-white text-black underline-offset-2 hover:underline decoration-grayCustom text-ellipsis">
                      {result[0].sourceUrls[0]}
                    </span>
                  </p>
                  <Image
                    alt="external link icon"
                    width={1000}
                    height={1000}
                    src={"./images/icon-new-window.svg"}
                    className="w-4 h-4 ml-2"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
