import Link from "next/link";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function DashboardCard({ title, icon, url }) {

  const titleStyle = `${roboto.className} text-4xl font-bold text-center text-brandRed my-5`;
  const textStyle = `${roboto.className} text-slate-900 text-xl font-medium text-center`;

  return (
    <Link href={url}>
      <div className="flex flex-col shadow-xl bg-gray-100 p-5 rounded-lg hover:shadow-2xl transition text-black">
        <div className="flex justify-center w-[300px] h-[300px] bg-gray-100 rounded-lg ">
          <div className="flex items-center justify-center text-brandRed text-8xl ">
            <Image
              src={icon}
              alt={`${title} Icon`}
              width={64}
              height={64}
            />
          </div>
        </div>
        <div className={roboto.className}>
            <h3 className="text-lg font-bold text-center">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
