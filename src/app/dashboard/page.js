"use client";

import NavBar from "@/components/nav";
import { useEffect, useState } from "react";
import DashboardCard from "@/components/dashboard-card";
import { useUserAuth } from "@/_utils/auth-context";
import PetForm from "@/components/pet-form-modal";
import DashboardPetCard from "@/components/dashboard-pet-card";
import DeletePetForm from "@/components/pet-delete-modal";
import AdoptionFormCard from "@/components/adoption-form-card";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Dashboard() {
  const { user } = useUserAuth();
  const [adoptionForms, setAdoptionForms] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [petList, setPetList] = useState([]);
  const [openType, setOpenType] = useState("");
  const [currentPetId, setCurrentPetId] = useState("");
  const [refresh, setRefresh] = useState(0);

  // Temporary, not sure how we will implement this yet
  // Change this to "customer" if you want to render the other dashboard
  const [userRole, setUserRole] = useState("admin");

  const openForm = (openTypeParam, petId) => {
    setOpenType(openTypeParam);
    setCurrentPetId(petId);
    setShowForm(true);
  };
  const closeForm = () => setShowForm(false);

  const openDeleteForm = (petId) => {
    setCurrentPetId(petId);
    setShowDelete(true);
  };
  const closeDeleteForm = () => setShowDelete(false);

  async function getAllPets() {
    try {
      const response = await fetch("http://localhost:3000/api/pets");
      const data = await response.json();
      setPetList(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllForms() {
    try {
      const response = await fetch("http://localhost:3000/api/forms");
      const data = await response.json();
      console.log("form data is");
      console.log(data);
      setAdoptionForms(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPets();
  }, [refresh]);

  useEffect(() => {
    getAllForms();
  }, []);

  return (
    <main>
      <NavBar currentPage="Dashboard" />
      <div className="flex flex-col flex-1 justify-center w-screen items-center">
        {user ? (
          userRole === "admin" ? (
            <>
              {/* admin dashboard */}
              {showForm && (
                <PetForm
                  closeForm={closeForm}
                  openType={openType}
                  petId={currentPetId}
                  setRefresh={setRefresh}
                />
              )}
              {showDelete && (
                <div className="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-gray-950/70">
                  <DeletePetForm
                    closeForm={closeDeleteForm}
                    petId={currentPetId}
                    setRefresh={setRefresh}
                  />
                </div>
              )}
              <div className="relative bg-cover bg-center px-2">
                <h2
                  className={`${roboto.className} text-gray-800 text-3xl self-start text-center md:text-left max-w-[1200px] font-bold pt-8 pb-4 underline underline-offset-4`}
                >
                  Edit Data
                </h2>
                <div className="flex flex-1 flex-wrap justify-center md:justify-normal w-full max-w-[1496px] gap-4 pt-4">
                  <DashboardCard
                    title="Add Pet"
                    icon="/assets/dashboard/plus.png"
                    openForm={openForm}
                  />
                  {petList.map((pet) => (
                    <DashboardPetCard
                      key={pet.id}
                      name={pet.name}
                      petId={pet.id}
                      photo={pet.img}
                      openForm={openForm}
                      openDeleteForm={openDeleteForm}
                    />
                  ))}
                </div>
              </div>
              <div className="relative bg-cover bg-center px-2 py-8 max-h-[540px]">
                <h2
                  className={`${roboto.className} text-gray-800 text-3xl self-start text-center md:text-left max-w-[1200px] font-bold pt-8 pb-8 underline underline-offset-4`}
                >
                  Submitted Adoption Forms
                </h2>
                <div className="flex flex-1 flex-wrap justify-center md:justify-normal w-full max-w-[1496px] gap-4 pt-4 pb-8">
                  {adoptionForms.length > 0 ? (
                    adoptionForms.map((form) => (
                      <AdoptionFormCard key={form.id} form={form} />
                    ))
                  ) : (
                    <p>No forms submitted yet.</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* client dashboard */}
              <div className="relative bg-cover bg-center px-8 py-16">
                <h2 className="text-2xl font-bold mt-8 text-black">
                  Your Adoption Forms
                </h2>
                <div className="text-black mt-4">
                  {adoptionForms.length > 0 ? (
                    adoptionForms.map((form) => (
                      <div key={form.id} className="border-b py-2">
                        <p>
                          {form.name} - {form.status}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p>You haven't submitted any adoption forms yet.</p>
                  )}
                </div>
              </div>
            </>
          )
        ) : (
          <div className="relative bg-cover bg-center px-8 py-16">
            <h2 className="text-2xl text-center font-bold mt-8 text-black">
              Please Login to access Dashboard
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
