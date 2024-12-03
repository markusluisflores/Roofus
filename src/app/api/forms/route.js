import { dbAddForm, dbGetAllForms } from "@/_services/form-service";
import { z } from "zod";

export async function GET() {
    try {
        const forms = await dbGetAllForms();

        return new Response(JSON.stringify(forms), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 404,
        });
    }
}

export async function POST(request) {
    try {
        let newForm = await request.json();

        const newFormSchema = z.object({
            userName: z.string(),
            userEmail: z.string(),
            petId: z.string(),
            phoneNum: z.string(),
            address: z.string(),
            experience: z.string(),
            experienceInfo: z.string(),
            haveKids: z.string(),
            havePets: z.string(),
            date: z.string(),
        });

        try {
            newFormSchema.parse(newForm);
        } catch (error) {
            return new Response("Provided object does not match the schema", { status: 406 });
        }

        const response = dbAddForm(newForm);
        return new Response(JSON.stringify(response), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
        });
    }
}
