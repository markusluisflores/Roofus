import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { sampleObjectArray } from "@/sample";

const roboto = Roboto({
    weight: ["100", "500", "300", "400", "700", "900"],
    subsets: ["latin"],
});

export default function PetForm({ closeForm }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [sex, setSex] = useState("Male");
    const [size, setSize] = useState("");
    const [type, setType] = useState("Cat");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleBreedChange = (event) => setBreed(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleLocationChange = (event) => setLocation(event.target.value);
    const handleSexChange = (event) => setSex(event.target.value);
    const handleSizeChange = (event) => setSize(event.target.value);
    const handleTypeChange = (event) => setType(event.target.value);

    async function getPetImage(artId) {
        if (type == "cat") {
            try {
                const response = await fetch(
                    `https://api.thecatapi.com/v1/images/search`
                );
                const data = await response.json();
                return data[0].url;
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }
        else {
            try {
                const response = await fetch(
                    `https://dog.ceo/api/breeds/image/random`
                );
                const data = await response.json();
                return data.message;
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }

    }

    async function handleSubmit(event) {
        event.preventDefault();
        const petUrl = await getPetImage();
        let newDogObj = {
            name: name,
            age: age,
            breed: breed,
            description: description,
            location: location,
            sex: sex,
            size: size,
            type: type,
            img: petUrl
        }
        let request = new Request(
            "http://localhost:3000/api/pets",
            {
                method: "POST",
                body: JSON.stringify(newDogObj)
            }
        );

        try {
            const response = await fetch(request);
            if (response.ok) {
                console.log("Success");
                closeForm();
                // TODO: Display success message in the ui
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div
            className="absolute z-50 insert-0 min-h-screen w-screen flex items-center justify-center bg-gray-950/70 py-48"
            onClick={closeForm}
        >
            <div onClick={(event) => event.stopPropagation()}>
                <form
                    onSubmit={handleSubmit}
                    className={`${roboto.className} max-w-4xl mx-auto p-6 bg-white rounded-lg`}
                >
                    <h1 className="text-2xl text-black font-bold text-center mb-8">
                        Adoption Application Form
                    </h1>
                    <div className="mb-6">
                        <label className="block text-black text-lg font-medium mb-2">
                            Name
                        </label>
                        <input
                            className="w-full text-black p-3 border border-gray-300 rounded-md"
                            required
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-black text-lg font-medium mb-2">
                                Age
                            </label>
                            <input
                                type="number"
                                className="w-full text-black p-3 border border-gray-300 rounded-md"
                                required
                                value={age}
                                onChange={handleAgeChange}
                            />
                        </div>
                        <div>
                            <h2 className="text-lg text-black font-medium mb-2">Pet Type</h2>
                            <div className="flex items-center gap-6">
                                <div>
                                    <input
                                        type="radio"
                                        id="cat"
                                        name="pet_type"
                                        value="Cat"
                                        onChange={handleTypeChange}
                                        checked={type === "Cat"}
                                        required
                                    />
                                    <label className="ml-2 text-black text-l">Cat</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="dog"
                                        name="pet_type"
                                        value="Dog"
                                        onChange={handleTypeChange}
                                        checked={type === "Dog"}
                                    />
                                    <label className="ml-2 text-black text-l">Dog</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h2 className="text-lg text-black font-medium mb-2">Size</h2>
                            <select
                                className="w-full text-black p-3 border border-gray-300 rounded-md"
                                value={size}
                                onChange={handleSizeChange}
                                required
                            >
                                <option unselectable="" value=""></option>

                                <option value="Small">
                                    Small
                                </option>
                                <option value="Medium">
                                    Medium
                                </option>
                                <option value="Large">
                                    Large
                                </option>

                            </select>
                        </div>
                        <div>
                            <h2 className="text-lg text-black font-medium mb-2">Sex</h2>
                            <div className="flex items-center gap-6">
                                <div>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="sex_type"
                                        value="Male"
                                        onChange={handleSexChange}
                                        checked={sex === "Male"}
                                    />
                                    <label className="ml-2 text-black text-l">Male</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="female"
                                        name="sex_type"
                                        value="Female"
                                        onChange={handleSexChange}
                                        checked={sex === "Female"}
                                    />
                                    <label className="ml-2 text-black text-l">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-black text-lg font-medium mb-2">
                                Breed
                            </label>
                            <input
                                className="w-full text-black p-3 border border-gray-300 rounded-md"
                                required
                                value={breed}
                                onChange={handleBreedChange}
                            />
                        </div>
                        <div>
                            <label className="block text-black text-lg font-medium mb-2">
                                Location
                            </label>
                            <input
                                className="w-full text-black p-3 border border-gray-300 rounded-md"
                                required
                                value={location}
                                onChange={handleLocationChange}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-black text-lg font-medium mb-2">
                            Description:
                        </label>
                        <textarea
                            className="w-full p-3 text-black border border-gray-300 rounded-md"
                            required
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
