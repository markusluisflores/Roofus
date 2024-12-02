import { Roboto } from "next/font/google";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
});

export default function DashboardPetCard({ name, petId, photo, openForm }) {

    const openViewForm = () => {
        // Pass the petId here
        openForm("View", petId);
    }

    return (
        <div onClick={openViewForm} className="cursor-pointer flex flex-col border-brandRed border shadow-xl bg-gray-100 p-5 rounded-lg hover:shadow-2xl transition text-black ">
            <div className="flex justify-center bg-gray-100 rounded-lg ">
                <div className="flex items-center justify-center">
                    <Image
                        src={photo}
                        alt="Pet photo"
                        width={200}
                        height={200}
                        className="h-48 w-52"
                    />
                </div>
            </div>
            <div className={roboto.className}>
                <h3 className="text-lg font-bold text-center my-1">{name}</h3>
            </div>
            <div className="flex flex-row ml-auto">
                <div
                    onClick={(event) => event.stopPropagation()}
                    className="mx-1 mt-1 p-1 hover:border rounded-sm border-red-300">
                    <FaEdit size={20} />
                </div>
                <div
                    onClick={(event) => event.stopPropagation()}
                    className="mx-1 mt-1 p-1 hover:border rounded-sm border-red-300">
                    <RiDeleteBin6Line size={20} />
                </div>
            </div>
        </div>
    );
}
