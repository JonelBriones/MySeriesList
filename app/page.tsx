"use client";

import Image from "next/image";
import data from "@/utils/data.json";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Container from "@/components/Container";
export default function Home() {
  let trending = data.filter((trending) => trending.isTrending == true);
  let recommended = data.filter((recommend) => recommend.isTrending != true);
  const [imgHover, setImgHover] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div className="my-2">
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder={"Search for movies or TV series"}
      />
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
                  href={`/${trending.category
                    .toLowerCase()
                    .replaceAll(" ", "")}/${trending.title
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
      <Container category={recommended} search={search} />
    </div>
  );
}
