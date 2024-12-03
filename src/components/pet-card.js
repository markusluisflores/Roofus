/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function PetCard(props) {
  const { pet, url } = props;

  const textStyle = `${roboto.className} text-slate-900 text-lg font-medium`;

  return (
    <Link
      href={url}
      className="bg-brandWhite rounded-xl shadow-md mb-2 p-4 flex-shrink-0 w-full max-w-[540px]"
    >
      <div className="sm:flex gap-x-4">
        <div className="flex-1 w-md:shrink-0">
          <img
            className="rounded-lg border w-full h-56 object-cover"
            src={pet.img}
            alt="Pet Image"
          />
        </div>
        <div className={`${roboto.className} flex-1 overflow-hidden`}>
          <p className="text-4xl text-center font-bold my-5 text-brandRed">
            {pet.name.toUpperCase()}
          </p>
          <hr className="w-full border-gray-500 mb-2" />
          <p className={textStyle}>Age: {pet.age}</p>
          <p className={textStyle}>Gender: {pet.sex}</p>
          <p className={textStyle}>Breed: {pet.breed}</p>
          <p className={textStyle}>Size: {pet.size}</p>
          <p className={textStyle}>Type: {pet.type}</p>
        </div>
      </div>
    </Link>
  );
}
