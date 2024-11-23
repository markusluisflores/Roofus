import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "500", "300", "400", "700", "900"],
    subsets: ["latin"],
  });

export default function PetCard() {
  return (
    <div className="flex flex-col shadow-md bg-brandWhite m-3 p-2 rounded-md">
      <div className="flex justify-center">
        <Image
          className="rounded-lg border"
          src="https://random.dog/00186969-c51d-462b-948b-30a7e1735908.jpg"
          width={240}
          height={240}
          alt="Pet Image"
        />
      </div>
      <div className={`${roboto.className}`}>
        <p className="text-black text-lg text-center font-bold mt-1">Roofus</p>
        <hr className="w-full h-1 border-gray-500 my-1" />
        <p className="text-black text-xs">Age: 7</p>
        <p className="text-black text-xs">Gender: Male</p>
        <p className="text-black text-xs">Breed: Corgie</p>
        <p className="text-black text-xs">Size: Medium</p>
        <p className="text-black text-xs">Type: Dog</p>
      </div>
    </div>
  );
}
