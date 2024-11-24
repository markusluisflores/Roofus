"use client";

import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";
import { sampleObjectArray } from "@/sample";
import { useEffect, useState } from "react";

export default function PetsForAdoption() {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState("All");

  // Retrieve all pets
  useEffect(() => {
    const retrievePets = async () => {
      try {
        const response = await fetch("api/pets");

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = response.json();

        setPets(data);
      } catch (error) {
        console.log(error);
      }
    };

    retrievePets();
  }, []);

  // Create cards from retrieved pets. URL leads to their /[id] page.
  const petCards = pets.map((pet, index) => {
    const petUrl = `/pets-for-adoption/${pet.id}`;
    if (filter === pet.type || filter === "All") {
      return <PetCard key={index} pet={pet} url={petUrl} />;
    }
  });

  return (
    <main>
      <NavBar currentPage="Pets For Adoption" />
      {/* Task: Create a filter that changes filter state depending on cat/dog/all. Any implementation of filter is fine. */}
      {/* Cards Body */}
      <div className="flex justify-center gap-x-4 gap-y-4 pt-16">
        {petCards}
      </div>
    </main>
  );
}
