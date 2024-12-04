import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: ["100", "500", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function DeletePetForm({ closeForm, petId, setRefresh }) {

    const [name, setName] = useState("");
    const [petImg, setPetImg] = useState("");

    async function handleDelete() {
        try {
            let request = new Request(
                `api/pets/${petId}`,
                {
                    method: "DELETE"
                }
            );


            const response = await fetch(request);
            if (response.ok) {
                console.log("Success");
                setRefresh((prev) => prev + 1);
                closeForm();
                // TODO: Display success message in the ui
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function getPetInfo() {
        try {
            const response = await fetch(`api/pets/${petId}`);
            const data = await response.json();
            console.log(data);
            setName(data.name);
            setPetImg(data.img);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPetInfo();
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-gray-950/70 py-20"
            onClick={closeForm}
        >
            <div onClick={(event) => event.stopPropagation()}>
                <div
                    className={`${roboto.className} max-w-4xl mx-auto p-6 top-20 bg-white rounded-lg`}
                >
                    <h1 className="text-2xl text-black font-bold text-center mb-8">
                        Delete Pet
                    </h1>
                    <div className="mb-2 w-full flex justify-center">
                        {
                            petImg != '' &&
                            (
                                <Image
                                    src={petImg}
                                    alt="Pet photo"
                                    width={200}
                                    height={200}
                                    className="h-52 w-72"
                                />
                            )
                        }

                    </div>
                    <div className="mb-6">
                        <div className="block text-black text-lg font-medium mb-2">
                            Are you sure you want to delete {name}? &#128532;
                        </div>
                    </div>

                    <div className="flex justify-center gap-8">
                        <div
                            onClick={handleDelete}
                            className="bg-brandRed text-white font-medium py-3 px-6 rounded-md hover:bg-red-400 cursor-pointer"
                        >
                            Delete
                        </div>
                        <div
                            onClick={closeForm}
                            className="bg-blue-500 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-600 cursor-pointer"
                        >
                            Cancel
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
