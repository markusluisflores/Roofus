/* eslint-disable @next/next/no-img-element */
"use client";

import Login from "@/components/login";
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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [pets, setPets] = useState([]);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

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
    story: "Tater Tot the kitten has captured the heart of millions of online fans. Although he has unfortunately passed away, he left behind a legacy of bravery and internet fame. Because he was so well-loved, many beautiful pieces of artwork have been made of him to keep his memory alive. Tater Tot will forever be in our hearts. <3",
  };

  const featuredPets = pets.map((pet, index) => {
    const petUrl = `/pets-for-adoption/${pet.id}`;
      return <PetCard key={index} pet={pet} url={petUrl} />;
  });

  return (
    <main>
      <NavBar openLoginModal={openLogin} />
      {isLoginOpen && <Login closeLoginModal={closeLogin} />}

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

      <section className="py-12 bg-gray-100">
        <div className="bg-brandRed justify-center items-center mx-72 py-10">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Pet of the Month: {petOfTheMonth.name}
          </h2>
          <div className="flex justify-center items-center space-x-8 px-4">
            <div className="w-80 h-80 overflow-hidden rounded-lg shadow-md border-4 border-white p-2 bg-gray-200">
              <img
                src={petOfTheMonth.img}
                alt="Pet of the Month"
                className="w-full h-full"
              />
            </div>
            <div className="max-w-xl text-lg text-white">
              <hr className="mb-10"></hr>
              <p>{petOfTheMonth.story}</p>
              <hr className="mt-10"></hr>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-black"></hr>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-black m-5 mb-8">
          Featured Pets
        </h2>
        <div className="flex overflow-x-auto gap-x-4 w-full">
          {featuredPets}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl text-black font-bold m-5 mb-8">
          Adoption Stories
        </h2>
        <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
          {adoptionStories.map((story, index) => (
            <AdoptionStoryCard key={index} story={story} />
          ))}
        </div>
      </section>
    </main>
  );
}
