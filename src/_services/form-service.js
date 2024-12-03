import { db } from "@/_utils/firebase";
import { addDoc, collection } from "firebase/firestore";


export async function dbAddForm(formObj) {
    try {
        const newFormReference = collection(db, "forms");
        const newFormPromise = await addDoc(newFormReference, formObj);
        console.log(newFormPromise.id);
    } catch (error) {
        console.log(error);
    }
}