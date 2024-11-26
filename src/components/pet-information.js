import Image from "next/image";
import { Roboto, Lato } from "next/font/google";
import PetCard from "./pet-card";
import { sampleObjectArray } from "@/sample";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function PetInformation() {
  const sampleObject = {
    name: "Roofus",
    location: "Foster Care",
    breed: "Corgi",
    age: 6,
    sex: "Male",
    size: "Small",
    type: "Cat",
    description: "ROOFUS IS BEST DOG",
    img: "https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg",
  };

  const availablePets = sampleObjectArray.map((pet, index) => {
    const petUrl = `/pets-for-adoption/${pet.name}`;
    return (
      <div key={index} className="min-w-fit">
        <PetCard pet={pet} url={petUrl} />
      </div>
    );
  });

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col w-screen items-center h-screen pt-14">
      <div className="flex flex-col w-[1200px]">
        <p
          className={`${lato.className} text-gray-800 text-5xl font-extrabold py-8`}
        >
          MEET OUR WONDERFUL PET
        </p>
        <div className="flex mb-5">
          <div className="mr-5">
            <Image
              className="rounded-xl"
              src="https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg"
              width={600}
              height={600}
              alt="Pet Image"
            />
          </div>
          {/* Right box */}
          <div
            className={`${roboto.className} flex flex-col justify-between h-full w-[590px] text-lg rounded-xl p-5 bg-brandRed text-brandWhite`}
          >
            {/* Section 1 */}
            <div className="flex w-full justify-between items-center">
              <p className="font-semibold text-4xl">
                {sampleObject.name.toUpperCase()}
              </p>
              {/* Badges */}
              <div>
                {sampleObject.location === "Foster Care" ? (
                  <div className="py-1 px-2 m-2 rounded-lg text-sm font-semibold text-brandRed bg-brandWhite">
                    In Foster Care
                  </div>
                ) : null}
              </div>
            </div>
            {/* Section 2 - Pet Information */}
            <div>
              <p>Location: {sampleObject.location.toUpperCase()}</p>
              <p>Breed: {sampleObject.breed.toUpperCase()}</p>
              <p>Age: {sampleObject.age}</p>
              <p>Sex: {sampleObject.sex.toUpperCase()}</p>
              <p className="mt-5 font-extrabold">
                Hey there, my name is {sampleObject.name}!
              </p>
              <p className="">{sampleObject.description}</p>
            </div>
            {/* Section 3 - Additional Details */}
            <p>
              Since {sampleObject.name} is in foster care, kindly us a message
              for further details!
            </p>
            <button onClick={openModal} className="bg-brandWhite text-brandRed font-bold rounded-2xl py-2">FILL OUT ADOPTION FORM</button>
          </div>
        </div>
        <p className={`${lato.className} text-gray-800 text-5xl font-extrabold py-8`}>
          MORE AVAILABLE ANIMALS
        </p>
        <div className="flex overflow-x-auto gap-x-4 w-full">
          {availablePets}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 relative w-200 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              X
            </button>
            <AdoptionForm onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}
