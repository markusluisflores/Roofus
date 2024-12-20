import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function DashboardCard({ title, icon, openForm }) {

  const openAddForm = () => {
    openForm("Add", "");
  }

  return (
    <div onClick={openAddForm} className="cursor-pointer flex flex-col shadow-xl bg-brandWhite p-4 rounded-lg hover:shadow-2xl transition text-black">
      <div className="flex justify-center w-[160px] h-[144px] bg-brandWhite rounded-lg ">
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
  );
}
