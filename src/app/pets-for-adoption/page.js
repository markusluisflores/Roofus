"use client";

import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});


export default function PetsForAdoption() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => setFilter(event.target.value);

  // Retrieve all pets
  useEffect(() => {
    const retrievePets = async () => {
      try {
        setIsLoading(true);
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
    if (filter === pet.type.toLowerCase() || filter === "all") {
      return <PetCard key={index} pet={pet} url={petUrl} />;
    }
  });

  return (
    <main>
      <NavBar currentPage="Pets For Adoption" />

      <div
        className="relative bg-cover bg-center h-[60vh] sm:h-[60vh] md:h-[80vh]"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/047/005/810/non_2x/dogs-and-cats-peeking-over-web-banner-free-photo.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find Your Forever Friend</h1>
          <p className="text-xl mb-8">
            Every one of our animals deserves a loving and caring home. Explore
            now to find the furry friend who will thrive with you.
          </p>
        </div>
      </div>

      {/* Task: Create a filter that changes filter state depending on cat/dog/all. Any implementation of filter is fine. */}
      {/* Cards Body */}
      {!isLoading ? (
        <div>
          <p
            className={`${roboto.className} text-gray-800 text-4xl font-bold pt-20 px-20 underline underline-offset-4`}
          >
            Our Furry Friends
          </p>
          <div className="flex flex-wrap w-screen self-center justify-center mt-8">
            <div className="mb-4 align-middle">
              <label className={`${roboto.className} text-2xl mr-4 w-40 text-black`}>
                Select Pet Type:
              </label>
              <select
                onChange={handleFilterChange}
                className={`${roboto.className} text-black text-xl font-semibold bg-brandWhite px-2 py-1 rounded border border-gray-400`}
              >
                <option value="all">All</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-x-6 gap-y-6 pb-16">
              {petCards}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen w-screen justify-center items-center">
          <Image
            width={250}
            height={250}
            src={"/assets/loading/loading.gif"}
            alt="Loading"
          />
          <p className="text-slate-900 text-3xl font-bold">
            Calling my friends
          </p>
        </div>
      )}
    </main>
  );
}
