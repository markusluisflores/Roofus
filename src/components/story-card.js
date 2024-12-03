/* eslint-disable @next/next/no-img-element */
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function AdoptionStoryCard({ story }) {
  return (
    <div className="bg-brandWhite rounded-xl shadow-md mb-2 p-4 flex-shrink-0 w-full max-w-[540px]">
      <div className="lg:flex">
        <div className="flex-1 w-md:shrink-0 mr-4">
          <img
            src={story.img}
            alt={story.title}
            className="w-full h-48 object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <h3
            className={`${roboto.className} text-xl font-bold text-black mb-2`}
          >
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
