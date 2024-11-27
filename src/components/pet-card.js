/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function PetCard(props) {
  const { pet, url } = props;

  const textStyle = `${roboto.className} text-slate-900 text-xl font-medium`

  return (
    <Link href={url}>
      <div className="flex flex-col shadow-xl bg-brandWhite p-8 rounded-lg">
        <div className="flex justify-center w-[420px] h-[420px]">
          <img
            className="rounded-lg border w-full h-full object-cover"
            src={pet.img}
            alt="Pet Image"
          />
        </div>
        <div className={`${roboto.className}`}>
          <p className="text-4xl text-center font-bold my-5 text-brandRed">
            {pet.name.toUpperCase()}
          </p>
          <hr className="w-full h-1 border-gray-500 mb-2" />
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
