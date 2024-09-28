"use client";
import Container from "@/components/Container";
import React, { useState } from "react";
import data from "@/utils/data.json";
import SearchBar from "@/components/SearchBar";

const page = () => {
  const [search, setSearch] = useState("");
  const series = data.filter((movie) => movie.category == "TV Series");
  let searchResultCount = series.filter((serie) =>
    serie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="my-2">
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder={"Search for TV series"}
      />
      <h1 className="text-hl my-2">
        {search
          ? `Found ${searchResultCount.length} results for '${search}'`
          : "TV Series"}
      </h1>
      <Container category={series} search={search} />
    </div>
  );
};

export default page;
