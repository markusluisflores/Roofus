import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbAddUser(userObj) {
    try {
        const newUserReference = collection(db, "users");
        const newUserPromise = await addDoc(newUserReference, userObj);
        console.log(newUserPromise.id);
    } catch (error) {
        console.log(error);
    }
}

export async function dbUpdateUser(userId, userObj) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, userObj);
    } catch (error) {
        console.log(error);
    }
}

export async function dbDeleteUser(userId) {
    try {
        await deleteDoc(doc(db, "users", userId));
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetUser(userId) {
    try {
        const userRef = doc(db, "users", userId);
        const documentSnapshot = await getDoc(userRef);
        if (documentSnapshot.exists()) {
            return documentSnapshot.data();
        }
        else {
            console.log("This user does not exist in the database.")
        }
    } catch (error) {
        console.log(error)
    }
}

export async function dbAddUserForm(userId, userFormObj) {
    try {
        const newUserFormReference = collection(db, "users", userId, "user-forms");
        const newUserFormPromise = await addDoc(newUserFormReference, userFormObj);
        console.log(newUserFormPromise.id);
    } catch (error) {
        console.log(error);
    }
}

export async function dbUpdateUserForm(userId, formId, userFormObj) {
    try {
        const userFormRef = doc(db, "users", userId, "user-forms", formId);
        await updateDoc(userFormRef, userFormObj);
    } catch (error) {
        console.log(error);
    }
}

export async function dbDeleteUserForm(userId, formId) {
    try {
        await deleteDoc(doc(db, "users", userId, "user-forms", formId));
    } catch (error) {
        console.log(error);
    }
}

export async function dbGetUserForm(userId, formId) {
    try {
        const userFormRef = doc(db, "users", userId, "user-forms", formId);
        const documentSnapshot = await getDoc(userFormRef);
        if (documentSnapshot.exists()) {
            return documentSnapshot.data();
        }
        else {
            console.log("This form does not exist in the database.")
        }
    } catch (error) {
        console.log(error)
    }
}