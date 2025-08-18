"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function SearchInput() {
  const placeholders = [
    "Search rentals by location",
    "Reserve your next home now!!!",
    "Easy and simple reservations",
    "List your property with us",
    "Search rentals by location",
  ];

  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === "") return;
    router.push(`/properties?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}