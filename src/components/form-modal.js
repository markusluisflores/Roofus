import { useState } from "react";
import { Roboto } from "next/font/google";
import { sampleObjectArray } from "@/sample";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function AdoptionForm({ onClose }) {

  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [haveKids, setHaveKids] = useState("");
  const [havePets, setHavePets] = useState("");
  const [selectedPet, setSelectedPet] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);


  const handlePhoneNumChange = (event) => setPhoneNum(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleExperienceChange = (event) => setExperience(event.target.value);
  const handleHaveKidsChange = (event) => setHaveKids(event.target.value);
  const handleHavePetsChange = (event) => setHavePets(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      userId,
      phoneNum,
      address,
      experience,
      haveKids,
      havePets,
      selectedPet,
    };

    console.log(formData);

    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="bg-white rounded-lg max-w-4xl max-h-25 mx-auto p-6">
        <div className="p-10 text-black font-medium text-lg">
          <h1>Thank you for your application!</h1>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${roboto.className} max-w-4xl mx-auto p-6 bg-white rounded-lg`}
    >
      <h1 className="text-2xl text-black font-bold text-center mb-8">
        Adoption Application Form
      </h1>
      <div className="mb-6">
        <label className="block text-black text-lg font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          className="w-full text-black p-3 border border-gray-300 rounded-md"
          value={phoneNum}
          onChange={handlePhoneNumChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-black text-lg font-medium mb-2">
          Address
        </label>
        <input
          className="w-full text-black p-3 border border-gray-300 rounded-md"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg text-black font-medium mb-2">
          When it comes to pet ownership, would you consider yourself:
        </h2>
        <div className="flex flex-col gap-3">
          <div>
            <input
              type="radio"
              id="inexperienced"
              name="experience_type"
              value="inexperienced"
              onChange={handleExperienceChange}
              checked={experience === "inexperienced"}
            />
            <label className="text-black ml-2 text-l">Inexperienced</label>
          </div>
          <div>
            <input
              type="radio"
              id="somewhat_experienced"
              name="experience_type"
              value="somewhat_experienced"
              onChange={handleExperienceChange}
              checked={experience === "somewhat_experienced"}
            />
            <label className="text-black ml-2 text-l">
              Somewhat Experienced
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="experienced"
              name="experience_type"
              value="experienced"
              onChange={handleExperienceChange}
              checked={experience === "experienced"}
            />
            <label className="text-black ml-2 text-l">Experienced</label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-black text-lg font-medium mb-2">
          Tell us more about your pet ownership experience:
        </label>
        <textarea
          className="w-full p-3 text-black border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-6">
        <h2 className="text-lg text-black font-medium mb-2">
          Are there children in your household?
        </h2>
        <div className="flex items-center gap-6">
          <div>
            <input
              type="radio"
              id="kids_yes"
              name="have_kids"
              value="yes_kids"
              onChange={handleHaveKidsChange}
              checked={haveKids === "yes_kids"}
            />
            <label className="ml-2 text-black text-l">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="kids_no"
              name="have_kids"
              value="no_kids"
              onChange={handleHaveKidsChange}
              checked={haveKids === "no_kids"}
            />
            <label className="ml-2 text-black text-l">No</label>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg text-black font-medium mb-2">
          Are there other pets in your household?
        </h2>
        <div className="flex items-center gap-6">
          <div>
            <input
              type="radio"
              id="pets_yes"
              name="have_pets"
              value="yes_pets"
              onChange={handleHavePetsChange}
              checked={havePets === "yes_pets"}
            />
            <label className="ml-2 text-black text-l">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="pets_no"
              name="have_pets"
              value="no_pets"
              onChange={handleHavePetsChange}
              checked={havePets === "no_pets"}
            />
            <label className="ml-2 text-black text-l">No</label>
          </div>
        </div>
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
  );
}
