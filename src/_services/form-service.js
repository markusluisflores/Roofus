import { db } from "@/_utils/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";


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

export async function dbGetForm(formId) {
    try {
        const formRef = doc(db, "forms", formId);
        const documentSnapshot = await getDoc(formRef);
        if (documentSnapshot.exists()) {
            return documentSnapshot.data();
        } else {
            console.log("This form does not exist in the database.");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function dbUpdateForm(formId, formObj) {
    try {
        const formRef = doc(db, "forms", formId);
        await updateDoc(formRef, formObj);
    } catch (error) {
        console.log(error);
    }
}

export async function dbDeleteForm(formId) {
    try {
        await deleteDoc(doc(db, "forms", formId));
    } catch (error) {
        console.log(error);
    }
}