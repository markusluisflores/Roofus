/* eslint-disable @next/next/no-img-element */
"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import PetCard from "@/components/pet-card";
import NavBar from "@/components/nav";
import Image from "next/image";
import { Roboto, Lato } from "next/font/google";
import { useEffect, useState } from "react";
import AdoptionForm from "@/components/form-modal";
import { useUserAuth } from "@/_utils/auth-context";

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
  const [petId, setPetId] = useState("");
  const [hasForm, setHasForm] = useState("");

  const { user } = useUserAuth();

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
        setPetId(id);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    retrieveInformation();
  }, []);

  // Checks if user already has submitted an adoption form
  useEffect(() => {
    const checkHasForm = async () => {
      try {
        const response = await fetch('/api/forms');
        const data = await response.json();
        const { id } = await params;

        if (response.ok) {
          const matchedItem = data.find((form) => {
            return (form.userEmail === user.email && form.petId === id)
          });

          if (matchedItem) {
            setHasForm("Yes");
          }
          else {
            setHasForm("No");
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (user) {
      checkHasForm();
    }
  }, [user, showForm])

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
      {
        showForm && (
          <AdoptionForm
            onClose={handleShowForm}
            petId={petId}
            petName={petInformation.name}
            formType={"Add"}
          />

        )
      }
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
        <div className="flex flex-col items-center h-screen w-screen">
          <div className="flex flex-col items-center w-5/6 max-w-[1920px]">
            <p
              className={`${roboto.className} text-gray-800 text-4xl max-w-[1200px] text-center md:text-left font-bold pt-8 pb-4 underline underline-offset-4`}
            >
              Meet Our Pet
            </p>
            <div className="flex flex-col xl:flex-row gap-4 p-4 h-auto">
              <div className="h-full w-full max-w-[1200px] max-h-[540px]">
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
                className={`${roboto.className} flex flex-col justify-between w-full h-auto max-w-[1200px]  text-lg rounded-xl p-8 bg-brandRed text-brandWhite`}
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
                {user ? (
                  <>
                    {
                      hasForm === 'Yes' &&
                      <div className="text-center font-semibold text-xl">
                        Visit Dashboard to view submitted Adoption Form
                      </div>
                    }
                    {
                      hasForm === 'No' &&
                      <button
                        className="bg-brandWhite text-brandRed font-bold rounded-2xl py-2"
                        onClick={handleShowForm}
                      >
                        FILL OUT ADOPTION FORM
                      </button>
                    }
                  </>

                ) : (
                  <div className="text-center font-semibold text-xl">
                    Login to fill out an Adoption form
                  </div>
                )
                }

              </div>
            </div>
            {/* Carousel section */}
            <p
              className={`${roboto.className} text-gray-800 text-4xl text-center md:text-left font-bold py-8 underline underline-offset-4`}
            >
              Our Loveable Animals
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
