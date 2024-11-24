import Image from "next/image";
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
      <div className="flex flex-col shadow-md bg-brandWhite mb-5 p-2 rounded-md">
        <div className="flex justify-center">
          <Image
            className="rounded-lg border"
            src={pet.img}
            width={240}
            height={240}
            alt="Pet Image"
          />
        </div>
        <div className={`${roboto.className}`}>
          <p className="text-black text-lg text-center font-bold mt-1">
            {pet.name}
          </p>
          <hr className="w-full h-1 border-gray-500 my-1" />
          <p className="text-black text-xs">Age: {pet.age}</p>
          <p className="text-black text-xs">Gender: {pet.gender}</p>
          <p className="text-black text-xs">Breed: {pet.breed}</p>
          <p className="text-black text-xs">Size: {pet.size}</p>
          <p className="text-black text-xs">Type: {pet.type}</p>
        </div>
      </div>
    </Link>
  );
}
