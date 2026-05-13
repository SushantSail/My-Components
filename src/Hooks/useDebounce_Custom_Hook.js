import React, { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

export default function App() {
  const [search, setSearch] = useState("");
  
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("API Call:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Typing: {search}</p>
      <p>Debounced: {debouncedSearch}</p>
    </div>
  );
}


//useDebounce.js
import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;