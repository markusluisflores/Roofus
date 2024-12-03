/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import PetCard from "@/components/pet-card";
import NavBar from "@/components/nav";
import Image from "next/image";
import { Roboto, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import AdoptionForm from "@/components/form-modal";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function PetInformation({ params }) {
  const [petInformation, setPetInformation] = useState({});
  const [petCarousel, setPetCarousel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // On load, retrieve pet information
  useEffect(() => {
    const retrieveInformation = async () => {
      try {
        setIsLoading(true);
        const { id } = await params;
        console.log(id);
        const response = await fetch(`/api/pets/${id}`);

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        console.log(data);

        setPetInformation(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    retrieveInformation();
  }, []);

  //On load, retrieve random pets for carousel
  useEffect(() => {
    const retrieveCarouselEntries = async () => {
      try {
        const response = await fetch("/api/pets/carousel");

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();

        setPetCarousel(data);
      } catch (error) {
        console.log(error);
      }
    };

    retrieveCarouselEntries();
  }, []);

  // Create cards from retrieved carousel entries. URL leads to their /[id] page.
  const availablePets = petCarousel.map((pet, index) => {
    const petUrl = `/pets-for-adoption/${pet.id}`;
    return <PetCard key={index} pet={pet} url={petUrl} />;
  });

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
    console.log(showForm);
  };

  return (
    <main>
      {showForm && (
        <div
          className="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-gray-950/70"
          onClick={handleShowForm}
        >
          <div onClick={(event) => event.stopPropagation()}>
            <AdoptionForm />
          </div>
        </div>
      )}
      <NavBar currentPage="Pets For Adoption" />
      {isLoading ? (
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
      ) : (
        <div className="flex flex-col items-center h-screen w-screen pt-14">
          <div className="flex flex-col w-[1200px]">
            <p
              className={`${roboto.className} text-gray-800 text-4xl font-bold pt-14 pb-8 underline underline-offset-4`}
            >
              Meet Our Awesome Pet
            </p>
            <div className="flex mb-5">
              <div className="mr-5 h-[600px] w-[600px]">
                {petInformation ? (
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={petInformation.img}
                    alt="Pet Image"
                  />
                ) : (
                  <p>No image Available</p>
                )}
              </div>
              {/* Right box */}
              <div
                className={`${roboto.className} flex flex-col justify-between w-[590px] text-lg rounded-xl p-8 bg-brandRed text-brandWhite`}
              >
                {/* Section 1 */}
                <div className="flex w-full justify-between align-middle items-center">
                  <p className="font-semibold text-4xl mb-5">
                    {petInformation.name}
                  </p>
                  {/* Badges */}
                  <div>
                    {petInformation.location === "Foster Care" ? (
                      <div className="py-1 px-2 rounded-lg text-sm font-semibold text-brandRed bg-brandWhite">
                        In Foster Care
                      </div>
                    ) : null}
                  </div>
                </div>
                {/* Section 2 - Pet Information */}
                <div>
                  <p>Location: {petInformation.location}</p>
                  <p>Breed: {petInformation.breed}</p>
                  <p>Age: {petInformation.age}</p>
                  <p>Sex: {petInformation.sex}</p>
                  <p className="mt-5 font-extrabold">
                    Hey there, my name is {petInformation.name}!
                  </p>
                  <p className="mb-5">{petInformation.description}</p>
                </div>
                {/* Section 3 - Additional Details */}
                {petInformation.location === "Foster Care" ? (
                  <p className="mb-5">
                    Since {petInformation.name} is in foster care, kindly us a
                    message for further details!
                  </p>
                ) : null}
                <button
                  className="bg-brandWhite text-brandRed font-bold rounded-2xl py-2"
                  onClick={handleShowForm}
                >
                  FILL OUT ADOPTION FORM
                </button>
              </div>
            </div>
            {/* Carousel section */}
            <p
              className={`${roboto.className} text-gray-800 text-4xl font-bold py-8 underline underline-offset-4`}
            >
              More Loveable Animals
            </p>
            <div className="flex overflow-x-auto gap-x-4 w-full pb-5 mb-16 scrollbar-thin">
              {availablePets}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
