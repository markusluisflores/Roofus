import { Roboto } from "next/font/google";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin"],
});

export default function DashboardPetCard({ name, petId, photo, openForm, openDeleteForm }) {

    const openViewForm = () => {
        openForm("View", petId);
    }

    const openEditForm = (event) => {
        event.stopPropagation();
        openForm("Edit", petId);
    }

    const openDeleteConfirmation = (event) => {
        event.stopPropagation();
        openDeleteForm(petId);
    }

    return (
        <div onClick={openViewForm} className="cursor-pointer flex flex-col shadow-xl bg-brandWhite p-4 rounded-lg hover:shadow-2xl transition text-black ">
            <div className="flex justify-center bg-gray-100 rounded-lg ">
                <div className="flex items-center justify-center">
                    <Image
                        src={photo}
                        alt="Pet photo"
                        width={200}
                        height={200}
                        className="h-36 w-40 object-cover"
                    />
                </div>
            </div>
            <div className={roboto.className}>
                <h3 className="text-lg font-bold text-center my-1">{name}</h3>
            </div>
            <div className="flex flex-row ml-auto">
                <div
                    onClick={openEditForm}
                    className="mx-1 mt-1 p-1 hover:border rounded-sm border-red-300">
                    <FaEdit size={20} />
                </div>
                <div
                    onClick={openDeleteConfirmation}
                    className="mx-1 mt-1 p-1 hover:border rounded-sm border-red-300">
                    <RiDeleteBin6Line size={20} />
                </div>
            </div>
        </div>
    );
}
