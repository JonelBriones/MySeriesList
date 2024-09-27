import Image from "next/image";
import React from "react";

const SearchBar = ({ search, setSearch }: any) => {
  return (
    <div className="flex place-items-center gap-2 h-full">
      <div className="size-[32px]">
        <Image
          src={"/images/icon-search.svg"}
          height={24.01}
          width={24.01}
          alt="icon-search"
        />
      </div>
      <input
        type="text"
        spellCheck="false"
        placeholder="Search for movies or TV series"
        className="w-[80dvw] outline-none text-hm bg-primary-dark-blue caret-primary-red caret border-b-2 pb-2
border-off-gray-blue"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
