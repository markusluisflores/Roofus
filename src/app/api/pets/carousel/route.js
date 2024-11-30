import { dbGetAllPets } from "@/_services/pet-service";

export async function GET() {
  console.log("called");
  try {
    const pets = await dbGetAllPets();
    return new Response(JSON.stringify(pets), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
