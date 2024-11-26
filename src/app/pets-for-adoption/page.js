"use client";

import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";
import { useEffect, useState } from "react";

export default function PetsForAdoption() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // Retrieve all pets
  useEffect(() => {
    const retrievePets = async () => {
      try {
        const response = await fetch("api/pets");

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();

        setPets(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
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
      <div className="flex flex-wrap w-screen self-center justify-center pt-16">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 px-40 py-16">{!isLoading ? petCards : null}</div>
      </div>
    </main>
  );
}
