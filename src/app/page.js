/* eslint-disable @next/next/no-img-element */
"use client";

import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";
import AdoptionStoryCard from "@/components/story-card";
import { adoptionStories, sampleObjectArray } from "@/sample";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [pets, setPets] = useState([]);

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
      }
    };

    retrievePets();
  }, []);

  const petOfTheMonth = {
    name: "Tater Tot",
    img: "https://www.catreporter.com/wp-content/uploads/2023/07/0.jpg",
    story:
      "Tater Tot the kitten has captured the heart of millions of online fans. Although he has unfortunately passed away, he left behind a legacy of bravery and internet fame. Because he was so well-loved, many beautiful pieces of artwork have been made of him to keep his memory alive. Tater Tot will forever be in our hearts. <3",
  };

  const featuredPets = pets.map((pet, index) => {
    const petUrl = `/pets-for-adoption/${pet.id}`;
    return <PetCard key={index} pet={pet} url={petUrl} />;
  });

  return (
    <main>
      <NavBar />

      <section
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://www.multipet.com/media/can-dogs-play-with-cat-toys1.png)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <img
            src="/assets/logo/roofus_logo_white.png"
            alt="Logo"
            width={300}
            height={3000}
          />
          <h1 className="text-5xl font-bold mb-4">Find Your Furever Friend</h1>
          <p className="text-xl mb-8">
            Start your adoption journey now by opening your home to a new furry
            family member.
          </p>
        </div>
      </section>

      <section className="flex flex-1  justify-center items-center w-screen">
        <section className="flex flex-col gap-16 align-middle justify-center w-5/6 mt-12">
          <section className=" bg-brandWhite">
            <div className="flex flex-col xl:flex-row gap-4 p-4 h-auto w-full justify-center items-center">
              <div className="w-80 h-80 overflow-hidden rounded-lg shadow-md">
                <img
                  src={petOfTheMonth.img}
                  alt="Pet of the Month"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                  Pet Of The Month: {petOfTheMonth.name}
                </h2>
                <div className="max-w-xl text-lg px-4 text-gray-800">
                  <p>{petOfTheMonth.story}</p>
                </div>
              </div>
            </div>
          </section>
          <hr className="border-black" />
          <section className="bg-brandWhite">
            <h2
              className={`${roboto.className} text-4xl text-gray-800 font-bold mb-8 underline underline-offset-4`}
            >
              Featured Pets
            </h2>
            <div className="flex overflow-x-auto gap-x-4 w-full pb-4 px-4 scrollbar-thin">
              {featuredPets}
            </div>
          </section>

          <section className="bg-brandWhite pb-12">
            <h2
              className={`${roboto.className} text-4xl text-gray-800 font-bold mb-8 underline underline-offset-4`}
            >
              Adoption Stories
            </h2>
            <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-thin">
              {adoptionStories.map((story, index) => (
                <AdoptionStoryCard key={index} story={story} />
              ))}
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
