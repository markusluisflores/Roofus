import NavBar from "@/components/nav";
import PetCard from "@/components/pet-card";

export default function PetsForAdoption() {
  return (
    <main>
      <NavBar />
      <div className="flex justify-center">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </main>
  );
}
