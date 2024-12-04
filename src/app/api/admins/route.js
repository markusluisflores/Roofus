import { dbGetAllAdmins } from "@/_services/admin-service";

export async function GET() {
    try {
        const admins = await dbGetAllAdmins();

        return new Response(JSON.stringify(admins), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 404,
        });
    }
}