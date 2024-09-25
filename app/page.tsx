"use client";

import Image from "next/image";
import data from "@/utils/data.json";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  let trending = data.filter((trending) => trending.isTrending == true);
  console.log(trending);
  const [imgHover, setImgHover] = useState("");

  return (
    <div className="mt-6">
      <h1 className="text-hl">Trending</h1>

      <div className="py-6 flex gap-8 overflow-x-auto overflow-hidden hover:overscroll-y-none scrollbar-hide ">
        {trending.map((trending: any, idx) => (
          <div
            className="relative w-fit flex-shrink-0 cursor-pointer"
            key={idx}
            onMouseEnter={() => setImgHover(trending.title)}
            onMouseLeave={() => setImgHover("")}
          >
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
            <button className="flex justify-center place-items-center w-[32px] h-[32px] rounded-full absolute top-4 right-4 bg-off-gray-blue">
              <Image
                src={"/images/icon-bookmark-empty.svg"}
                height={11.67}
                width={14}
                alt="bookmark"
              />
            </button>
            <div
              className={`absolute bottom-0 left-0 flex flex-col p-6 ${
                trending.title == imgHover ? "" : "opacity-0"
              } transition-opacity ease-linear`}
            >
              <div className="flex gap-2 place-items-center">
                <span className="text-sm opacity-70">{trending.year}</span>
                <span>•</span>
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
                  <span className="text-sm opacity-70">
                    {trending.category}
                  </span>
                </span>
                <span>•</span>
                <span className="text-sm opacity-70">{trending.rating}</span>
              </div>
              <h1 className="text-hs">{trending.title}</h1>
            </div>
          </div>
        ))}
      </div>

      <Image
        src={"/images/thumbnails/beyond-earth/trending/large.jpg"}
        height={0}
        width={0}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="rounded-md w-[470px] h-[230px]"
        alt={"title"}
      />
      <Image
        src={"/images/thumbnails/beyond-earth/trending/large.jpg"}
        height={0}
        width={0}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="rounded-md w-[470px] h-[230px]"
        alt={"title"}
      />
      <Image
        src={"/images/thumbnails/beyond-earth/trending/large.jpg"}
        height={0}
        width={0}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="rounded-md w-[470px] h-[230px]"
        alt={"title"}
      />
    </div>
  );
}
