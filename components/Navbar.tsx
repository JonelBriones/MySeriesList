import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between place-items-center h-full py-16">
      <div className="flex flex-col gap-8 place-items-center">
        <Image
          src={"/images/logo.svg"}
          alt=""
          width={32}
          height={25.6}
          className="pb-8"
        />
        <Image
          src={"/images/icon-nav-home.svg"}
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/images/icon-nav-movies.svg"}
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/images/icon-nav-tv-series.svg"}
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/images/icon-nav-bookmark.svg"}
          alt=""
          width={20}
          height={20}
        />
      </div>
      <Image src={"/images/image-avatar.png"} alt="" width={40} height={40} />
    </div>
  );
};

export default Navbar;
