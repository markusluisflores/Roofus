import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function AdoptionFormCard({ form }) {

    const [petInfo, setPetInfo] = useState({});
    const petId = form.petId;

    async function getPetInfo() {
        try {
            const response = await fetch(`http://localhost:3000/api/pets/${petId}`);
            const data = await response.json();
            setPetInfo(data);
            console.log("The pet is");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPetInfo();
    }, [])

    return (
        <div
            className="border border-brandRed rounded-md p-2 m-2 w-96"
        >
            <div className="font-semibold text-base flex flex-row">
                <div>Applicant: {form.userName}</div>
                <div
                    onClick={() => { }}
                    className="ml-auto p-1 mx-1 h-fit w-fit hover:border rounded-sm border-red-300"
                >
                    <FaEdit size={20} />
                </div>
                <div
                    onClick={() => { }}
                    className="p-1 mx-1 h-fit w-fit hover:border rounded-sm border-red-300"
                >
                    <RiDeleteBin6Line size={20} />
                </div>
            </div>
            <p className="text-sm my-1">
                {petInfo.name} | {petInfo.type} | {petInfo.age} yrs old | {petInfo.location}
            </p>
            <div className="flex flex-row">
                <div className="flex flex-col font-semibold mr-auto">
                    <p>Date Submitted:</p>
                    <p>Phone Number:</p>
                    <p>Email:</p>
                    <p>Have Kids:</p>
                    <p>Have Pets:</p>
                    <p>Experience:</p>
                </div>
                <div className="flex flex-col font-medium mr-auto">
                    <p>{form.date}</p>
                    <p>{form.phoneNum}</p>
                    <p>{form.userEmail}</p>
                    <p>{form.haveKids}</p>
                    <p>{form.havePets}</p>
                    <p>{form.experience}</p>
                </div>
            </div>
            <p>{form.experienceInfo}</p>
        </div>
    )
}