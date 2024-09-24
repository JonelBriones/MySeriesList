import Image from "next/image";
import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="flex gap-4 h-full">
        <Image src={"/images/icon-search.svg"} height={32} width={32} alt="" />
        <input
          type="text"
          spellCheck="false"
          placeholder="Search for movies or TV series"
          className="outline-none bg-primary-dark-blue caret-primary-red caret border-b-2 pb-2
border-off-gray-blue"
        />
      </div>
    </div>
  );
};

export default SearchBar;
