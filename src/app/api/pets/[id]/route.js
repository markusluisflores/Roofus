import { dbDeletePet, dbGetPet, dbUpdatePet } from "@/_services/pet-service";
import { z } from "zod";

export async function GET(request, { params }) {
  try {
    console.log("called");
    const { id } = await params;

    const pet = await dbGetPet(id);

    return new Response(JSON.stringify(pet), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;

    const pet = await request.json();
    pet.age = Number(pet.age);
    const petSchema = z.object({
      name: z.string(),
      location: z.string(),
      breed: z.string(),
      age: z.number(),
      sex: z.string(),
      size: z.string(),
      type: z.string(),
      description: z.string(),
      img: z.string(),
    });

    const validatedPet = petSchema.parse(pet);

    await dbUpdatePet(id, validatedPet);

    return new Response(
      JSON.stringify({ message: "Update Successful", pet: validatedPet }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await dbDeletePet(id);

    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
