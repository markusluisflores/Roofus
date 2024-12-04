import { dbDeleteForm, dbGetForm, dbUpdateForm } from "@/_services/form-service";
import { z } from "zod";

export async function GET(request, { params }) {
    try {
        const { id } = await params;

        const form = await dbGetForm(id);

        return new Response(JSON.stringify(form), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 404,
        });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = await params;

        const form = await request.json();
        const formSchema = z.object({
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

        const validatedForm = formSchema.parse(form);

        await dbUpdateForm(id, validatedForm);

        return new Response(
            JSON.stringify({ message: "Update Successful", form: validatedForm }),
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
        await dbDeleteForm(id);

        return new Response(null, { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 404,
        });
    }
}