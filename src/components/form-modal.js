import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { useUserAuth } from "@/_utils/auth-context";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function AdoptionForm({ onClose, petId, petName, formType, formId }) {

  const { user } = useUserAuth();

  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("Inexperienced");
  const [experienceInfo, setExperienceInfo] = useState("");
  const [haveKids, setHaveKids] = useState("No");
  const [havePets, setHavePets] = useState("No");
  const [displayName, setDisplayName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePhoneNumChange = (event) => setPhoneNum(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handleExperienceChange = (event) => setExperience(event.target.value);
  const handleExperienceInfoChange = (event) => setExperienceInfo(event.target.value);
  const handleHaveKidsChange = (event) => setHaveKids(event.target.value);
  const handleHavePetsChange = (event) => setHavePets(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const formData = {
      userName: user.displayName,
      userEmail: user.email,
      petId: petId,
      phoneNum: phoneNum,
      address: address,
      experience: experience,
      experienceInfo: experienceInfo,
      haveKids: haveKids,
      havePets: havePets,
      date: today
    };
    console.log(formData);
    if (formType == 'Add') {
      let request = new Request(
        "/api/forms",
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      try {
        const response = await fetch(request);
        if (response.ok) {
          console.log("Success");
          onClose();
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      formData.userEmail = applicantEmail;
      formData.userName = displayName;
      let request = new Request(
        `/api/forms/${formId}`,
        {
          method: "PUT",
          body: JSON.stringify(formData)
        }
      );

      try {
        const response = await fetch(request);
        if (response.ok) {
          console.log("Success");
          onClose();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  async function getFormInfo() {
    try {
      const response = await fetch(`/api/forms/${formId}`);
      const data = await response.json();
      setPhoneNum(data.phoneNum);
      setAddress(data.address);
      setExperience(data.experience);
      setExperienceInfo(data.experienceInfo);
      setHaveKids(data.haveKids);
      setHavePets(data.havePets);
      setDisplayName(data.userName);
      setApplicantEmail(data.userEmail);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (formType == "Edit") {
      getFormInfo();
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-gray-950/70"
      onClick={onClose}
    >
      <div onClick={(event) => event.stopPropagation()}>
        <form
          onSubmit={handleSubmit}
          className={`${roboto.className} max-w-4xl mx-auto p-6 bg-white rounded-lg`}
        >
          <h1 className="text-2xl text-black font-bold text-center mb-8">
            {formType == 'Edit' && 'Edit'} Adoption Application Form
          </h1>
          {
            formType == 'Edit' &&
            <div className="block text-black text-lg font-medium mb-2">
              Applicant: {displayName}
            </div>
          }
          <div className="block text-black text-lg font-medium mb-2">
            Pet Name: {petName}
          </div>

          <div className="mb-6">
            <label className="block text-black text-lg font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full text-black p-3 border border-gray-300 rounded-md"
              value={phoneNum}
              onChange={handlePhoneNumChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxLength={12}
              required
            />
            <label className="block text-black text-sm mt-1">
              Example: 123-456-7898
            </label>
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
                  value="Inexperienced"
                  onChange={handleExperienceChange}
                  checked={experience === "Inexperienced"}
                  required
                />
                <label className="text-black ml-2 text-l">Inexperienced</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="somewhat_experienced"
                  name="experience_type"
                  value="Somewhat Experienced"
                  onChange={handleExperienceChange}
                  checked={experience === "Somewhat Experienced"}
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
                  value="Experienced"
                  onChange={handleExperienceChange}
                  checked={experience === "Experienced"}
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
              name="experienceInfo"
              value={experienceInfo}
              onChange={handleExperienceInfoChange}
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
                  value="Yes"
                  onChange={handleHaveKidsChange}
                  checked={haveKids === "Yes"}
                  required
                />
                <label className="ml-2 text-black text-l">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="kids_no"
                  name="have_kids"
                  value="No"
                  onChange={handleHaveKidsChange}
                  checked={haveKids === "No"}
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
                  value="Yes"
                  onChange={handleHavePetsChange}
                  checked={havePets === "Yes"}
                  required
                />
                <label className="ml-2 text-black text-l">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="pets_no"
                  name="have_pets"
                  value="No"
                  onChange={handleHavePetsChange}
                  checked={havePets === "No"}
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
      </div>
    </div>
  );
}
