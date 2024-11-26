"use client";

import Login from "@/components/login";
import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";
import AdoptionStoryCard from "@/components/story-card";
import { sampleObjectArray } from "@/sample";
import { useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  // Dummy info for testing
  const adoptionStories = [
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
    {
      title: "Pet Adoption Story",
      description: "Pet adoption story details blah blah blah",
      img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    },
  ];

  const petOfTheMonth = {
    name: "Pet Name",
    img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
    story: "Pet story yada yada ya",
  };

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
          <h1 className="text-5xl font-bold mb-4">Find Your Forever Friend</h1>
          <p className="text-xl mb-8">
            Start your adoption journey now by opening your home to a new furry
            friend.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Pet of the Month: {petOfTheMonth.name}
        </h2>
        <div className="flex justify-center items-center space-x-8 px-4">
          <div className="w-80 h-80 overflow-hidden rounded-lg shadow-md">
            <img
              src={petOfTheMonth.img}
              alt="Pet of the Month"
              className="w-full h-full"
            />
          </div>
          <div className="max-w-xl text-lg text-black">
            <p>{petOfTheMonth.story}</p>
          </div>
        </div>
      </section>

      <hr className="border-black"></hr>

      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-black m-5 mb-8">
          Featured Pets
        </h2>
        <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
          {sampleObjectArray.map((pet) => (
            <div key={pet.id} className="flex-shrink-0 w-60">
              <PetCard pet={pet} />
            </div>
          ))}
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
