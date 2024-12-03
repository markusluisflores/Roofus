import { db } from "@/_utils/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export async function dbGetAllAdmins() {
    try {
        const allAdminsReference = collection(db, "admins");
        const allAdminsQuery = query(allAdminsReference);
        const querySnapShot = await getDocs(allAdminsQuery);
        return querySnapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.log(error);
        return [];
    }
}