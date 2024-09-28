"use client";
import Container from "@/components/Container";
import React, { useState } from "react";
import data from "@/utils/data.json";
import SearchBar from "@/components/SearchBar";

const page = () => {
  const [search, setSearch] = useState("");
  const movies = data.filter((movie) => movie.category == "Movie");
  let searchResultCount = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="my-2">
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholder={"Search for movies"}
      />
      <h1 className="text-hl my-2">
        {search
          ? `Found ${searchResultCount.length} results for '${search}'`
          : "Movies"}
      </h1>
      <Container category={movies} search={search} />
    </div>
  );
};

export default page;
