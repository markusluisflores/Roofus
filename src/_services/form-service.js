import { db } from "@/_utils/firebase";
import { addDoc, collection, getDocs, query } from "firebase/firestore";


export async function dbAddForm(formObj) {
    try {
        const newFormReference = collection(db, "forms");
        const newFormPromise = await addDoc(newFormReference, formObj);
        console.log(newFormPromise.id);
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetAllForms() {
    try {
        const allFormsReference = collection(db, "forms");
        const allFormsQuery = query(allFormsReference);
        const querySnapShot = await getDocs(allFormsQuery);
        return querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log(error);
        return [];
    }
}