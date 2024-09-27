"use client";

import Image from "next/image";
import data from "@/utils/data.json";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
export default function Home() {
  let trending = data.filter((trending) => trending.isTrending == true);
  let recommended = data.filter((trending) => trending.isTrending != true);
  const [imgHover, setImgHover] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="my-2">
      <SearchBar search={search} setSearch={setSearch} />
      <h1 className="text-hl my-2">Trending</h1>
      <div className="my-4 flex gap-8 overflow-x-auto overflow-hidden hover:overscroll-y-none scrollbar-hide ">
        {trending.map((trending: any, idx) => (
          <div
            className="relative w-fit flex-shrink-0 "
            key={idx}
            onMouseEnter={() => setImgHover(trending.title)}
            onMouseLeave={() => setImgHover("")}
          >
            <div className="relative">
              <Image
                src={trending.thumbnail.trending.large}
                height={0}
                width={0}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className={`rounded-md w-[470px] h-[230px]  ${
                  trending.title == imgHover ? "opacity-40" : ""
                } transition-opacity ease-linear`}
                alt={trending.title}
              />
              <button className="absolute top-4 right-4 flex justify-center place-items-center w-[32px] h-[32px] rounded-full  bg-off-gray-blue hover:bg-white z-10 ">
                <Image
                  src={`/images/icon-bookmark-${
                    trending.isBookmarked ? "full" : "empty"
                  }.svg`}
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{
                    stroke: "#000",
                  }}
                  alt="bookmark"
                  className="hover:dark:invert w-full h-full p-2"
                />
              </button>
              <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center place-items-center">
                <Link
                  href={`/${trending.category.toLowerCase()}/${trending.title
                    .replaceAll(" ", "")
                    .toLowerCase()}`}
                  className={`flex justify-evenly place-items-center w-[117px] h-[48px] rounded-full bg-white bg-opacity-25 opacity-0 cursor-pointer ${
                    trending.title == imgHover ? "opacity-100" : ""
                  } transition-opacity ease-linear `}
                >
                  <Image
                    src={"/images/icon-play.svg"}
                    height={30}
                    width={30}
                    alt="icon-play"
                  />
                  <span className="text-xs">Play</span>
                </Link>
              </div>
            </div>
            <div
              className={`absolute bottom-0 left-0 flex flex-col p-6 ${
                trending.title == imgHover ? "" : "opacity-0"
              } transition-opacity ease-linear`}
            >
              <div className="flex gap-2 place-items-center opacity-70">
                <span className="text-sm ">{trending.year}</span>
                <span className="opacity-70">•</span>
                <span className="flex gap-2 place-items-center">
                  <Image
                    src={
                      trending.category == "Movie"
                        ? "/images/icon-category-movie.svg"
                        : "/images/icon-category-tv.svg"
                    }
                    height={12}
                    width={12}
                    alt="movie"
                  />
                  <span className="text-sm">{trending.category}</span>
                </span>
                <span className="opacity-70">•</span>
                <span className="text-sm">{trending.rating}</span>
              </div>
              <h1 className="text-hs">{trending.title}</h1>
            </div>
          </div>
        ))}
      </div>
      {/* RECOMMENDED  */}
      <div className="mt-4">
        <h1 className="text-hl">{search ? search : "Recommended"}</h1>
        <div className="w-fit flex flex-wrap gap-4 md:gap-x-10">
          {recommended.map((recommend: any, idx) => (
            <div
              className="w-fit flex-shrink-0"
              key={idx}
              onMouseEnter={() => setImgHover(recommend.title)}
              onMouseLeave={() => setImgHover("")}
            >
              <div className="relative">
                <Image
                  src={recommend.thumbnail.regular.large}
                  height={0}
                  width={0}
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                  className={`rounded-md w-[470px] h-[230px] sm:w-[220px] sm:h-[140px] md:w-[280px] md:h-[174px] ${
                    recommend.title == imgHover ? "opacity-40" : ""
                  } transition-opacity ease-linear`}
                  alt={recommend.title}
                />

                <button className="absolute top-4 right-4 flex justify-center place-items-center w-[32px] h-[32px] rounded-full  bg-off-gray-blue hover:bg-white z-10 ">
                  <Image
                    src={`/images/icon-bookmark-${
                      recommend.isBookmarked ? "full" : "empty"
                    }.svg`}
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{
                      stroke: "#000",
                    }}
                    alt="bookmark"
                    className="hover:dark:invert w-full h-full p-2"
                  />
                </button>

                <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center place-items-center">
                  <Link
                    href={`/${recommend.category.toLowerCase()}/${recommend.title
                      .replaceAll(" ", "")
                      .toLowerCase()}`}
                    className={`flex justify-evenly place-items-center w-[117px] h-[48px] rounded-full bg-white bg-opacity-25 opacity-0 ${
                      recommend.title == imgHover ? "opacity-100" : ""
                    } transition-opacity ease-linear`}
                  >
                    <Image
                      src={"/images/icon-play.svg"}
                      height={30}
                      width={30}
                      alt="icon-play"
                    />
                    <span className="text-xs">Play</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col py-1">
                <div className="flex gap-2 place-items-center">
                  <span className="text-bs opacity-70">{recommend.year}</span>
                  <span className="opacity-70">•</span>
                  <span className="flex gap-2 place-items-center">
                    <Image
                      src={
                        recommend.category == "Movie"
                          ? "/images/icon-category-movie.svg"
                          : "/images/icon-category-tv.svg"
                      }
                      height={12}
                      width={12}
                      alt="movie"
                    />
                    <span className="text-bs opacity-70">
                      {recommend.category}
                    </span>
                  </span>
                  <span className="opacity-70">•</span>
                  <span className="text-bs opacity-70">{recommend.rating}</span>
                </div>
                <h1 className="text-xs">{recommend.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
