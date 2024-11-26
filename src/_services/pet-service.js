import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbAddPet(petObj) {
    try {
        const newPetReference = collection(db, "pets");
        const newPetPromise = await addDoc(newPetReference, petObj);
        console.log(newPetPromise.id);
    } catch (error) {
        console.log(error);
    }
}

export async function dbUpdatePet(petId, petObj) {
    try {
        const petRef = doc(db, "pets", petId);
        await updateDoc(petRef, petObj);
    } catch (error) {
        console.log(error);
    }
}

export async function dbDeletePet(petId) {
    try {
        await deleteDoc(doc(db, "pets", petId));
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetPet(petId) {
    try {
        const petRef = doc(db, "pets", petId);
        const documentSnapshot = await getDoc(petRef);
        if (documentSnapshot.exists()) {
            return documentSnapshot.data();
        }
        else {
            console.log("This pet does not exist in the database.")
        }
    } catch (error) {
        console.log(error)
    }
}

