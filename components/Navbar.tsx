import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center py-8 h-screen w-[100px]">
      <div className="w-fit p-6 h-full flex flex-col justify-between place-items-center    bg-dark-gray-blue rounded-2xl">
        <div className="flex flex-col gap-8 place-items-center bg-dark-gray-blue">
          <Link href={"/"} className="mb-8">
            <Image src={"/images/logo.svg"} alt="" width={32} height={25.6} />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/icon-nav-home.svg"}
              alt=""
              width={20}
              height={20}
            />
          </Link>
          <Link href={"/movies"}>
            <Image
              src={"/images/icon-nav-movies.svg"}
              alt=""
              width={20}
              height={20}
            />
          </Link>
          <Link href={"/series"}>
            <Image
              src={"/images/icon-nav-tv-series.svg"}
              alt=""
              width={20}
              height={20}
            />
          </Link>
          <Link href={"/bookmarked"}>
            <Image
              src={"/images/icon-nav-bookmark.svg"}
              alt=""
              width={20}
              height={20}
            />
          </Link>
        </div>
        <Link href={"/profile"}>
          <Image
            src={"/images/image-avatar.png"}
            alt=""
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
