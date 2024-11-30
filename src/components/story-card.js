import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ["100", "500", "300", "400", "700", "900"],
    subsets: ["latin"],
  });  

export default function AdoptionStoryCard({story}) {
  return (
    <div className="bg-brandWhite rounded-xl shadow-md mb-2 p-4 flex-shrink-0 w-1/3">
      <div className="flex">
        <div className="w-[200px] h-[200px] mr-4">
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <h3 className={`${roboto.className} text-xl font-bold text-black mb-2`}>
            {story.title}
          </h3>
          <p className={`${roboto.className} text-black`}>
            {story.description}
          </p>
        </div>
      </div>
    </div>
  );
}
