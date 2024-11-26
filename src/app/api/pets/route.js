export async function GET() {
  try {
    const { id } = await params;

    const pets = await dbGetAllPets();

    return new Response(JSON.stringify(pets), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 404,
    });
  }
}
