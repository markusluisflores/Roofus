import { dbAddPet, dbGetAllPets } from "@/_services/pet-service";
import { z } from "zod";

export async function GET() {
  try {

    const pets = await dbGetAllPets();
    console.log(pets);

    return new Response(JSON.stringify(pets), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}

export async function POST(request) {
  try {
    let newPet = await request.json();
    newPet.age = Number(newPet.age);

    const newPetSchema = z.object({
      name: z.string(),
      age: z.number().min(1).max(100),
      breed: z.string(),
      description: z.string(),
      location: z.string(),
      sex: z.string(),
      size: z.string(),
      type: z.string(),
      img: z.string()
    });

    try {
      newPetSchema.parse(newPet);
    } catch (error) {
      return new Response("Provided object does not match the schema", { status: 406 });
    }

    const response = dbAddPet(newPet);
    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
