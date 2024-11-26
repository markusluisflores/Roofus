import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function PetCard(props) {
  const { pet, url } = props;

  return (
    <Link href={url}>
      <div className="flex flex-col shadow-md bg-brandWhite p-8 rounded-md">
        <div className="flex justify-center w-[420px] h-[420px]">
          <img
            className="rounded-lg border w-full h-full object-cover"
            src={pet.img}
            alt="Pet Image"
          />
        </div>
        <div className={`${roboto.className}`}>
          <p className="text-black text-3xl text-center font-bold my-5">
            {pet.name.toUpperCase()}
          </p>
          <hr className="w-full h-1 border-gray-500 mb-2" />
          <p className="text-black text-lg">Age: {pet.age}</p>
          <p className="text-black text-lg">Gender: {pet.sex}</p>
          <p className="text-black text-lg">Breed: {pet.breed}</p>
          <p className="text-black text-lg">Size: {pet.size}</p>
          <p className="text-black text-lg">Type: {pet.type}</p>
        </div>
      </div>
    </Link>
  );
}
